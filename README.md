# AI Skills Hub — Registry

This is the source-of-truth registry for **AI Skills Hub**. Every skill
that appears on the public marketplace lives here as a folder under
`skills/<skill-id>/`.

## Layout

```
Skills/
├── README.md               (this file)
├── registry.json           (CI-built index — do not edit by hand)
├── agents.json             (mirror of supported agents)
├── categories.json         (catalog category list)
├── docs/                   (publishing + spec)
└── skills/
    └── <skill-id>/
        ├── skill.json
        ├── SKILL.md
        └── README.md
```

## Adding a skill (Mode 1)

1. `git checkout -b add-<skill-id>`
2. `mkdir -p skills/<skill-id>` and add `skill.json` + `SKILL.md`.
3. Open a PR. CI runs `validate-skills.yml` against the changed folders.
4. A maintainer reviews and merges. CI rebuilds `registry.json` on `main`.
5. The website picks up the change on the next cache TTL (60 seconds for the index).

See `docs/PUBLISHING.md` for the full guide and `docs/SKILL-SPEC.md` for the manifest format.

## Install command

```
npx skillhub add https://github.com/omerilyas/Skills.git --skill <skill-id>
```
