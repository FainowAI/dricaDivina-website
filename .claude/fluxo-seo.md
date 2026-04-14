# Fluxo: SEO — Otimização para Buscadores

## Visão Geral
Sistema de SEO on-page para o site Drica Divina. Usa `react-helmet-async` para meta tags dinâmicos por página, JSON-LD structured data para rich snippets no Google, sitemap.xml dinâmico via Edge Function, e canonical URLs.

## Componentes

### `src/components/SEOHead.tsx`
Componente reutilizável que injeta meta tags no `<head>`:
- title, description, og:*, twitter:*, canonical
- Props: title, description, ogImage, ogType, canonicalPath, noIndex, article (dates, author, tags)
- Usa `react-helmet-async` com `prioritizeSeoTags`

### `src/components/JsonLd.tsx`
Componentes de structured data:
- `OrganizationJsonLd` — schema da organização (usado na home)
- `WebSiteJsonLd` — schema do site (usado na home)
- `ArticleJsonLd` — schema de artigo (usado na ArticlePage)
- `BreadcrumbJsonLd` — schema de breadcrumbs (usado na ArticlePage)

### `src/components/Breadcrumbs.tsx`
Breadcrumbs visuais com navegação (Home → Categoria → Artigo).

### `src/lib/seo.ts`
Constantes centralizadas:
- `SITE_URL` — URL base do site
- `SEO_DEFAULTS` — título, description, og:image padrão
- `CATEGORY_SEO` — meta por categoria (skincare, cabelo, maquiagem, saude)
- `truncateForMeta()` — trunca texto para 160 chars
- `canonicalUrl()` — gera URL canônica

## Edge Function: `sitemap`
- Path: `/functions/v1/sitemap`
- Gera XML com rotas estáticas + posts publicados do banco
- Cache: 1 hora
- JWT desabilitado (público para crawlers)
- Referenciado no `public/robots.txt`

## AIEO / GEO (AI Engine Optimization)

### `public/llms.txt`
Arquivo Markdown seguindo a especificação llmstxt.org. Serve como "robots.txt para IAs":
- Descreve a marca, categorias, páginas principais e estrutura do conteúdo
- Formato: H1 (nome) → blockquote (resumo) → seções H2 com links
- Permite que ChatGPT, Perplexity, Claude e Gemini entendam o site ao gerar respostas
- Deve ser atualizado quando novas categorias ou seções forem adicionadas

### `public/robots.txt`
Atualizado com permissões explícitas para AI crawlers:
- ChatGPT-User, GPTBot, PerplexityBot, anthropic-ai, Claude-Web, Google-Extended
- Todos com `Allow: /` e `Allow: /llms.txt`
- `Disallow: /admin/` para evitar indexação do painel admin

## Páginas Editadas
Todas as páginas do site receberam `<SEOHead>`:
- Index.tsx — SEOHead default + OrganizationJsonLd + WebSiteJsonLd
- Blog, Skincare, Cabelo, Maquiagem, Saude, Sobre, Video, Contato — SEOHead com meta específico
- ArticlePage.tsx — SEOHead dinâmico + ArticleJsonLd + BreadcrumbJsonLd + Breadcrumbs visuais + share buttons corrigidos

## Dependências
- `react-helmet-async` — adicionada ao package.json
- `HelmetProvider` — wrapping no App.tsx (entre QueryClientProvider e TooltipProvider)

## Gotchas
- `SITE_URL` em `src/lib/seo.ts` deve ser atualizada se o domínio mudar
- A og:image da Edge Function sitemap usa SUPABASE_SERVICE_ROLE_KEY (var automática)
- robots.txt tem `Disallow: /admin/` para não indexar painel admin
- react-helmet-async SOBRESCREVE os meta do index.html — HTML serve de fallback para crawlers sem JS
- Após deploy, submeter sitemap no Google Search Console
