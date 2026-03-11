# Skills — dricaDivina Website

Skills são instruções reutilizáveis que ensinam a IA a seguir padrões específicos do projeto.

## Estrutura

```
.claude/skills/
├── README.md
├── directives/        ← Skills que codificam SOPs e lógica de negócio
│   └── <nome>/
│       └── SKILL.md
└── workflows/         ← Skills de workflows de desenvolvimento
    └── <nome>/
        └── SKILL.md
```

## Categorias

### `directives/`
Skills que ensinam a IA a criar, seguir e atualizar as diretivas do projeto.
Integram com `directives/` e `execution/` conforme definido em AGENTS.md.

### `workflows/`
Skills de workflow de desenvolvimento, agnósticas ao negócio.
Exemplos: padrão de commit, fluxo de feature, processo de debug.

## Como criar uma skill

1. Crie uma pasta com o nome da skill dentro da categoria correta
2. Crie `SKILL.md` com frontmatter YAML:

```markdown
---
name: nome-da-skill
description: Quando usar esta skill e o que ela faz.
---

# Instruções

Passos, padrões, exemplos...
```
