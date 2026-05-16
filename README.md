# Portfolio 2026 — Jonathan Rocha

> Creative Developer · Webflow Certified Expert · Shopify Partner

Portfólio pessoal com estética **editorial/Awwwards**, construído em Astro (SSG) com animações GSAP ScrollSmoother. Geração estática, deploy na Vercel.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Astro 6](https://astro.build) — `output: 'static'` |
| Animação | [GSAP 3](https://gsap.com) via CDN — ScrollTrigger · ScrollSmoother · CustomEase |
| Tipografia | Archivo Narrow (headings) + Rethink Sans (corpo) via Google Fonts |
| CSS | Custom Properties + scoped `<style>` por componente |
| Tipagem | TypeScript strict |
| Deploy | [Vercel](https://vercel.com) (detecção automática de Astro) |

---

## Comandos

```bash
npm run dev        # Servidor local em localhost:4321
npm run build      # Build de produção → ./dist/
npm run preview    # Preview do build antes de fazer deploy
npx astro check    # Validação TypeScript / tipo de coleções
```

**Node requerido:** `>=22.12.0`

---

## Estrutura de pastas

```
Portfolio2026/
│
├── public/
│   ├── fonts/                  # Fontes self-hosted (futuro)
│   ├── hero-medias/            # 01–10.png — imagens do mouse trail no Hero
│   └── about/
│       └── jonathan.rocha.png  # Foto de perfil da seção About
│
├── src/
│   ├── components/
│   │   ├── Hero.astro          # Navbar 3-col + mouse trail (MWG_021)
│   │   ├── AboutSection.astro  # Pin 500vh + word-reveal (MWG_004)
│   │   ├── ProjectCard.astro   # Card de projeto (grid 1-col / 2-col featured)
│   │   └── ui/                 # Componentes UI genéricos (futuro)
│   │
│   ├── content/
│   │   ├── config.ts           # Schema Zod da coleção "projects"
│   │   └── projects/           # Arquivos .md / .mdx de cada projeto
│   │
│   ├── layouts/
│   │   └── Layout.astro        # Shell global: <head> SEO + GSAP CDN + ScrollSmoother init
│   │
│   ├── pages/
│   │   └── index.astro         # Homepage: Hero → About → Projetos → Footer
│   │
│   └── styles/
│       └── global.css          # Reset + Custom Properties do Design System
│
├── astro.config.mjs            # output: static, site URL, compressHTML
├── tsconfig.json               # Strict, path aliases (@/*, @components/*, etc.)
└── package.json
```

---

## Design System — Tokens CSS

Todos os tokens estão em `src/styles/global.css` como Custom Properties no `:root`.

### Tipografia

```css
/* Famílias */
--font-primary:  'Rethink Sans'    /* corpo, UI */
--font-display:  'Archivo Narrow'  /* headings, display */

/* Escala fluida (clamp) */
--display:        clamp(1.8rem, .36rem + 7.2vw, 9rem)
--h1:             clamp(1.35rem, .56rem + 3.95vw, 5.3rem)
--h2:             clamp(1.5rem, 4vw, 4rem)
--case-heading:   clamp(1.8rem, .96rem + 4.2vw, 6rem)
--paragraph-l:    clamp(.9375rem, .795rem + .7125vw, 1.65rem)
--paragraph-m:    clamp(.9375rem, .855rem + .4125vw, 1.35rem)  /* body padrão */
--paragraph-s:    clamp(.875rem, .85rem + .125vw, 1rem)
--paragraph-xs:   clamp(.75rem, .725rem + .125vw, .875rem)
--caps:           .8rem  /* labels, tags, metadados */
```

### Cores

```css
--color-bg:               #0a0a0a   /* fundo principal */
--color-bg-alt:           #111111   /* fundo alternativo (cards, inputs) */
--color-text:             #f0f0f0   /* texto principal */
--color-text-muted:       #6b6b6b   /* texto secundário / labels */
--color-accent:           #ff0000   /* vermelho de destaque */
--color-accent-contrast:  #ffffff
--color-border:           rgba(255,255,255,.08)  /* bordas sutis */
```

### Espaçamento

```css
--space-xs:  0.5rem    /*  8px */
--space-sm:  1rem      /* 16px */
--space-md:  2rem      /* 32px */
--space-lg:  4rem      /* 64px */
--space-xl:  8rem      /* 128px */
```

### Layout

```css
--container-max:      1440px
--container-padding:  clamp(1.5rem, 5vw, 4rem)
```

### Easings

```css
--ease-out-expo:    cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1)
--ease-out-quart:   cubic-bezier(0.25, 1, 0.5, 1)
```

Easings GSAP equivalentes (registrados no Layout via `CustomEase.create`):
- `expo.out`, `expo.in`, `expo.inOut`, `quart.out`

---

## Componentes

### `Hero.astro`

**Localização:** `src/components/Hero.astro`

Navbar com 3 colunas + efeito de mouse trail com imagens (inspirado no MWG_021).

**Props:**

| Prop | Tipo | Default |
|---|---|---|
| `title` | `string` | `'Creative Developer Building Experiences That Convert'` |
| `text` | `string` | subtítulo |
| `nav` | `NavItem[]` | Projects / About / Index / Play |
| `email` | `string` | `'Hello@j.rocha.com'` |
| `available` | `boolean` | `true` |
| `availableLabel` | `string` | `'available'` |

**Como funciona:**
- Navbar 3-col: menu esquerda · email central (clique copia) · disponibilidade direita
- Cada botão tem fill vermelho que sobe no hover (CSS puro)
- Mouse trail: a cada `windowWidth / 15` px de movimento horizontal, uma imagem surge com elastic bounce + back.in via GSAP
- Trail bloqueado na zona do navbar (evita cobrir botões)
- Imagens ciclam entre `public/hero-medias/01.png` … `10.png`

---

### `AboutSection.astro`

**Localização:** `src/components/AboutSection.astro`

Seção "About" com pin de 500vh e reveal de texto linha-a-linha (inspirado no MWG_004).

**Props:**

| Prop | Tipo | Default |
|---|---|---|
| `eyebrow` | `string` | `'About Jonathan Rocha'` |
| `metaLines` | `string[]` | `['Certified Webflow', 'Creative Developer', 'Shopify Partner']` |
| `image` | `string` | `'/about/jonathan.rocha.png'` |
| `imageAlt` | `string` | alt da foto |
| `paragraph` | `string` | bio completa do Jonathan |

**Como funciona:**
1. `.about-section__pin` (500vh) serve de espaço de rolagem
2. `.about-section__container` (100vh) é pinado pelo ScrollTrigger durante toda a rolagem
3. `wrapWordsInSpan()` — cada palavra do parágrafo vira `<span class="word">`
4. Palavras são agrupadas por linha via `offsetTop` (mede após `document.fonts.ready`)
5. Cada linha anima `x: offset → 0` com `stagger: 0.2` e `scrub: 1.5`
6. `invalidateOnRefresh: true` recalcula offset no resize
7. `padding-block: 5em` cria respiro externo sem interferir no pin

**Nota de acessibilidade:** `@media (prefers-reduced-motion)` desativa o pin e as animações.

---

### `ProjectCard.astro`

**Localização:** `src/components/ProjectCard.astro`

Card de projeto que consome dados da Content Collection `projects`.

**Props:**

| Prop | Tipo | Descrição |
|---|---|---|
| `entry` | `CollectionEntry<'projects'>` | Entrada da coleção |
| `index` | `number` | Índice para stagger delay |

**Layout:**
- Mobile: coluna única (imagem topo, conteúdo baixo)
- ≥768px: grid 1:1 (imagem esquerda, metadados direita)
- Featured (`featured: true`): aparece em grid 2-col na homepage, com título em `--h1`

**Campos exibidos:** coverImage · título · descrição · cliente · ano · role · tags · CTA "Ver projeto →"

**`accentColor`:** cor personalizada por projeto via CSS custom property `--card-accent`.

---

### `Layout.astro`

**Localização:** `src/layouts/Layout.astro`

Shell HTML global com SEO, carregamento do GSAP e inicialização do ScrollSmoother.

**Props:** `title`, `description`, `ogImage`

**CDN carregado (com `defer`):**
```
gsap@3/dist/gsap.min.js
gsap@3/dist/ScrollTrigger.min.js
gsap@3/dist/ScrollSmoother.min.js
gsap@3/dist/CustomEase.min.js
```

**Estrutura de wrappers:**
```html
<div id="smooth-wrapper">   <!-- overflow: hidden; position: fixed -->
  <div id="smooth-content"> <!-- conteúdo real traduzido pelo ScrollSmoother -->
    <slot />
  </div>
</div>
```

**Globals expostos no `window`:**
```js
window.gsap           // GSAP core
window.ScrollTrigger  // plugin
window.ScrollSmoother // plugin
window.__smoother     // instância ativa do ScrollSmoother
window.__gsap         // alias de gsap (legado)
window.__ScrollTrigger // alias de ScrollTrigger (legado)
```

> **Em componentes filhos:** use `(window as any).gsap` com fallback para o evento `load` (GSAP é carregado com `defer`):
> ```ts
> function init() {
>   const gsap = (window as any).gsap;
>   if (!gsap) { window.addEventListener('load', init, { once: true }); return; }
>   // ...
> }
> init();
> ```

---

## Content Collections — Adicionando Projetos

Crie um arquivo `.md` ou `.mdx` em `src/content/projects/`:

```md
---
title: "Nome do Projeto"
client: "Nome do Cliente"
year: 2025
role: "Design + Development"
coverImage: "/projects/nome-projeto/cover.jpg"
tags: ["Webflow", "Shopify", "GSAP"]
draft: false           # true = invisível em produção
featured: false        # true = grid de destaque 2-col
description: "Descrição curta (usada no card e meta tags)."
url: "https://site-ao-vivo.com"
accentColor: "#ff6b35" # cor de destaque do card (opcional)
order: 3               # ordem na listagem (menor = primeiro)
---

## Conteúdo em Markdown

O conteúdo abaixo da frontmatter é o corpo do case study
(acessível em `/projects/nome-do-arquivo`).
```

**Campos obrigatórios:** `title`, `client`, `year`, `role`, `coverImage`

**Ordenação:** projetos `featured` aparecem no topo em grid 2-col; `order` determina posição dentro de cada grupo.

---

## GSAP — Padrão de Uso

Todos os plugins GSAP (incluindo ScrollSmoother, SplitText, MorphSVG, DrawSVG etc.) são **gratuitos** desde a aquisição pela Webflow em 2025.

Todos estão disponíveis via jsDelivr:
```
https://cdn.jsdelivr.net/npm/gsap@3/dist/<Plugin>.min.js
```

**Regra importante:** GSAP é carregado com `defer`, então **nunca execute código GSAP em nível de módulo**. Sempre use o padrão:

```ts
function init() {
  const gsap = (window as any).gsap;
  if (!gsap) { window.addEventListener('load', init, { once: true }); return; }
  // código seguro aqui
}
init();
```

**ScrollSmoother + ScrollTrigger pin:** o ScrollSmoother usa `pinType: transform` automaticamente. Nenhuma configuração extra é necessária nos componentes.

---

## Deploy — Vercel

O Vercel detecta Astro automaticamente. Sem configuração adicional necessária.

```bash
npm run build   # gera ./dist/
```

Atualizar a URL do site em `astro.config.mjs` após criar o projeto na Vercel:
```js
site: 'https://SEU-DOMINIO.vercel.app',
```

---

## Path Aliases (TypeScript)

Definidos em `tsconfig.json`:

```ts
@/*             → src/*
@components/*   → src/components/*
@layouts/*      → src/layouts/*
@styles/*       → src/styles/*
@scripts/*      → src/scripts/*
@content/*      → src/content/*
```

Exemplo de uso:
```ts
import Hero from '@components/Hero.astro';
import '@styles/global.css';
```
