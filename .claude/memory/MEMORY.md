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
- React 18 + TypeScript + Vite (frontend framework)
- Tailwind CSS + shadcn/ui (styling)
- Supabase (auth + database)
- React Query (data fetching)
- React Router DOM (routing)
- Framer Motion (animations)
- npm (package manager)

## Project: Drica Divina - O Início
- Landing page / portal de conteúdo
- Componentes: Articles, Podcast, YouTube, Newsletter, SkinCare, etc.
- Design system com componentes shadcn/ui

## Key Conventions
- Follow AGENTS.md before writing any code
- Check `execution/` for existing scripts before creating new ones
- Deliverables go to cloud, intermediates to `.tmp/`
- Self-anneal: fix errors, update directives, test again
