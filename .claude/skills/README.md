# Skills — Project

Skills are reusable instructions that teach the AI to follow project-specific patterns.

## Structure

```
.claude/skills/
├── README.md
├── directives/        ← Skills that encode SOPs and business logic
│   └── <name>/
│       └── SKILL.md
└── workflows/         ← Skills for dev workflows
    └── <name>/
        └── SKILL.md
```

## Categories

### `directives/`
Skills that teach the AI to create, follow, and update the project's directives.
They integrate with `directives/` and `execution/` as defined in AGENTS.md.

### `workflows/`
Dev workflow skills, business-agnostic.
Examples: commit patterns, feature flow, debugging process.

## How to create a skill

1. Create a folder with the skill name inside the correct category
2. Create `SKILL.md` with YAML frontmatter:

```markdown
---
name: skill-name
description: When to use this skill and what it does.
---

# Instructions

Steps, patterns, examples...
```
