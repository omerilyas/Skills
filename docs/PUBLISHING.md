# Publishing a skill (Mode 1)

Manual GitHub publishing. The platform admin portal will eventually open
PRs for you (Mode 2), but Mode 1 is the supported MVP path.

## Prerequisites

- You can push branches to `omerilyas/Skills`.
- Your skill conforms to `docs/SKILL-SPEC.md`.

## Steps

1. `git checkout -b add-<skill-id>`
2. Create the folder `skills/<skill-id>/` containing at minimum:
   - `skill.json` — manifest, see `docs/SKILL-SPEC.md`
   - `SKILL.md` — human-readable description
   - `README.md` — short overview shown on GitHub (optional)
3. Optional folders allowed: `prompts/`, `templates/`, `examples/`, `assets/`, `config/`, `hooks/`.
4. `git add . && git commit -m "Add <skill-id>"`
5. `git push -u origin add-<skill-id>`
6. Open a PR titled `Add <skill-id>`.
7. Wait for the `validate-skills` check.
8. A maintainer reviews and merges. The website reflects the change within ~60s.

## Updating an existing skill

- Bump `skill.json#version` (semver).
- Update content under `skills/<skill-id>/`.
- Open a PR; same review path.

## Removing a skill

Don't delete the folder. Open a PR that flips the skill's `visibility` to
`Deprecated` in `registry.json` (CI will preserve the field).
