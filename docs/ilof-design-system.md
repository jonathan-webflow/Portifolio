# iLof — Design System para Webflow
**Brand:** iLof · Personalized Medicine  
**Framework:** Client-First by Finsweet  
**Versão:** Brand Guidelines v01  

---

## Índice

1. [Setup Inicial no Webflow](#1-setup-inicial-no-webflow)
2. [Sistema de Cores](#2-sistema-de-cores)
3. [Tipografia](#3-tipografia)
4. [Espaçamento](#4-espaçamento)
5. [Componentes — Botões](#5-componentes--botões)
6. [Checklist de Implementação](#6-checklist-de-implementação)

---

## 1. Setup Inicial no Webflow

### 1.1 Fontes

As fontes já estão self-hosted no projeto Webflow como arquivos `.woff2`.  
Registrar em: **Webflow → Project Settings → Fonts → Upload**.

| Família | Papel | Pesos a registrar |
|---|---|---|
| **Noto Serif** | Display · Headings · Brand | 300, 400, 500, 600, 700 |
| **Aspekta** | UI · Body · Labels | 400, 500, 700 |

---

### 1.2 CSS Global — Variables

Adicionar em: **Webflow → Project Settings → Custom Code → Head Code**

```css
<style>
  :root {
    /* === PRIMITIVOS — PALETA PRINCIPAL === */
    --color-deep-blue:     #374B60;
    --color-soft-blue:     #BDD2E0;

    /* === PRIMITIVOS — PALETA NEUTRA NOMEADA === */
    --color-grey:          #B8BDC1;
    --color-off-white:     #F4F4F4;

    /* === PRIMITIVOS — PALETA SECUNDÁRIA === */
    --color-bordeaux:      #661439;
    --color-orange-light:  #FF4200;
    --color-orange-dark:   #C12D00;
    --color-brown:         #42271E;
    --color-natural-01:    #815242;
    --color-natural-02:    #AD836C;
    --color-natural-03:    #DFC6AE;

    /* === PRIMITIVOS — NEUTRAL SCALE === */
    --color-neutral-25:    #FCFCFD;
    --color-neutral-50:    #F9FAFB;
    --color-neutral-100:   #F2F4F7;
    --color-neutral-200:   #EAECF0;
    --color-neutral-300:   #D0D5DD;
    --color-neutral-400:   #98A2B3;
    --color-neutral-500:   #667085;
    --color-neutral-600:   #475467;
    --color-neutral-700:   #344054;
    --color-neutral-800:   #1D2939;
    --color-neutral-900:   #101828;
    --color-neutral-1000:  #0C111D;
    --color-white:         #FFFFFF;
    --color-black:         #000000;

    /* === SEMÂNTICOS — BACKGROUND === */
    --background-color-primary:    var(--color-off-white);
    --background-color-alternate:  var(--color-neutral-100);
    --background-color-brand:      var(--color-deep-blue);
    --background-color-inverse:    var(--color-neutral-900);

    /* === SEMÂNTICOS — TEXT === */
    --text-color-primary:    var(--color-neutral-900);
    --text-color-secondary:  var(--color-neutral-600);
    --text-color-disabled:   var(--color-neutral-400);
    --text-color-inverse:    var(--color-white);
    --text-color-brand:      var(--color-deep-blue);
    --text-color-accent:     var(--color-orange-light);

    /* === SEMÂNTICOS — BORDER === */
    --border-color-primary:  var(--color-neutral-300);
    --border-color-brand:    var(--color-deep-blue);
    --border-color-accent:   var(--color-orange-dark);

    /* === TIPOGRAFIA === */
    --font-heading: 'Noto Serif', Georgia, serif;
    --font-body:    'Aspekta', system-ui, sans-serif;

    /* === ESPAÇAMENTO === */
    --space-1:  0.25rem;   /* 4px  */
    --space-2:  0.5rem;    /* 8px  */
    --space-3:  0.75rem;   /* 12px */
    --space-4:  1rem;      /* 16px */
    --space-5:  1.25rem;   /* 20px */
    --space-6:  1.5rem;    /* 24px */
    --space-8:  2rem;      /* 32px */
    --space-10: 2.5rem;    /* 40px */
    --space-12: 3rem;      /* 48px */
    --space-16: 4rem;      /* 64px */
    --space-20: 5rem;      /* 80px */
    --space-24: 6rem;      /* 96px */
    --space-32: 8rem;      /* 128px */
  }
</style>
```

---

## 2. Sistema de Cores

### 2.1 Paleta Principal

| Token Primitivo | Nome | HEX | Uso |
|---|---|---|---|
| `--color-deep-blue` | Deep Blue | `#374B60` | Cor primária da marca, fundos de destaque |
| `--color-soft-blue` | Soft Blue | `#BDD2E0` | Cor de apoio, gradientes, backgrounds suaves |

### 2.2 Paleta Neutra Nomeada

| Token Primitivo | Nome | HEX | Uso |
|---|---|---|---|
| `--color-grey` | Grey | `#B8BDC1` | Bordas, separadores, desabilitados |
| `--color-off-white` | Off White | `#F4F4F4` | Background padrão (lead background) |

### 2.3 Paleta Secundária

| Token Primitivo | Nome | HEX | Uso |
|---|---|---|---|
| `--color-bordeaux` | Bordeaux | `#661439` | Destaque alternativo, alertas críticos |
| `--color-orange-light` | Light Orange | `#FF4200` | Accent primário, CTAs de destaque |
| `--color-orange-dark` | Dark Orange | `#C12D00` | Hover de accent, estados ativos |
| `--color-brown` | Brown | `#42271E` | Elementos terrosos, combinações com Natural |
| `--color-natural-01` | Natural 01 | `#815242` | Ilustrações, backgrounds cálidos |
| `--color-natural-02` | Natural 02 | `#AD836C` | Fundos secundários, textura |
| `--color-natural-03` | Natural 03 | `#DFC6AE` | Fundos sutis, highlights cálidos |

### 2.4 Neutral Scale — Escala Completa

| Token | HEX | Uso recomendado |
|---|---|---|
| `--color-neutral-25` | `#FCFCFD` | Fundo quasi-branco |
| `--color-neutral-50` | `#F9FAFB` | Fundo alternativo claro |
| `--color-neutral-100` | `#F2F4F7` | Cards, inputs, áreas de conteúdo |
| `--color-neutral-200` | `#EAECF0` | Bordas suaves, dividers |
| `--color-neutral-300` | `#D0D5DD` | Bordas padrão, separadores |
| `--color-neutral-400` | `#98A2B3` | Texto desabilitado, placeholders |
| `--color-neutral-500` | `#667085` | Texto secundário/muted |
| `--color-neutral-600` | `#475467` | Texto de suporte |
| `--color-neutral-700` | `#344054` | Texto principal em fundos claros |
| `--color-neutral-800` | `#1D2939` | Texto de alto contraste |
| `--color-neutral-900` | `#101828` | Texto primário padrão |
| `--color-neutral-1000` | `#0C111D` | Máximo contraste |
| `--color-white` | `#FFFFFF` | Fundos puros, texto em dark bg |
| `--color-black` | `#000000` | Sombras, overlays |

### 2.5 Tokens Semânticos

> No Webflow, criar estes tokens no painel **Variables**. Vincular sempre ao primitivo correspondente para permitir theming futuro.

#### Background
| Token Semântico | Primitivo | Descrição |
|---|---|---|
| `background-color-primary` | `--color-off-white` | Fundo padrão de páginas |
| `background-color-alternate` | `--color-neutral-100` | Seções alternadas |
| `background-color-brand` | `--color-deep-blue` | Seções de marca (hero, footer) |
| `background-color-inverse` | `--color-neutral-900` | Dark sections |

#### Text
| Token Semântico | Primitivo | Descrição |
|---|---|---|
| `text-color-primary` | `--color-neutral-900` | Corpo principal |
| `text-color-secondary` | `--color-neutral-600` | Suporte, subtítulos |
| `text-color-disabled` | `--color-neutral-400` | Texto inativo |
| `text-color-inverse` | `--color-white` | Texto em fundos escuros |
| `text-color-brand` | `--color-deep-blue` | Texto de marca |
| `text-color-accent` | `--color-orange-light` | Links ativos, destaques |

#### Border
| Token Semântico | Primitivo | Descrição |
|---|---|---|
| `border-color-primary` | `--color-neutral-300` | Bordas padrão |
| `border-color-brand` | `--color-deep-blue` | Botão Outline padrão |
| `border-color-accent` | `--color-orange-dark` | Botão Outline accent |

---

## 3. Tipografia

### 3.1 Famílias

| Família | Papel | Pesos disponíveis | Uso |
|---|---|---|---|
| **Noto Serif** | Display · Headings · Brand | Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700) | H1–H8, títulos de seção, marca |
| **Aspekta** | UI · Body · Labels | Regular (400), Medium (500), Bold (700) | Parágrafos, labels, botões, nav |

### 3.2 Escala de Tipos — Text Styles no Webflow

> Criar cada estilo em: **Webflow → Style Panel → Typography → Manage Text Styles**  
> Nomear exatamente como na coluna "Text Style Name" abaixo.

#### Headings — Noto Serif

| Text Style Name | Classe CF | Tamanho | Line-height | Peso | Fonte |
|---|---|---|---|---|---|
| `Heading/H1` | `heading-style-h1` | 72px | 80px | Regular (400) | Noto Serif |
| `Heading/H2` | `heading-style-h2` | 56px | 64px | Regular (400) | Noto Serif |
| `Heading/H3` | `heading-style-h3` | 48px | 56px | Regular (400) | Noto Serif |
| `Heading/H4` | `heading-style-h4` | 40px | 48px | Regular (400) | Noto Serif |
| `Heading/H5` | `heading-style-h5` | 28px | 36px | Medium (500) | Noto Serif |
| `Heading/H6` | `heading-style-h6` | 24px | 32px | Medium (500) | Noto Serif |
| `Heading/H7` | `heading-style-h7` | 20px | 28px | Medium (500) | Noto Serif |
| `Heading/H8` | `heading-style-h8` | 18px | 26px | Medium (500) | Noto Serif |

#### Body / UI — Aspekta

| Text Style Name | Classe CF | Tamanho | Line-height | Peso | Fonte |
|---|---|---|---|---|---|
| `Text/Large` | `text-size-large` | 20px | 30px | Regular (400) | Aspekta |
| `Text/Body` | `text-size-medium` | 16px | 24px | Regular (400) | Aspekta |
| `Text/Small` | `text-size-small` | 14px | 20px | Regular (400) | Aspekta |
| `Label/Large` | `text-size-label-large` | 14px | 20px | Medium (500) | Aspekta |
| `Label/Small` | `text-size-label-small` | 12px | 16px | Medium (500) | Aspekta |

> Labels usam `letter-spacing: 0.08em` e `text-transform: uppercase`.

### 3.3 Classes Utilitárias de Tipografia (Client-First)

#### Tamanho
```
text-size-large       → 20px / 30px  (Aspekta Regular)
text-size-medium      → 16px / 24px  (Aspekta Regular)  ← default body
text-size-small       → 14px / 20px  (Aspekta Regular)
text-size-label-large → 14px / 20px  (Aspekta Medium, uppercase)
text-size-label-small → 12px / 16px  (Aspekta Medium, uppercase)
```

#### Peso
```
text-weight-regular   → font-weight: 400
text-weight-medium    → font-weight: 500
text-weight-bold      → font-weight: 700
```

#### Cor
```
text-color-primary    → var(--text-color-primary)    #101828
text-color-secondary  → var(--text-color-secondary)  #475467
text-color-disabled   → var(--text-color-disabled)   #98A2B3
text-color-inverse    → var(--text-color-inverse)     #FFFFFF
text-color-brand      → var(--text-color-brand)       #374B60
text-color-accent     → var(--text-color-accent)      #FF4200
```

#### Combo de variante com `is-`
```
heading-style-h1 is-inverse     → H1 em fundo escuro
text-size-medium is-secondary   → body com cor secundária
```

---

## 4. Espaçamento

### 4.1 Tabela de Tokens

| Valor | Token CSS | Classe CF (Spacer) | Classe CF (Padding) |
|---|---|---|---|
| 4px | `--space-1` | — | `padding-tiny` |
| 8px | `--space-2` | `spacer-xxsmall` | `padding-xxsmall` |
| 12px | `--space-3` | — | `padding-xsmall` |
| 16px | `--space-4` | `spacer-xsmall` | `padding-small` |
| 20px | `--space-5` | — | — |
| 24px | `--space-6` | `spacer-small` | `padding-medium` |
| 32px | `--space-8` | `spacer-medium` | `padding-large` |
| 40px | `--space-10` | — | — |
| 48px | `--space-12` | `spacer-large` | `padding-xlarge` |
| 64px | `--space-16` | `spacer-xlarge` | `padding-xxlarge` |
| 80px | `--space-20` | `spacer-xxlarge` | — |
| 96px | `--space-24` | — | — |
| 128px | `--space-32` | `spacer-huge` | — |

### 4.2 Padding de Seção

| Classe | Valor vertical | Uso |
|---|---|---|
| `padding-section-small` | 48px top + bottom | Seções compactas |
| `padding-section-medium` | 80px top + bottom | Seções padrão |
| `padding-section-large` | 128px top + bottom | Seções hero / destaque |

### 4.3 Como usar no Webflow (Client-First)

**Spacer Block** — elemento vazio para criar espaço vertical:
```
<div class="spacer-large"></div>         → 48px
<div class="spacer-xlarge"></div>        → 64px
```

**Padding Wrapper** — 2 classes combinadas:
```
padding-top + padding-large             → padding-top: 32px
padding-bottom + padding-medium         → padding-bottom: 24px
padding-vertical + padding-section-medium → 80px top e bottom
```

**Margin Wrapper:**
```
margin-bottom + margin-large            → margin-bottom: 32px
margin-top + margin-xlarge              → margin-top: 48px
```

---

## 5. Componentes — Botões

### 5.1 Especificação Base

| Propriedade | Valor |
|---|---|
| Shape | Pill — `border-radius: 999px` |
| Altura padrão (Medium) | 44px |
| Padding (Medium) | 12px 28px |
| Fonte | Aspekta Medium (500) |
| Font-size | 14px |
| Line-height | normal |

### 5.2 Tamanhos

| Tamanho | Classe CF | Altura | Padding |
|---|---|---|---|
| Small | `button is-small` | 36px | 8px 20px |
| Medium (default) | `button` | 44px | 12px 28px |
| Large | `button is-large` | 52px | 16px 32px |

### 5.3 Variantes — Especificação de Cores

#### Default (Primary)
```
Classe:  button is-primary
Estado default:
  background:  #374B60  (--color-deep-blue)
  color:       #FFFFFF
  border:      none

Estado hover:
  background:  #2A3A4B  (deep-blue escurecido ~10%)
```

#### Secondary
```
Classe:  button is-secondary
Estado default:
  background:  #FFFFFF
  color:       #374B60  (--color-deep-blue)
  border:      1.5px solid #D0D5DD  (--color-neutral-300)

Estado hover:
  background:  #F4F4F4  (--color-off-white)
```

#### Accent
```
Classe:  button is-accent
Estado default:
  background:  #FF4200  (--color-orange-light)
  color:       #FFFFFF
  border:      none

Estado hover:
  background:  #C12D00  (--color-orange-dark)
```

#### Destructive
```
Classe:  button is-destructive
Estado default:
  background:  #C12D00  (--color-orange-dark)
  color:       #FFFFFF
  border:      none

Estado hover:
  background:  #661439  (--color-bordeaux)
```

#### Outline
```
Classe:  button is-outline
Estado default:
  background:  transparent
  color:       #374B60  (--color-deep-blue)
  border:      1.5px solid #374B60

Estado hover:
  color:       #C12D00  (--color-orange-dark)
  border:      1.5px solid #C12D00
```

#### Ghost
```
Classe:  button is-ghost
Estado default:
  background:  transparent
  color:       #374B60  (--color-deep-blue)
  border:      none

Estado hover:
  color:       #C12D00  (--color-orange-dark)
```

#### Link
```
Classe:  button is-link
Estado default:
  background:  transparent
  color:       #374B60  (--color-deep-blue)
  text-decoration: underline
  border:      none

Estado hover:
  color:       #C12D00  (--color-orange-dark)
```

### 5.4 CSS Base para os Botões

```css
/* Adicionar em Project Settings → Custom Code → Head Code */

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 12px 28px;
  border-radius: 999px;
  border: 1.5px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;
}

.button.is-small  { padding: 8px 20px;  font-size: 13px; }
.button.is-large  { padding: 16px 32px; font-size: 15px; }

.button.is-primary     { background: var(--color-deep-blue);    color: var(--color-white); }
.button.is-primary:hover { background: #2A3A4B; }

.button.is-secondary   { background: var(--color-white);        color: var(--color-deep-blue); border-color: var(--color-neutral-300); }
.button.is-secondary:hover { background: var(--color-off-white); }

.button.is-accent      { background: var(--color-orange-light); color: var(--color-white); }
.button.is-accent:hover  { background: var(--color-orange-dark); }

.button.is-destructive { background: var(--color-orange-dark);  color: var(--color-white); }
.button.is-destructive:hover { background: var(--color-bordeaux); }

.button.is-outline     { background: transparent; color: var(--color-deep-blue); border-color: var(--color-deep-blue); }
.button.is-outline:hover { color: var(--color-orange-dark); border-color: var(--color-orange-dark); }

.button.is-ghost       { background: transparent; color: var(--color-deep-blue); }
.button.is-ghost:hover   { color: var(--color-orange-dark); }

.button.is-link        { background: transparent; color: var(--color-deep-blue); text-decoration: underline; }
.button.is-link:hover    { color: var(--color-orange-dark); }
```

---

## 6. Checklist de Implementação

### Fase 1 — Fundações (Webflow Project Settings)

- [ ] Confirmar que Noto Serif (woff2) está registrada em Project Settings → Fonts
- [ ] Confirmar que Aspekta (woff2) está registrada em Project Settings → Fonts
- [ ] Colar bloco CSS com variáveis (`:root`) em Project Settings → Custom Code → Head
- [ ] Colar CSS dos botões no `<head>`

### Fase 2 — Variáveis no Webflow Variables Panel

- [ ] Criar todos os tokens **Primitivos** de cor (paleta principal + neutra nomeada + secundária)
- [ ] Criar toda a **Neutral Scale** (25 → 1000 + white + black)
- [ ] Criar tokens **Semânticos** (background, text, border) vinculados aos primitivos

### Fase 3 — Text Styles no Webflow

- [ ] Criar Text Style `Heading/H1` (Noto Serif 400, 72/80)
- [ ] Criar Text Style `Heading/H2` (Noto Serif 400, 56/64)
- [ ] Criar Text Style `Heading/H3` (Noto Serif 400, 48/56)
- [ ] Criar Text Style `Heading/H4` (Noto Serif 400, 40/48)
- [ ] Criar Text Style `Heading/H5` (Noto Serif 500, 28/36)
- [ ] Criar Text Style `Heading/H6` (Noto Serif 500, 24/32)
- [ ] Criar Text Style `Heading/H7` (Noto Serif 500, 20/28)
- [ ] Criar Text Style `Heading/H8` (Noto Serif 500, 18/26)
- [ ] Criar Text Style `Text/Large` (Aspekta 400, 20/30)
- [ ] Criar Text Style `Text/Body` (Aspekta 400, 16/24)
- [ ] Criar Text Style `Text/Small` (Aspekta 400, 14/20)
- [ ] Criar Text Style `Label/Large` (Aspekta 500, 14/20, uppercase, ls 0.08em)
- [ ] Criar Text Style `Label/Small` (Aspekta 500, 12/16, uppercase, ls 0.08em)

### Fase 4 — Utility Classes (Client-First Global Styles)

- [ ] Criar classes de tipografia: `text-size-*`, `text-weight-*`, `text-color-*`
- [ ] Criar classes de heading: `heading-style-h1` até `heading-style-h8`
- [ ] Criar spacer blocks: `spacer-small`, `spacer-medium`, `spacer-large`, `spacer-xlarge`, `spacer-xxlarge`, `spacer-huge`
- [ ] Criar padding utilitários: `padding-section-small`, `padding-section-medium`, `padding-section-large`

### Fase 5 — Componentes

- [ ] Criar símbolo base `button` com os 7 variants como combo classes (`is-primary`, `is-secondary`, etc.)
- [ ] Testar estados de hover em todos os 7 variants
- [ ] Testar responsividade dos 3 tamanhos (small, medium, large)

---

## Referências

- [Client-First by Finsweet](https://finsweet.com/client-first/docs/intro)
- Figma Source: `98BC7yEVdl4GKwe66XBvv1` · Node `545:8385` · iLof Style Guide v01
