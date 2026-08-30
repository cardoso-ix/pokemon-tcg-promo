# Design System — Pokémon TCG Promo

## Visual Theme

Landing de conversão noturna. Cena: o render 3D da marca no escuro — Charizard, Pikachu, Gengar e Mewtwo em volta do logo amarelo. A página é um **quadro de ofertas**, não um fã-clube. Estratégia de cor: **Full palette** extraída da arte da hero — preto carrega o campo; amarelo do Pikachu aponta a ação; laranja, roxo e lilás sustentam as seções.

## Color

Paleta da arte 3D (não do seed cobalto). Fundo preto da imagem. CTA amarelo com tinta escura (contraste AA no botão).

| Token | OKLCH | Origem | Uso |
|---|---|---|---|
| `--bg` | `oklch(0.08 0 0)` | Fundo da arte | Página |
| `--surface` | `oklch(0.18 0.04 310)` | Gengar | Painéis |
| `--ink` | `oklch(0.96 0.02 98)` | Amarelo do logo, quase branco | Texto |
| `--muted` | `oklch(0.80 0.04 285)` | Lilás do Mewtwo | Secundário (≥4.5:1 no preto) |
| `--primary` | `oklch(0.42 0.09 310)` | Gengar | Campos de marca |
| `--primary-deep` | `oklch(0.22 0.07 310)` | Gengar escuro | Faixas, hero esquerdo |
| `--accent` | `oklch(0.88 0.18 98)` | Pikachu / logo | CTA, pulso |
| `--accent-ink` | `oklch(0.18 0.05 55)` | Sombra do Charizard | Texto no amarelo |
| `--flame` | `oklch(0.70 0.16 52)` | Charizard | Kickers, números, hover |
| `--mark` | `oklch(0.50 0.13 250)` | Contorno azul do logo | Bordas, pills |
| `--psychic` | `oklch(0.78 0.04 285)` | Corpo do Mewtwo | Destaque lilás |

## Typography

Voz física: etiqueta de preço de camelô + ficha de torneio.

- Display: **Tektur** (condensada, placar) — títulos
- Body: **Atkinson Hyperlegible** — leitura no celular
- Escala fluida, razão ≥ 1.25. Corpo 1rem / 1.65. `h1` `clamp(2.1rem, 7vw, 4.4rem)`. `text-wrap: balance` em h1–h3.

## Layout

- Mobile-first, coluna única até 720px
- Desktop: hero assimétrico (copy + CTA à esquerda, arte 3D à direita)
- Ritmo: grupo apertado (headline + pills + botão), respiro largo entre seções
- Sem grade de 4 cards iguais. Categorias de oferta e curadoria em lista/quadro tipográfico
- Origem das ofertas: só Mercado Livre + curadoria (sem inventar outras lojas)
- CTA sticky no rodapé só no mobile

## Components

- **CTA primário:** botão amarelo Pikachu, tinta escura, texto “Entrar no grupo no WhatsApp”, ícone WhatsApp, alvo ≥ 48px
- **Pills de benefício:** borda laranja / fundo Gengar, sem emoji-spam
- **Faixa de preço:** motivo “de / por / comparado” — sem números inventados
- **Aviso legal:** bloco tipográfico no rodapé, não escondido

## Motion

Uma entrada no hero (arte 3D + brilho amarelo/roxo). Hover só no CTA (glow amarelo curto). `prefers-reduced-motion: reduce` = estático.

## Imagery

Hero: render 3D da marca em `/public/brand/pokemon-tcg-promo-hero.jpg` (Charizard, Pikachu, Gengar, Mewtwo + logo). Artwork oficial de criaturas via PokéAPI (`official-artwork`) na atmosfera e no lineup. Sem arte de carta TCG. Atribuição no rodapé.
