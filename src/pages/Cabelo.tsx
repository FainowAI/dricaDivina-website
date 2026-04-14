import CategoryPage from "@/components/CategoryPage";
import SEOHead from "@/components/SEOHead";
import { CATEGORY_SEO } from "@/lib/seo";

const Cabelo = () => {
  return (
    <>
      <SEOHead
        title={CATEGORY_SEO.cabelo.title}
        description={CATEGORY_SEO.cabelo.description}
        canonicalPath="/cabelo"
      />
      <CategoryPage
        categorySlug="cabelo"
        categoryDisplayName="CABELO"
      />
    </>
  );
};

export default Cabelo;
