# Pokémon TCG Promo

Landing page de alta conversão para atração de colecionadores e jogadores de Pokémon TCG diretamente para o grupo VIP no WhatsApp com ofertas e preço comparado.

O fluxo é **100% autônomo, direto e sem atrito**, com acesso em 1 clique para o WhatsApp e total conformidade com as diretrizes de segurança e publicidade do **Meta Ads (Facebook e Instagram)** e **Google Ads**.

## Funcionalidades

- **Acesso Direto ao Grupo em 1 Clique:** Todos os botões de ação direcionam instantaneamente para o grupo oficial no WhatsApp (`chat.whatsapp.com`), eliminando barreiras de formulário para maximizar a taxa de entrada.
- **Rastreamento de Conversão Avançado:** Interceptação imediata de cliques pelo Meta Pixel disparando eventos padronizados (`Lead`, `CompleteRegistration`, `Contact` e `WhatsAppGroupClick`).
- **Rastreamento de Parâmetros de Campanha:** Suporte a UTMs completas (`utm_source`, `utm_campaign`, `utm_content`, etc.), `fbclid` e armazenamento de sessão.
- **Redirecionamento Automático em Rotas Legadas:** A rota `/entrar` redireciona automaticamente em 0 segundos para o grupo de WhatsApp.
- **Conformidade Legal & Anti-Bloqueio Meta Ads:**
  - Páginas dedicadas de [Política de Privacidade](/privacidade) e [Termos de Uso](/termos).
  - Disclaimers legais de isenção de afiliação com Meta Platforms e Pokémon / Nintendo.
  - Atributos de segurança `rel="noopener noreferrer"` e `target="_blank"` em todos os links externos.

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
| `PUBLIC_WHATSAPP_PERSONAL`| `https://wa.me/5549998095955` | WhatsApp de pedidos no privado |
| `PUBLIC_PARTNER_STORE` | `https://www.mercadolivre.com.br/social/caed1312314` | Loja parceira no Mercado Livre |
| `PUBLIC_META_PIXEL_ID` | `1565921198341485` | ID do Meta Pixel |

## Aviso Legal

A compra é sempre finalizada diretamente nos vendedores parceiros (Mercado Livre, Amazon, etc.). O Pokémon TCG Promo apenas compartilha e compara ofertas como afiliado. Não somos afiliados à Nintendo, Creatures Inc., GAME FREAK inc. ou à Meta Platforms, Inc.
