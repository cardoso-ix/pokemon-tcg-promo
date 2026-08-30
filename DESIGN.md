# Design System — Pokémon TCG Promo

## Visual Theme

Landing de conversão noturna. Cena: mesa às 23h, holofoil de carta pegando o flash do celular, anúncio do Mercado Livre aberto. A página é um **quadro de ofertas**, não um fã-clube. Estratégia de cor: **Committed** — cobalto carrega o hero; aqua-holofoil aponta a ação.

## Color

Seed Impeccable `seed-163` · `oklch(0.450 0.086 230)` (cobalto). Fundo near-black sem tinta. Texto do CTA no aqua: branco (L médio + croma).

| Token | OKLCH | Uso |
|---|---|---|
| `--bg` | `oklch(0.10 0 0)` | Página |
| `--surface` | `oklch(0.16 0.012 230)` | Painéis |
| `--ink` | `oklch(0.96 0.012 230)` | Texto |
| `--muted` | `oklch(0.72 0.02 230)` | Secundário |
| `--primary` | `oklch(0.48 0.12 230)` | Campos de marca, painel hero |
| `--accent` | `oklch(0.72 0.13 195)` | CTA, pills, holofoil |
| `--accent-ink` | `oklch(0.14 0.02 230)` | Texto sobre accent só se L>0.85; CTA usa `--ink` |

## Typography

Voz física: etiqueta de preço de camelô + ficha de torneio.

- Display: **Tektur** (condensada, placar) — títulos
- Body: **Atkinson Hyperlegible** — leitura no celular
- Escala fluida, razão ≥ 1.25. Corpo 1rem / 1.65. `h1` `clamp(2.1rem, 7vw, 4.4rem)`. `text-wrap: balance` em h1–h3.

## Layout

- Mobile-first, coluna única até 720px
- Desktop: hero assimétrico (copy + CTA à esquerda, stack de cartas à direita)
- Ritmo: grupo apertado (headline + pills + botão), respiro largo entre seções
- Sem grade de 4 cards iguais. Categorias de oferta e curadoria em lista/quadro tipográfico
- Origem das ofertas: só Mercado Livre + curadoria (sem inventar outras lojas)
- CTA sticky no rodapé só no mobile

## Components

- **CTA primário:** botão accent, texto “Entrar no grupo no WhatsApp”, ícone WhatsApp, alvo ≥ 48px
- **Pills de benefício:** accent fraco / outline, sem emoji-spam
- **Faixa de preço:** motivo “de / por / comparado” — sem números inventados
- **Aviso legal:** bloco tipográfico no rodapé, não escondido

## Motion

Uma entrada no hero (stack de cartas + brilho holofoil). Hover só no CTA (glow curto). `prefers-reduced-motion: reduce` = estático.

## Imagery

Artwork oficial de criaturas via PokéAPI (`official-artwork`), servido localmente em `/public/pokemon`. Hero usa stack de cartas com Pikachu, Charizard e Gengar; atmosfera com Mewtwo, Umbreon, Eevee e Dragonite; faixa de lineup entre hero e benefícios. Sem arte de carta TCG. Atribuição no rodapé.
