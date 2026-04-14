import { Helmet } from "react-helmet-async";
import { SITE_URL, SEO_DEFAULTS } from "@/lib/seo";

// Schema: Organization (site inteiro)
export const OrganizationJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SEO_DEFAULTS.siteName,
        url: SITE_URL,
        logo: SEO_DEFAULTS.ogImage,
        sameAs: [
          "https://www.instagram.com/dricadivina",
          // Adicionar outras redes sociais aqui
        ],
      })}
    </script>
  </Helmet>
);

// Schema: WebSite (para sitelinks search box)
export const WebSiteJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SEO_DEFAULTS.siteName,
        url: SITE_URL,
      })}
    </script>
  </Helmet>
);

// Schema: Article (para posts)
interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  image?: string | null;
  publishedAt?: string | null;
  updatedAt?: string;
  authorName?: string;
  categoryName?: string;
  tags?: string[];
}

export const ArticleJsonLd = ({
  title,
  description,
  slug,
  image,
  publishedAt,
  updatedAt,
  authorName,
  categoryName,
  tags,
}: ArticleJsonLdProps) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        url: `${SITE_URL}/artigo/${slug}`,
        ...(image && { image: [image] }),
        ...(publishedAt && { datePublished: publishedAt }),
        ...(updatedAt && { dateModified: updatedAt }),
        author: {
          "@type": "Person",
          name: authorName || "Drica Divina",
        },
        publisher: {
          "@type": "Organization",
          name: SEO_DEFAULTS.siteName,
          logo: {
            "@type": "ImageObject",
            url: SEO_DEFAULTS.ogImage,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/artigo/${slug}`,
        },
        ...(categoryName && { articleSection: categoryName }),
        ...(tags && tags.length > 0 && { keywords: tags.join(", ") }),
      })}
    </script>
  </Helmet>
);

// Schema: BreadcrumbList
interface BreadcrumbItem {
  name: string;
  path: string;
}

export const BreadcrumbJsonLd = ({ items }: { items: BreadcrumbItem[] }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      })}
    </script>
  </Helmet>
);
