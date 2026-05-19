#!/usr/bin/env node
// Folder-level validator for the omerilyas/Skills registry.
//
// Walks `skills/<id>/`, checks the structural rules from
// docs/SKILL-SPEC.md §3 + §10 that apply at folder granularity (no ZIP-only
// rules). Mirrors the in-app validator at packages/package-validator so that
// the same skill that passes upload also passes CI.
//
// Phase 3 deliberately keeps this script self-contained (no npm install) so
// validate-skills.yml stays fast. When the SDK matures we'll consume the
// `@skillhub/package-validator` package directly.

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const REPO_ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = path.join(REPO_ROOT, "skills");
const REGISTRY_PATH = path.join(REPO_ROOT, "registry.json");

const AGENT_IDS = new Set([
  "claude-code", "cursor", "codex", "github-copilot", "windsurf", "gemini",
  "cline", "amp", "antigravity", "clawdbot", "droid", "goose", "kilo",
  "kiro-cli", "nous-research", "opencode", "roo", "trae", "vscode", "generic",
]);

const ALLOWED_TOP_FOLDERS = new Set([
  "prompts", "templates", "examples", "assets", "config", "hooks",
]);

const SEMVER_RE = /^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/;
const ID_RE = /^[a-z][a-z0-9-]*$/;

const FORBIDDEN_PATTERNS = [
  /(^|\/)\.env(\..+)?$/i,
  /(^|\/)\.ssh(\/|$)/i,
  /(^|\/)\.aws(\/|$)/i,
  /(^|\/)\.config\/gh(\/|$)/i,
  /\.pem$/i,
  /\.key$/i,
  /(^|\/)id_rsa([._-].*)?$/i,
  /(^|\/)credentials([._-].*)?$/i,
];

const findings = [];
function add(scope, severity, rule, message) {
  findings.push({ scope, severity, rule, message });
}

function isUnsafePath(p) {
  if (path.isAbsolute(p)) return true;
  if (/^[A-Za-z]:/.test(p)) return true;
  return p.split(/[\\/]/).some((s) => s === "..");
}

function targetsForbidden(p) {
  return FORBIDDEN_PATTERNS.some((re) => re.test(p));
}

function validateSkillFolder(skillId) {
  const dir = path.join(SKILLS_DIR, skillId);
  const scope = `skills/${skillId}`;
  const stat = fs.statSync(dir);
  if (!stat.isDirectory()) {
    add(scope, "critical", "skill.notDir", `not a directory: ${dir}`);
    return;
  }

  const manifestPath = path.join(dir, "skill.json");
  const skillMdPath = path.join(dir, "SKILL.md");

  if (!fs.existsSync(manifestPath)) {
    add(scope, "critical", "manifest.missing", `skill.json missing in ${skillId}`);
    return;
  }
  if (!fs.existsSync(skillMdPath)) {
    add(scope, "critical", "skill-md.missing", `SKILL.md missing in ${skillId}`);
    return;
  }

  const skillMd = fs.readFileSync(skillMdPath, "utf8");
  if (!skillMd.trim()) {
    add(scope, "critical", "skill-md.empty", `SKILL.md is empty`);
  }

  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (err) {
    add(scope, "critical", "manifest.parse", `skill.json unparseable: ${err.message}`);
    return;
  }

  // Top-level folders.
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isSymbolicLink()) {
      add(scope, "critical", "path.symlink", `symlink not allowed: ${entry.name}`);
      continue;
    }
    if (entry.isDirectory() && !ALLOWED_TOP_FOLDERS.has(entry.name)) {
      add(scope, "critical", "structure.folder", `disallowed top-level folder: ${entry.name}/`);
    }
  }

  // Manifest fields.
  if (manifest.skillSpecVersion !== "1") {
    add(scope, "critical", "manifest.skillSpecVersion", `skillSpecVersion must be "1"`);
  }
  if (manifest.id !== skillId) {
    add(scope, "critical", "manifest.idMatch", `id "${manifest.id}" must match folder name "${skillId}"`);
  }
  if (typeof manifest.id !== "string" || !ID_RE.test(manifest.id)) {
    add(scope, "critical", "manifest.id", `id must be lowercase kebab-case`);
  }
  for (const f of ["name", "version", "summary", "description", "whenToUse", "owner", "category"]) {
    if (typeof manifest[f] !== "string" || !manifest[f].trim()) {
      add(scope, "critical", `manifest.${f}`, `field "${f}" is required`);
    }
  }
  if (typeof manifest.version === "string" && !SEMVER_RE.test(manifest.version)) {
    add(scope, "critical", "manifest.version", `version "${manifest.version}" is not valid semver`);
  }
  if (!Array.isArray(manifest.supportedAgents) || manifest.supportedAgents.length === 0) {
    add(scope, "critical", "manifest.supportedAgents", `supportedAgents must be a non-empty array`);
  } else {
    for (const a of manifest.supportedAgents) {
      if (!AGENT_IDS.has(a)) {
        add(scope, "critical", "manifest.supportedAgents", `unknown agent: ${a}`);
      }
    }
  }
  if (manifest.suggestedRiskLevel && !["Low", "Medium", "High"].includes(manifest.suggestedRiskLevel)) {
    add(scope, "warning", "manifest.suggestedRiskLevel", `unknown risk level: ${manifest.suggestedRiskLevel}`);
  }
  if (manifest.tags !== undefined && !Array.isArray(manifest.tags)) {
    add(scope, "warning", "manifest.tags", `tags must be an array of strings`);
  }
  if (typeof manifest.summary === "string" && manifest.summary.length > 140) {
    add(scope, "warning", "manifest.summary.length", `summary is ${manifest.summary.length} chars; keep it under 140`);
  }

  // Forbidden fields — catalog state must not be authored.
  for (const field of ["visibility", "approvalStatus", "riskLevel", "installCount", "downloadCount"]) {
    if (manifest[field] !== undefined) {
      add(scope, "critical", "manifest.catalogState", `field "${field}" must not appear in skill.json (it lives in registry.json)`);
    }
  }

  // installPaths safety (Phase 3).
  if (manifest.installPaths) {
    if (typeof manifest.installPaths !== "object" || Array.isArray(manifest.installPaths)) {
      add(scope, "critical", "manifest.installPaths", `installPaths must be an object`);
    } else {
      for (const [agent, spec] of Object.entries(manifest.installPaths)) {
        if (!AGENT_IDS.has(agent)) {
          add(scope, "critical", "manifest.installPaths.agent", `installPaths references unknown agent: ${agent}`);
          continue;
        }
        const files = spec?.files;
        if (Array.isArray(files)) {
          for (const f of files) {
            if (typeof f !== "string") continue;
            if (isUnsafePath(f)) {
              add(scope, "critical", "manifest.installPaths.unsafe", `installPaths["${agent}"] file is unsafe: ${f}`);
            }
            if (targetsForbidden(f)) {
              add(scope, "critical", "manifest.installPaths.forbidden", `installPaths["${agent}"] targets a forbidden file: ${f}`);
            }
          }
        }
        const cmf = spec?.configMergeFile;
        if (typeof cmf === "string" && isUnsafePath(cmf)) {
          add(scope, "critical", "manifest.installPaths.unsafe", `installPaths["${agent}"].configMergeFile is unsafe: ${cmf}`);
        }
      }
    }
  }
}

function validateRegistryIndex() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    add("registry.json", "critical", "registry.missing", `registry.json missing at repo root`);
    return;
  }
  let reg;
  try {
    reg = JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8"));
  } catch (err) {
    add("registry.json", "critical", "registry.parse", `registry.json unparseable: ${err.message}`);
    return;
  }
  if (!Array.isArray(reg.skills)) {
    add("registry.json", "critical", "registry.shape", `registry.skills must be an array`);
    return;
  }
  const folderIds = new Set(
    fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name),
  );
  const registryIds = new Set();
  for (const entry of reg.skills) {
    if (!entry?.id) continue;
    registryIds.add(entry.id);
    if (!folderIds.has(entry.id)) {
      add(`registry.json#${entry.id}`, "critical", "registry.orphan", `registry entry has no matching skills/${entry.id}/ folder`);
    }
  }
  for (const id of folderIds) {
    if (!registryIds.has(id)) {
      add(`skills/${id}`, "warning", "registry.unindexed", `skills/${id}/ is not listed in registry.json`);
    }
  }
}

if (!fs.existsSync(SKILLS_DIR)) {
  console.error(`No skills/ directory at ${SKILLS_DIR}`);
  process.exit(1);
}

const skillIds = fs
  .readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

for (const id of skillIds) validateSkillFolder(id);
validateRegistryIndex();

const critical = findings.filter((f) => f.severity === "critical");
const warnings = findings.filter((f) => f.severity === "warning");

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):`);
  for (const f of warnings) console.log(`  [${f.scope}] ${f.rule}: ${f.message}`);
}

if (critical.length) {
  console.log(`\n✖ ${critical.length} critical finding(s):`);
  for (const f of critical) console.log(`  [${f.scope}] ${f.rule}: ${f.message}`);
  process.exit(1);
}

console.log(`\n✔ All ${skillIds.length} skill(s) and registry.json are valid.`);
