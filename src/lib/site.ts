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
  // Ativado para captação de leads quentes para o WhatsApp
  leadQuenteEnabled: true,
  enterHref: `${import.meta.env.BASE_URL}#entrar`,
  leadWebhook:
    import.meta.env.PUBLIC_LEAD_WEBHOOK_URL ||
    "https://script.google.com/macros/s/AKfycbxOrH4qxMXvn5CXIvGKszwXcH01cri8lYzeeZYF87KLRB1K_UYslnYIGqpzH6UtIzmN/exec",
  origemWebhook: import.meta.env.PUBLIC_ORIGEM_WEBHOOK_URL ?? "",
  origemPainelWebhook: import.meta.env.PUBLIC_ORIGEM_PAINEL_WEBHOOK_URL ?? "",
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
