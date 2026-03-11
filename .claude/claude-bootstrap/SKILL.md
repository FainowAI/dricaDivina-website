---
name: claude-bootstrap
description: Bootstrap the FAINOW AI-assisted project structure inside any repo. Use this skill whenever someone mentions "setup projeto", "iniciar projeto", "estrutura de pastas", "configurar .claude", "setup claude", "bootstrap", "organizar projeto para IA", or wants to add the 3-layer architecture (directives/orchestration/execution) to a new or existing project. Also trigger when someone drops this skill into a .claude folder and asks it to "set things up" or "rodar o bootstrap". Even if they just say "quero organizar meu projeto" — this is the one.
---

# Claude Bootstrap — FAINOW Project Structure

This skill turns any repository into an AI-assisted project by creating the standard FAINOW directory structure, the 3-layer architecture document (AGENTS.md), and pulling in essential tools like the skill-creator.

## When to use

- Starting a brand new project and want AI-friendly structure from day one
- Adding AI structure to an existing project that doesn't have `.claude/` yet
- Rebuilding or resetting the `.claude/` structure after it got messy
- Someone dropped this skill file into `.claude/skills/` and wants to bootstrap everything else

## How it works

The bootstrap is idempotent — it checks what already exists and only creates what's missing. It never overwrites existing files (unless the user explicitly asks). This makes it safe for both new and existing projects.

## Step 1: Understand the project context

Before creating anything, gather context so the generated files are useful, not generic:

1. **Check what already exists** — look for `.claude/`, `AGENTS.md`, `directives/`, `execution/`, `CLAUDE.md`, `GEMINI.md`
2. **Identify the stack** — scan `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`, `pyproject.toml`, `Gemfile`, or similar
3. **Ask the user** (only if unclear):
   - What does this project do? (one sentence)
   - What's the main stack? (language + framework + key tools)
   - Any cloud services? (Supabase, Firebase, AWS, etc.)

Use this info to fill in the MEMORY.md template and customize AGENTS.md.

## Step 2: Create the directory structure

Create these directories if they don't exist:

```
.claude/
├── memory/
├── skills/
│   ├── directives/
│   └── workflows/
└── (this skill lives here too)
```

Run this (adapt paths to the project root):

```bash
mkdir -p .claude/memory
mkdir -p .claude/skills/directives
mkdir -p .claude/skills/workflows
```

## Step 3: Create AGENTS.md

Create `AGENTS.md` at the project root. This is the core document that tells any AI assistant how to operate in this project. Also create symlinks as `CLAUDE.md` and `GEMINI.md` so every AI environment picks it up.

**Important:** If any of these files already exist, do NOT overwrite. Tell the user and ask what to do.

```markdown
# Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md so the same instructions load in any AI environment.

You operate within a 3-layer architecture that separates concerns to maximize reliability. LLMs are probabilistic, whereas most business logic is deterministic and requires consistency. This system fixes that mismatch.

## The 3-Layer Architecture

**Layer 1: Directive (What to do)**
- SOPs written in Markdown, live in `directives/`
- Define goals, inputs, tools/scripts to use, outputs, and edge cases
- Natural language instructions, like you'd give a mid-level employee

**Layer 2: Orchestration (Decision making)**
- This is you (the AI). Your job: intelligent routing.
- Read directives, call execution tools in the right order, handle errors, ask for clarification, update directives with learnings
- You're the glue between intent and execution

**Layer 3: Execution (Doing the work)**
- Deterministic scripts in `execution/`
- Handle API calls, data processing, file operations, database interactions
- Reliable, testable, fast. Use scripts instead of manual work.

**Why this works:** if you do everything yourself, errors compound. 90% accuracy per step = 59% success over 5 steps. Push complexity into deterministic code so you focus on decision-making.

## Operating Principles

**1. Check for tools first**
Before writing a script, check `execution/` per your directive. Only create new scripts if none exist.

**2. Self-anneal when things break**
- Read the error and stack trace
- Fix the script and test again (unless it uses paid credits — check with user first)
- Update the directive with what you learned
- Example: hit an API rate limit → find a batch endpoint → rewrite script → test → update directive

**3. Update directives as you learn**
Directives are living documents. When you discover constraints, better approaches, common errors — update the directive. Don't create or overwrite directives without asking unless explicitly told to.

## Self-Annealing Loop

When something breaks:
1. Fix it
2. Update the tool
3. Test tool, make sure it works
4. Update directive to include new flow
5. System is now stronger

## File Organization

- `.tmp/` — Intermediate files (never commit, always regenerated)
- `execution/` — Deterministic scripts (the tools)
- `directives/` — SOPs in Markdown (the instruction set)
- `.env` — Environment variables and API keys
- `.claude/memory/` — Project memory for AI context
- `.claude/skills/` — Reusable skill instructions

**Key principle:** Local files are only for processing. Deliverables live in cloud services where the user can access them. Everything in `.tmp/` can be deleted and regenerated.

## Summary

You sit between human intent (directives) and deterministic execution (scripts). Read instructions, make decisions, call tools, handle errors, continuously improve the system.

Be pragmatic. Be reliable. Self-anneal.
```

After writing AGENTS.md, create the symlinks:

```bash
# On Windows (copy instead of symlink for compatibility)
cp AGENTS.md CLAUDE.md
cp AGENTS.md GEMINI.md

# On macOS/Linux (prefer symlinks)
# ln -sf AGENTS.md CLAUDE.md
# ln -sf AGENTS.md GEMINI.md
```

## Step 4: Create MEMORY.md

Create `.claude/memory/MEMORY.md` with project-specific info gathered in Step 1:

```markdown
# Project Memory

## Architecture
- 3-layer system defined in `AGENTS.md`: directives → orchestration (AI) → execution (scripts)
- `directives/` — SOPs in Markdown (instructions for the AI)
- `execution/` — deterministic scripts
- `.tmp/` — temporary files, never committed

## Skills Location
- Project-specific skills live in `.claude/skills/`
- `directives/` — skills that encode SOPs and business logic
- `workflows/` — skills for dev workflows (commit, deploy, review, etc.)

## Stack
- [FILL: language + framework, e.g. "React + TypeScript + Vite"]
- [FILL: styling, e.g. "Tailwind CSS + shadcn/ui"]
- [FILL: backend/database, e.g. "Supabase (auth + database)"]
- [FILL: package manager, e.g. "Bun" or "npm" or "pnpm"]

## Key Conventions
- Follow AGENTS.md before writing any code
- Check `execution/` for existing scripts before creating new ones
- Deliverables go to cloud, intermediates to `.tmp/`
- Self-anneal: fix errors, update directives, test again
```

Replace the `[FILL: ...]` placeholders with the actual project info from Step 1. If you couldn't determine something, leave the placeholder so the user knows to fill it in.

## Step 5: Create Skills README

Create `.claude/skills/README.md`:

```markdown
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
```

## Step 6: Create starter commit skill

Create `.claude/skills/workflows/commit/SKILL.md` (skip if it already exists):

```markdown
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
```

## Step 7: Pull skill-creator from GitHub

Clone the Anthropic skill-creator into the skills folder. This gives the project the ability to create and improve new skills with a structured eval loop.

```bash
cd /tmp
git clone --depth 1 --filter=blob:none --sparse https://github.com/anthropics/skills.git anthropic-skills-tmp
cd anthropic-skills-tmp
git sparse-checkout set skills/skill-creator
cp -r skills/skill-creator "<PROJECT_ROOT>/.claude/skills/skill-creator"
cd /tmp && rm -rf anthropic-skills-tmp
```

If git is not available or the clone fails (network issues, etc.), inform the user and suggest they clone it manually later. The rest of the bootstrap still works without it.

## Step 8: Create essential root directories

Create the top-level directories referenced by AGENTS.md:

```bash
mkdir -p directives
mkdir -p execution
mkdir -p .tmp
```

Also make sure `.tmp/` is in `.gitignore`:

```bash
# Add to .gitignore if not already there
echo ".tmp/" >> .gitignore  # (check first to avoid duplicates)
```

## Step 9: Update .gitignore

Ensure these entries exist in `.gitignore` (add only what's missing):

```
.tmp/
.env
.env.*
node_modules/
dist/
build/
```

## Step 10: Summary report

After everything is done, give the user a clear summary:

```
Bootstrap complete! Here's what was created:

📁 .claude/
   ├── memory/MEMORY.md          ← Project context for AI
   ├── skills/
   │   ├── README.md             ← Skills documentation
   │   ├── directives/           ← Business logic skills
   │   ├── workflows/commit/     ← Commit pattern skill
   │   └── skill-creator/        ← Tool for creating new skills
   └── claude-bootstrap/         ← This skill (self-referential!)

📄 AGENTS.md                     ← 3-layer architecture doc
📄 CLAUDE.md                     ← Mirror of AGENTS.md
📄 GEMINI.md                     ← Mirror of AGENTS.md
📁 directives/                   ← SOPs go here
📁 execution/                    ← Deterministic scripts go here

Next steps:
1. Review and fill in MEMORY.md with your project details
2. Read AGENTS.md to understand the 3-layer architecture
3. Start creating directives in directives/ as you identify workflows
4. Use the skill-creator to build new skills: /skill-creator
```

## Edge cases

- **Project already has AGENTS.md**: Don't overwrite. Show the user both versions and let them merge.
- **Project already has .claude/**: Only create missing subdirectories and files.
- **Git not available**: Skip skill-creator clone, do everything else. Inform user.
- **Windows vs Unix**: Use `cp` instead of `ln -sf` for file mirroring on Windows. Use forward slashes in paths where possible.
- **Monorepo**: Ask user which package/workspace to bootstrap. Create structure at that level.
- **No package.json or equivalent**: That's fine — the bootstrap works for any project type. Just leave Stack section in MEMORY.md with placeholders.
