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
- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui (Radix UI components)
- Supabase (auth + database)
- Bun (package manager)
- React Router DOM v6
- TanStack Query (server state)
- React Hook Form + Zod (forms + validation)
- Framer Motion (animations)

## Project
- Website para dricaDivina
- Estrutura de portfolio/apresentação pessoal

## Key Conventions
- Follow AGENTS.md before writing any code
- Check `execution/` for existing scripts before creating new ones
- Deliverables go to cloud, intermediates to `.tmp/`
- Self-anneal: fix errors, update directives, test again
- Componentes em `src/components/`, páginas em `src/pages/`
- Use shadcn/ui components para UI consistente
