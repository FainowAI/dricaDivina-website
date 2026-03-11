---
name: commit
description: Use when making commits in this project. Defines the message pattern, pre-commit checks, and how to keep history clean.
---

# Commit Pattern

## Before committing

1. Check what changed with `git diff --staged`
2. Confirm no sensitive files (`.env`, credentials, `.tmp/`)
3. Run tests if the change affects critical logic

## Message format

```
<type>(<scope>): <short description>

[optional body — explain the why, not the what]
```

**Types:**
- `feat` — new feature
- `fix` — bug fix
- `refactor` — change without altering behavior
- `docs` — documentation or directives
- `chore` — config, dependencies, scripts

## What to never commit

- `.env` and any file with keys/tokens
- `.tmp/` folder
- `node_modules/`
- Build output (`dist/`, `build/`)
