#!/usr/bin/env bash
# Bootstrap script for Be56 AI project structure
# Usage: bash bootstrap.sh [project_root]
# If no project_root is given, uses current directory.

set -euo pipefail

PROJECT_ROOT="${1:-.}"
PROJECT_ROOT="$(cd "$PROJECT_ROOT" && pwd)"

echo "🚀 Bootstrapping Be56 AI structure in: $PROJECT_ROOT"
echo ""

# Track what was created
CREATED=()
SKIPPED=()

create_dir() {
  local dir="$PROJECT_ROOT/$1"
  if [ ! -d "$dir" ]; then
    mkdir -p "$dir"
    CREATED+=("📁 $1")
  else
    SKIPPED+=("📁 $1 (already exists)")
  fi
}

create_file() {
  local file="$PROJECT_ROOT/$1"
  local content="$2"
  if [ ! -f "$file" ]; then
    mkdir -p "$(dirname "$file")"
    echo "$content" > "$file"
    CREATED+=("📄 $1")
  else
    SKIPPED+=("📄 $1 (already exists)")
  fi
}

# Step 1: Create directories
echo "Creating directory structure..."
create_dir ".claude/memory"
create_dir ".claude/skills/directives"
create_dir ".claude/skills/workflows"
create_dir "directives"
create_dir "execution"
create_dir ".tmp"

# Step 2: Create AGENTS.md
echo "Creating AGENTS.md..."
create_file "AGENTS.md" '# Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md so the same instructions load in any AI environment.

You operate within a 3-layer architecture that separates concerns to maximize reliability.

## The 3-Layer Architecture

**Layer 1: Directive (What to do)**
- SOPs written in Markdown, live in `directives/`
- Define goals, inputs, tools/scripts to use, outputs, and edge cases

**Layer 2: Orchestration (Decision making)**
- This is you (the AI). Read directives, call execution tools, handle errors, update directives with learnings.

**Layer 3: Execution (Doing the work)**
- Deterministic scripts in `execution/`
- Handle API calls, data processing, file operations

## Operating Principles

1. Check `execution/` for existing scripts before creating new ones
2. Self-anneal: fix errors → update tool → test → update directive
3. Update directives as living documents when you learn something new

## File Organization

- `.tmp/` — Intermediate files (never commit)
- `execution/` — Deterministic scripts
- `directives/` — SOPs in Markdown
- `.env` — Environment variables
- `.claude/memory/` — AI context
- `.claude/skills/` — Reusable skill instructions

Be pragmatic. Be reliable. Self-anneal.'

# Step 3: Mirror AGENTS.md
if [ ! -f "$PROJECT_ROOT/CLAUDE.md" ]; then
  cp "$PROJECT_ROOT/AGENTS.md" "$PROJECT_ROOT/CLAUDE.md"
  CREATED+=("📄 CLAUDE.md (copy of AGENTS.md)")
else
  SKIPPED+=("📄 CLAUDE.md (already exists)")
fi

if [ ! -f "$PROJECT_ROOT/GEMINI.md" ]; then
  cp "$PROJECT_ROOT/AGENTS.md" "$PROJECT_ROOT/GEMINI.md"
  CREATED+=("📄 GEMINI.md (copy of AGENTS.md)")
else
  SKIPPED+=("📄 GEMINI.md (already exists)")
fi

# Step 4: Create MEMORY.md
create_file ".claude/memory/MEMORY.md" '# Project Memory

## Architecture
- 3-layer system defined in `AGENTS.md`: directives → orchestration (AI) → execution (scripts)
- `directives/` — SOPs in Markdown
- `execution/` — deterministic scripts
- `.tmp/` — temporary files, never committed

## Skills Location
- `.claude/skills/directives/` — business logic skills
- `.claude/skills/workflows/` — dev workflow skills

## Stack
- [FILL: language + framework]
- [FILL: styling]
- [FILL: backend/database]
- [FILL: package manager]

## Key Conventions
- Follow AGENTS.md before writing any code
- Check `execution/` for existing scripts before creating new ones
- Self-anneal: fix errors, update directives, test again'

# Step 5: Create Skills README
create_file ".claude/skills/README.md" '# Skills

Skills are reusable instructions that teach the AI to follow project-specific patterns.

## Structure

- `directives/` — Skills that encode SOPs and business logic
- `workflows/` — Dev workflow skills (commit, deploy, review, etc.)

## How to create a skill

1. Create a folder inside the correct category
2. Create `SKILL.md` with YAML frontmatter (name + description)
3. Add scripts/, references/, or assets/ as needed'

# Step 6: Create commit skill
create_file ".claude/skills/workflows/commit/SKILL.md" '---
name: commit
description: Use when making commits. Defines message pattern and pre-commit checks.
---

# Commit Pattern

## Before committing
1. Check changes with `git diff --staged`
2. No sensitive files (.env, credentials, .tmp/)
3. Run tests if critical logic changed

## Message format
`<type>(<scope>): <short description>`

Types: feat, fix, refactor, docs, chore

## Never commit
- .env, keys/tokens
- .tmp/, node_modules/, dist/'

# Step 7: Update .gitignore
echo "Updating .gitignore..."
GITIGNORE="$PROJECT_ROOT/.gitignore"
touch "$GITIGNORE"
for entry in ".tmp/" ".env" ".env.*" "node_modules/" "dist/" "build/"; do
  if ! grep -qF "$entry" "$GITIGNORE" 2>/dev/null; then
    echo "$entry" >> "$GITIGNORE"
    CREATED+=("📝 .gitignore += $entry")
  fi
done

# Step 8: Clone skill-creator
echo "Pulling skill-creator from GitHub..."
SKILL_CREATOR_DIR="$PROJECT_ROOT/.claude/skills/skill-creator"
if [ ! -d "$SKILL_CREATOR_DIR" ]; then
  TMPDIR_CLONE=$(mktemp -d)
  if git clone --depth 1 --filter=blob:none --sparse \
    https://github.com/anthropics/skills.git "$TMPDIR_CLONE/repo" 2>/dev/null; then
    cd "$TMPDIR_CLONE/repo"
    git sparse-checkout set skills/skill-creator 2>/dev/null
    if [ -d "skills/skill-creator" ]; then
      cp -r skills/skill-creator "$SKILL_CREATOR_DIR"
      CREATED+=("📁 .claude/skills/skill-creator/ (from GitHub)")
    else
      SKIPPED+=("⚠️  skill-creator (sparse checkout failed)")
    fi
    cd "$PROJECT_ROOT"
  else
    SKIPPED+=("⚠️  skill-creator (git clone failed — clone manually later)")
  fi
  rm -rf "$TMPDIR_CLONE"
else
  SKIPPED+=("📁 .claude/skills/skill-creator/ (already exists)")
fi

# Summary
echo ""
echo "✅ Bootstrap complete!"
echo ""

if [ ${#CREATED[@]} -gt 0 ]; then
  echo "Created:"
  for item in "${CREATED[@]}"; do
    echo "  $item"
  done
fi

if [ ${#SKIPPED[@]} -gt 0 ]; then
  echo ""
  echo "Skipped:"
  for item in "${SKIPPED[@]}"; do
    echo "  $item"
  done
fi

echo ""
echo "Next steps:"
echo "  1. Fill in .claude/memory/MEMORY.md with your project details"
echo "  2. Read AGENTS.md to understand the 3-layer architecture"
echo "  3. Start creating directives in directives/"
echo "  4. Use skill-creator to build new skills"
