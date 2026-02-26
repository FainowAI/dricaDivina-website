

# Plano de Ajustes Mobile - Todas as Paginas

## Problemas Identificados

Apos analise visual e de codigo em viewport 390x844 (iPhone), identifiquei os seguintes problemas em todas as paginas:

---

### 1. Navbar + StoriesMenu (Global)

**Problema**: O StoriesMenu fica fixo abaixo da navbar e ocupa espaco permanente no topo. Quando o usuario rola, ele continua visivel, empurrando o conteudo para baixo.

**Ajuste**:
- Fazer o StoriesMenu desaparecer ao rolar para baixo (scroll-aware hide)
- Reduzir o tamanho dos circulos de stories de `w-14 h-14` para `w-12 h-12` no mobile
- Reduzir o label de `text-[11px]` para `text-[10px]`

---

### 2. Pagina Home (Index.tsx)

**Problema**: O titulo "Contato" na pagina de contato e a hero da home nao tem padding-top suficiente para acomodar navbar + stories. O conteudo fica parcialmente escondido atras da barra fixa.

**Ajustes**:
- Aumentar `pt-32` para `pt-36` no skeleton da hero (compensar stories)
- HeroPost: titulo muito grande no mobile (`text-4xl`), reduzir para `text-2xl`
- AboutDrica: a imagem e o texto ficam muito apertados; reduzir padding interno do badge overlay
- AdPlaceholder: reduzir altura no mobile (atualmente `h-45` no large e visualmente desproporcional)
- BrowseThemes: grid `grid-cols-2` esta ok, mas os cards ficam pequenos; manter mas reduzir gap de `gap-6` para `gap-3`

---

### 3. Pagina Sobre (Sobre.tsx)

**Problema**: O titulo "Quem e DRICA DIVINA?" com `text-5xl` e muito grande no mobile e fica cortado/apertado. O padding top `pt-52` e excessivo com o stories visivel.

**Ajustes**:
- Reduzir titulo de `text-5xl` para `text-3xl` no mobile
- Ajustar `pt-52` para `pt-40` (ja tem stories empurrando)
- Reduzir `mb-8` do titulo para `mb-5`
- Paragrafo descritivo: `text-xl` e muito grande, reduzir para `text-base`
- Secao "Por que seguir a Drica": `py-24` e `mb-20` sao excessivos; reduzir para `py-12` e `mb-10`
- Cards de "Por que seguir": `p-10` excessivo, reduzir para `p-6` no mobile
- Social Stats: `text-6xl` e gigante, reduzir para `text-4xl`; `p-10` para `p-6`
- Artigos da Drica: `p-8` nos cards para `p-5`; `mb-20` do titulo para `mb-10`

---

### 4. Pagina Contato (Contato.tsx)

**Problema**: O titulo "Contato" nao aparece na tela -- esta escondido atras da navbar + stories. O `py-20` nao compensa a navbar fixa.

**Ajustes**:
- Mudar `py-20` para `pt-40 pb-12` no mobile (acomodar navbar + stories)
- Cards de email: `p-8` para `p-5` no mobile
- Reduzir espacamento entre cards `gap-6` para `gap-4`

---

### 5. Paginas de Categoria (CategoryPage.tsx - Skincare, Cabelo, Maquiagem, Saude, Blog)

**Problema**: O `pt-40` pode ser insuficiente com stories. O featured post mostra texto antes da imagem no mobile (order correto), mas o grid de posts usa `gap-6` que pode ser reduzido.

**Ajustes**:
- Verificar que `pt-40` funciona com stories (pode precisar de `pt-36`)
- Grid de posts: reduzir `gap-6` para `gap-4` no mobile
- Botao "Carregar Mais": `px-8 py-6` e muito grande, reduzir para `px-6 py-4`

---

### 6. Pagina de Artigo (ArticlePage.tsx)

**Problema**: O `pt-24` e insuficiente -- conteudo fica atras da navbar + stories. Botoes de share ficam apertados em uma linha.

**Ajustes**:
- Aumentar `pt-24` para `pt-36` no mobile
- Botoes de share: usar layout `flex-wrap` e reduzir tamanho dos botoes
- Imagem hero: `aspect-video` esta ok, manter
- Titulo `text-4xl` e grande demais, reduzir para `text-2xl`
- Summary: `text-xl` para `text-base`

---

### 7. Pagina de Video (Video.tsx)

**Problema**: Similar as categorias, o `pt-40` pode nao compensar completamente.

**Ajustes**:
- Grid de videos: `gap-6` para `gap-4` no mobile
- VideoCard: play button `w-16 h-16` esta ok para mobile

---

### 8. Pagina 404 (NotFound.tsx)

**Problema**: Pagina basica sem navbar, o que e inconsistente com o resto do site.

**Ajustes**:
- Adicionar Navbar
- Ajustar padding-top para acomodar navbar
- Traduzir textos para portugues ("Oops! Page not found" -> "Pagina nao encontrada")

---

### 9. Componentes Compartilhados

#### Newsletter
- `py-12` esta ok no mobile
- Input + botao: `gap-4` para `gap-3`, `max-w-md` esta ok

#### Footer
- Grid `grid-cols-1` no mobile esta correto
- Bottom bar links: `flex-wrap gap-6` funciona, mas reduzir `gap-6` para `gap-4`
- Verificar que o footer nao fica muito longo

#### EnhancedPostCard (MasonryGrid)
- Cards com alturas fixas (`h-[280px]`, `h-[380px]`, `h-[480px]`) podem causar problemas no mobile
- No mobile, usar apenas tamanhos "small" e "medium" para evitar cards gigantes

#### PostCardLarge
- `aspect-square` + texto: funciona bem no mobile
- Padding `p-4` esta adequado

---

## Resumo Tecnico das Alteracoes

| Arquivo | Alteracao Principal |
|---------|-------------------|
| `StoriesMenu.tsx` | Reduzir tamanho dos circulos, esconder ao rolar |
| `HeroPost.tsx` | Titulo menor no mobile (`text-2xl`) |
| `Index.tsx` | Ajustar pt do skeleton hero |
| `Sobre.tsx` | Titulo menor, reduzir paddings e espacamentos excessivos |
| `Contato.tsx` | Corrigir pt para acomodar navbar + stories |
| `ArticlePage.tsx` | Corrigir pt, titulo menor, share buttons responsivos |
| `CategoryPage.tsx` | Reduzir gaps no grid mobile |
| `NotFound.tsx` | Adicionar navbar, traduzir para PT-BR |
| `AboutDrica.tsx` | Reduzir padding interno no badge overlay mobile |
| `BrowseThemes.tsx` | Reduzir gap no grid mobile |
| `EnhancedPostCard.tsx` | Ajustar alturas fixas para mobile |
| `Footer.tsx` | Reduzir gaps entre links |

## Ordem de Implementacao

1. Correcoes de padding-top (navbar + stories) em todas as paginas
2. Reducao de tamanhos de fonte em titulos para mobile
3. Ajuste de espacamentos (paddings, gaps, margins) excessivos
4. StoriesMenu scroll-aware
5. NotFound traduzido e com navbar
6. Refinamentos em cards e componentes compartilhados

