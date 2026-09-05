const whatsappPersonalBase =
  import.meta.env.PUBLIC_WHATSAPP_PERSONAL ?? "https://wa.me/5549998095955";

const personalOrderText = encodeURIComponent(
  "Oi, quero pedir um produto específico no Pokémon TCG Promo.",
);

export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export const site = {
  name: "Pokémon TCG Promo",
  tagline: "Ofertas selecionadas de cartas Pokémon no Mercado Livre",
  description:
    "Ofertas selecionadas de cartas Pokémon no Mercado Livre, com atualização diária e curadoria de preços. Entre no grupo do WhatsApp.",
  url: "https://pokemontcgpromo.online",
  // desativado; religar neste flag
  leadQuenteEnabled: false,
  enterHref: `${import.meta.env.BASE_URL}#entrar`,
  leadWebhook:
    import.meta.env.PUBLIC_LEAD_WEBHOOK_URL ??
    "https://srv1897392.hstgr.cloud/webhook/captacao/leads-tcg",
  whatsappGroup:
    import.meta.env.PUBLIC_WHATSAPP_GROUP ??
    "https://chat.whatsapp.com/IFxkHX9ADT29EIUHRkCHVo",
  instagram:
    import.meta.env.PUBLIC_INSTAGRAM ?? "https://www.instagram.com/promopokemontcg",
  whatsappPersonal: whatsappPersonalBase,
  whatsappPersonalOrder: `${whatsappPersonalBase}?text=${personalOrderText}`,
  partnerStore:
    import.meta.env.PUBLIC_PARTNER_STORE ??
    "https://www.mercadolivre.com.br/social/caed1312314",
} as const;

export function personalOrderUrl(productLabel: string) {
  const text = encodeURIComponent(`Oi, quero saber o preço do ${productLabel}.`);
  return `${whatsappPersonalBase}?text=${text}`;
}
