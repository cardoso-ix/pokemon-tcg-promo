# Design System — Pokémon TCG Promo

## Visual Theme

Landing de conversão clara. Cena: o render 3D recortado (sem caixa preta) pousa no azul aqua do primeiro CTA. A página é um **quadro de ofertas**, não um fã-clube. Estratégia de cor: **Committed** — campo azul-claro (hue 195, L alto); amarelo Pikachu aponta a ação; laranja Charizard nos kickers.

## Color

Fundo derivado do CTA aqua original `oklch(0.72 0.13 195)`, clareado para leitura. Neutros no hue 195. CTA amarelo com tinta escura. Corpo ≥4.5:1 no fundo.

| Token | OKLCH | Origem | Uso |
|---|---|---|---|
| `--bg` | `oklch(0.93 0.055 195)` | Aqua original, L alto | Página |
| `--surface` | `oklch(0.88 0.06 195)` | Aqua | Pills, painéis |
| `--ink` | `oklch(0.22 0.05 195)` | Teal escuro | Texto |
| `--muted` | `oklch(0.36 0.045 195)` | Aqua médio | Secundário (≥4.5:1) |
| `--primary` | `oklch(0.72 0.13 195)` | CTA aqua original | Marca de fundo |
| `--primary-deep` | `oklch(0.42 0.08 195)` | Aqua escuro | Ênfase |
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
- **Pills de benefício:** borda laranja / superfície aqua, sem emoji-spam
- **Faixa de preço:** motivo “de / por / comparado” — sem números inventados
- **Aviso legal:** bloco tipográfico no rodapé, não escondido

## Motion

Uma entrada no hero (arte 3D solta no campo). Hover só no CTA (glow amarelo curto). `prefers-reduced-motion: reduce` = estático.

## Imagery

Hero: PNG recortado em `/public/brand/pokemon-tcg-promo-hero-cut.png` (Charizard, Pikachu, Gengar, Mewtwo + logo, sem fundo preto). Sem moldura preta. Atribuição no rodapé.
