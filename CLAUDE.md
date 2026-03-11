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
