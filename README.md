# Pokémon TCG Promo

Landing page de alta conversão com formulário rápido para qualificação e atração de **leads quentes** (colecionadores e jogadores de Pokémon TCG) para o grupo no WhatsApp com ofertas e preço comparado.

O funil é **100% autônomo** (sem dependência de servidores ou n8n para liberar o acesso), projetado para campanhas de tráfego pago no Google Ads e Meta Ads.

## Funcionalidades

- **Formulário Breve de Qualificação:** 2 campos (Nome + WhatsApp com máscara automática) e micro-qualificação por chips de 1 toque (`Booster & Box`, `Cartas Avulsas`, `Coleções & ETBs`, `Decks & Sleeves`).
- **Acesso Imediato ao Grupo:** Direcionamento instantâneo do lead para o grupo oficial no WhatsApp (`chat.whatsapp.com`).
- **Rastreamento de Campanhas:** Suporte completo a UTMs (`utm_source`, `utm_campaign`, etc.), Meta Pixel (`Lead`, `CompleteRegistration`) e Google Ads Tag.
- **Armazenamento de Leads:** Histórico local seguro (`localStorage`) e integração opcional com Google Planilhas (via Google Apps Script gratuito) ou webhook externo.

## Stack

- [Astro](https://astro.build)
- TypeScript
- Tailwind CSS v4

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:4321](http://localhost:4321).

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o site estático para produção (`dist/`) |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run astro` | Executa a CLI do Astro |

## Configurações & Variáveis de Ambiente

As configurações principais residem em `src/lib/site.ts` com suporte a variáveis do `.env`:

| Variável | Padrão | Descrição |
|---|---|---|
| `PUBLIC_SITE_URL` | `https://pokemontcgpromo.online` | URL canônica do site |
| `PUBLIC_WHATSAPP_GROUP` | `https://chat.whatsapp.com/IFxkHX9ADT29EIUHRkCHVo` | Link do grupo WhatsApp |
| `PUBLIC_LEAD_WEBHOOK_URL` | *(vazio / opcional)* | Webhook do Google Sheets ou API para receber leads |
| `PUBLIC_WHATSAPP_PERSONAL`| `https://wa.me/5549998095955` | WhatsApp de pedidos no privado |
| `PUBLIC_PARTNER_STORE` | `https://www.mercadolivre.com.br/social/caed1312314` | Loja parceira no Mercado Livre |
| `PUBLIC_META_PIXEL_ID` | `1565921198341485` | ID do Meta Pixel |

## Aviso Legal

A compra é sempre finalizada diretamente nos vendedores parceiros (Mercado Livre, Amazon, etc.). O Pokémon TCG Promo apenas compartilha e compara ofertas. Não somos afiliados à Nintendo, Creatures Inc. ou Game Freak.
