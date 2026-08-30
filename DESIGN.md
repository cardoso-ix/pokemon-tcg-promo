# Design System — Pokémon TCG Promo

## Visual Theme

Landing de conversão clara. Cena: o render 3D (fundo preto) pousa num campo lilás-Gengar, não num preto fechado. A página é um **quadro de ofertas**, não um fã-clube. Estratégia de cor: **Full palette** — superfície clara tintada no roxo da arte (não cream/sand); amarelo Pikachu aponta a ação; laranja Charizard nos kickers.

## Color

Paleta da arte 3D em superfície clara. Neutros no hue 310 (Gengar). CTA amarelo com tinta escura. Corpo ≥4.5:1 no fundo.

| Token | OKLCH | Origem | Uso |
|---|---|---|---|
| `--bg` | `oklch(0.92 0.022 310)` | Lilás Gengar claro | Página |
| `--surface` | `oklch(0.86 0.03 310)` | Gengar | Pills, painéis |
| `--ink` | `oklch(0.22 0.04 310)` | Gengar escuro | Texto |
| `--muted` | `oklch(0.38 0.04 310)` | Gengar médio | Secundário (≥4.5:1) |
| `--primary` | `oklch(0.42 0.09 310)` | Gengar | Campos de marca |
| `--primary-deep` | `oklch(0.32 0.08 310)` | Gengar escuro | Ênfase |
| `--accent` | `oklch(0.88 0.18 98)` | Pikachu / logo | CTA, pulso |
| `--accent-ink` | `oklch(0.18 0.05 55)` | Sombra do Charizard | Texto no amarelo |
| `--flame` | `oklch(0.50 0.15 48)` | Charizard (escurecido p/ AA) | Kickers, hover |
| `--mark` | `oklch(0.42 0.13 250)` | Contorno azul do logo | Bordas, pills |
| `--psychic` | `oklch(0.55 0.06 285)` | Mewtwo | Destaque |

## Typography

Voz física: etiqueta de preço de camelô + ficha de torneio.

- Display: **Tektur** (condensada, placar) — títulos
- Body: **Atkinson Hyperlegible** — leitura no celular
- Escala fluida, razão ≥ 1.25. Corpo 1rem / 1.65. `h1` `clamp(2.1rem, 7vw, 4.4rem)`. `text-wrap: balance` em h1–h3.

## Layout

- Uma tela, uma ação: arte 3D + o que o grupo faz + CTA do WhatsApp
- Mobile-first, coluna única, texto e blocos centralizados (poster)
- Desktop: o mesmo eixo central, `max-w-3xl` — sem seções extras
- CTA sticky no rodapé só no mobile
- Loja ML e WhatsApp privado: links secundários
- Bloco curto de lojas monitoradas (Amazon, ML, Magalu, Shopee, e muito mais); só o ML é link

## Components

- **CTA primário:** botão amarelo Pikachu, tinta escura, texto “Entrar no grupo no WhatsApp”, ícone WhatsApp, alvo ≥ 48px
- **Pills de benefício:** borda laranja / fundo Gengar, sem emoji-spam
- **Faixa de preço:** motivo “de / por / comparado” — sem números inventados
- **Aviso legal:** bloco tipográfico no rodapé, não escondido

## Motion

Uma entrada no hero (arte 3D + brilho amarelo/roxo). Hover só no CTA (glow amarelo curto). `prefers-reduced-motion: reduce` = estático.

## Imagery

Hero: render 3D da marca em `/public/brand/pokemon-tcg-promo-hero.jpg` (Charizard, Pikachu, Gengar, Mewtwo + logo). Artwork oficial de criaturas via PokéAPI (`official-artwork`) na atmosfera e no lineup. Sem arte de carta TCG. Atribuição no rodapé.
