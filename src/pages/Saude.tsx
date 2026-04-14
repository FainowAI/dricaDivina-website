import CategoryPage from "@/components/CategoryPage";
import SEOHead from "@/components/SEOHead";
import { CATEGORY_SEO } from "@/lib/seo";

const Saude = () => {
  return (
    <>
      <SEOHead
        title={CATEGORY_SEO.saude.title}
        description={CATEGORY_SEO.saude.description}
        canonicalPath="/saude"
      />
      <CategoryPage
        categorySlug="saude"
        categoryDisplayName="SAÚDE"
      />
    </>
  );
};

export default Saude;
