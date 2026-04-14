// Constantes centralizadas de SEO — altere SITE_URL ao mudar de domínio
export const SITE_URL = "https://dricadivina.com.br"; // ATUALIZAR com URL real do Lovable se diferente

export const SEO_DEFAULTS = {
  siteName: "Drica Divina",
  title: "Drica Divina | Beleza, Skincare, Cabelo e Saúde",
  description:
    "Dicas de skincare, cuidados com o cabelo, maquiagem e saúde para mulheres que querem se sentir bem. Conteúdo autêntico e sem filtro.",
  ogImage: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2e382a3f-b2b3-48dc-853c-f9fdcff31f91/id-preview-4fb3cfd4--5da9f153-e268-49d8-b935-1f77235692c7.lovable.app-1772476774543.png",
  locale: "pt_BR",
  twitterCard: "summary_large_image" as const,
};

// Mapeamento de categorias para meta SEO
export const CATEGORY_SEO: Record<string, { title: string; description: string }> = {
  skincare: {
    title: "Skincare | Drica Divina",
    description:
      "Procedimentos estéticos, produtos de skincare internacionais vendidos no Brasil. Dicas para cuidar da pele com ciência e carinho.",
  },
  cabelo: {
    title: "Cabelo | Drica Divina",
    description:
      "Tintura, tratamentos capilares, produtos e dicas para cuidar do cabelo com saúde e estilo.",
  },
  maquiagem: {
    title: "Maquiagem | Drica Divina",
    description:
      "Tendências de maquiagem, melhores bases, corretivos e produtos nacionais e internacionais.",
  },
  saude: {
    title: "Saúde | Drica Divina",
    description:
      "Fitness, wellness, exercícios e dicas de saúde para uma vida equilibrada.",
  },
};

// Helper: truncar texto para meta description
export function truncateForMeta(text: string, maxLength: number = 160): string {
  if (!text) return "";
  const clean = text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  return clean.substring(0, maxLength - 3).replace(/\s+\S*$/, "") + "...";
}

// Helper: gerar URL canônica
export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
