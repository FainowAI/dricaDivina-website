# Fluxo: Marcas Parceiras (site público)

## Visão Geral
Seção da página /sobre que exibe as marcas com quem a Drica Divina tem parceria. Os dados vêm da tabela `brand_partners` do Supabase compartilhado e são gerenciados pelo painel admin (repo `drica-s-divine-hub`, rota `/admin/brands`).

## Componente
- `src/components/BrandPartners.tsx` — carrossel horizontal infinito (marquee) com animação contínua direita → esquerda.

## Comportamento visual
- Carrossel full-bleed (escapa do container, ocupa 100vw)
- Velocidade: ~30s por loop completo
- Direção: direita → esquerda
- Pause on hover (toda a faixa pausa quando o mouse entra)
- Gradient masks nas bordas para suavizar entrada/saída
- Cards com largura fixa (44/60 em mobile/desktop)
- Logos em grayscale, ganham cor ao hover do card individual
- Fallback: marcas sem `logo_url` aparecem como texto

## Dependências
- Tabela `brand_partners` (filtro `is_active = true`, ordenação por `display_order`)
- Tipos: `Tables<"brand_partners">` de `src/integrations/supabase/types.ts`
- Tailwind keyframe `marquee` em `tailwind.config.ts` (translateX 0 → -50%)
- framer-motion para animações de hover
- Componentes próprios: `FadeIn`, `AnimatedScribble`

## Truques de implementação
- Lista duplicada (`[...brands, ...brands]`) para loop seamless: a animação vai de `translateX(0)` a `translateX(-50%)`, e como a metade B é igual à metade A, o "snap" no reset é invisível
- `group-hover:[animation-play-state:paused]` para pause CSS puro
- `group/card` interno preserva hover individual sem conflitar com pause do container

## Gotchas
- A tabela `brand_partners` é gerenciada por OUTRO repo (`drica-s-divine-hub`) — não criar interface de edição neste repo
- Logos uploadados pelo admin ficam em `site-assets/brand-logos/{brand_id}/` (bucket público no Supabase)
- Tipos já estão gerados em `supabase/types.ts` — NÃO usar mais `from("brand_partners" as any)`
