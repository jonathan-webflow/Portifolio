# CLAUDE.md — Portfolio 2026

Instruções persistentes para o Claude Code (e editores com suporte a CLAUDE.md como o Cursor).
Este arquivo define como colaborar neste projeto — leia antes de sugerir qualquer mudança.

---

## ⚠️ Regra obrigatória — Sincronizar antes de qualquer edição

**Sempre executar antes de criar, editar ou deletar qualquer arquivo:**

```bash
git pull origin main
```

O `main` local diverge silenciosamente do remote após merges de PR.
Trabalhar em uma cópia desatualizada gera conflitos, retrabalho e desperdício de tokens.

**Checklist antes de editar:**
1. `git status` — confirmar branch e estado do working tree
2. `git pull origin main` — sincronizar com o remote
3. Só então criar/editar/deletar arquivos

> Não pular essa etapa mesmo que a tarefa pareça pequena.

---

## Sobre o projeto

Portfólio pessoal de **Jonathan Rocha** (Creative Developer · Webflow Certified Expert · Shopify Partner).
Stack: **Astro 6 SSG + GSAP 3 + ScrollSmoother + TypeScript strict**.
Referência visual: Awwwards / editorial. Deploy na Vercel.

---

## Convenções de código

### Geral
- **Astro puro** — sem React, Vue ou outro framework de UI. Componentes são `.astro`.
- **TypeScript strict** em todos os scripts inline (`<script>`) e arquivos `.ts`.
- **CSS scoped** — estilos ficam no bloco `<style>` do próprio componente (sem módulos CSS externos).
- **Sem SCSS** — o projeto usa CSS puro com Custom Properties.
- Não adicionar comentários óbvios. Comentar apenas lógica não-trivial.
- Não criar helpers/utilitários para uso único. Preferir código direto.

### Nomenclatura
- Componentes: `PascalCase.astro`
- Classes CSS: **BEM** com prefixo do componente (`hero__nav`, `about-section__paragraph`)
- Variáveis CSS: `--kebab-case` (ex: `--color-text-muted`, `--space-md`)
- Funções JS: `camelCase` descritivo (`initAboutSection`, `wrapWordsInSpan`)

### Imports
Usar path aliases definidos em `tsconfig.json`:
```ts
import Hero from '@components/Hero.astro';     // ✅
import Hero from '../components/Hero.astro';    // ❌ evitar
```

---

## Design System

**Nunca hardcode cores, fontes ou tamanhos.** Sempre usar as Custom Properties de `src/styles/global.css`.

### Tokens essenciais

```css
/* Cores */
--color-bg            #0a0a0a
--color-bg-alt        #111111
--color-text          #f0f0f0
--color-text-muted    #6b6b6b
--color-accent        #ff0000
--color-border        rgba(255,255,255,.08)

/* Fontes */
--font-primary   'Rethink Sans'    /* corpo */
--font-display   'Archivo Narrow'  /* headings */

/* Escala tipográfica fluida */
--display / --h1 / --h2 / --paragraph-l / --paragraph-m / --paragraph-s / --caps

/* Espaçamento */
--space-xs / --space-sm / --space-md / --space-lg / --space-xl

/* Layout */
--container-max: 1440px
--container-padding: clamp(1.5rem, 5vw, 4rem)

/* Easings */
--ease-out-expo / --ease-in-out-expo / --ease-out-quart
```

---

## GSAP

### Plugins são gratuitos
Todos os plugins GSAP (ScrollSmoother, SplitText, MorphSVG, DrawSVG, MotionPath etc.)
são **gratuitos** desde a aquisição pela Webflow em 2025.
CDN: `https://cdn.jsdelivr.net/npm/gsap@3/dist/<Plugin>.min.js`

### GSAP é carregado com `defer`
Nunca execute código GSAP em nível de módulo. Use sempre o padrão de fallback:

```ts
function init() {
  const gsap = (window as any).gsap;
  if (!gsap) { window.addEventListener('load', init, { once: true }); return; }
  // código seguro aqui
}
init();
```

### Globals disponíveis no window
```ts
window.gsap            // GSAP core
window.ScrollTrigger   // plugin ScrollTrigger
window.ScrollSmoother  // plugin ScrollSmoother
window.__smoother      // instância ativa: ScrollSmoother.create(...)
```

### ScrollSmoother + ScrollTrigger
O ScrollSmoother gerencia `#smooth-wrapper` / `#smooth-content` (Layout.astro).
- **Não** re-inicializar Lenis ou outro scroll em componentes filhos.
- **Não** usar `ScrollTrigger.normalizeScroll(true)` manualmente (o ScrollSmoother já trata isso).
- Para pins: `pin: elementoFilho` (nunca o elemento trigger) — o ScrollSmoother usa `pinType: transform` automaticamente.

### Padrão de pin + scrub nos componentes

```ts
// PIN do container durante zona de rolagem
ScrollTrigger.create({
  trigger: pinHeightElement,   // elemento com a altura total (ex: 500vh)
  start: 'top top',
  end: 'bottom bottom',
  pin: containerElement,       // elemento que fica fixo
  anticipatePin: 1,
});

// ANIMAÇÃO com scrub
gsap.to(elements, {
  x: 0,
  stagger: 0.2,
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: pinHeightElement,  // mesmo trigger do pin
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.5,
    invalidateOnRefresh: true,
  },
});
```

---

## Componentes existentes

| Componente | Arquivo | Descrição |
|---|---|---|
| Hero | `src/components/Hero.astro` | Navbar 3-col + mouse trail de imagens |
| AboutSection | `src/components/AboutSection.astro` | Pin 500vh + word-reveal linha-a-linha |
| HistorySection | `src/components/HistorySection.astro` | 4 entradas de carreira, pin por 100svh + letras-scatter aleatório |
| ProjectCard | `src/components/ProjectCard.astro` | Card de projeto da Content Collection |
| Layout | `src/layouts/Layout.astro` | Shell global, SEO, GSAP CDN, ScrollSmoother |

---

## Content Collections

Schema em `src/content/config.ts`. Projetos em `src/content/projects/*.md`.

**Campos obrigatórios:** `title`, `client`, `year`, `role`, `coverImage`

**Campos que controlam layout:**
- `featured: true` → aparece no grid de destaque 2-col (com título em `--h1`)
- `draft: true` → invisível em produção
- `order` → ordenação na listagem (menor número = primeiro)
- `accentColor` → cor hex para theming dinâmico do card

---

## O que NÃO fazer

- ❌ Hardcode de cores, fontes ou espaçamentos — sempre usar variáveis CSS
- ❌ `<style global>` ou CSS em arquivos separados para estilos de componente
- ❌ Re-inicializar GSAP, Lenis ou ScrollSmoother em componentes filhos
- ❌ `ScrollTrigger` em tweens filhos de uma timeline (só em top-level)
- ❌ Usar `markers: true` em produção
- ❌ Criar abstrações para uso único — prefira código direto
- ❌ Adicionar docstrings/comentários em código que não foi modificado
- ❌ Instalar dependências npm para coisas que o Astro ou CSS já resolvem nativamente
- ❌ Usar React/Vue — o projeto é Astro puro

---

## Assets

```
public/
  fonts/                  # Self-hosted (futuro)
  hero-medias/01–10.png   # Mouse trail do Hero
  about/
    jonathan.rocha.png    # Foto de perfil do About
  favicon.svg / favicon.ico
```

Para adicionar imagens de projetos: `public/projects/<slug>/cover.jpg`

---

## Deploy

```bash
npm run build    # gera ./dist/ — Vercel deploya automaticamente
```

Atualizar `site` em `astro.config.mjs` após configurar o domínio na Vercel.
