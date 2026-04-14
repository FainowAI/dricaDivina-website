import CategoryPage from "@/components/CategoryPage";
import SEOHead from "@/components/SEOHead";
import { CATEGORY_SEO } from "@/lib/seo";

const Maquiagem = () => {
  return (
    <>
      <SEOHead
        title={CATEGORY_SEO.maquiagem.title}
        description={CATEGORY_SEO.maquiagem.description}
        canonicalPath="/maquiagem"
      />
      <CategoryPage
        categorySlug="maquiagem"
        categoryDisplayName="MAQUIAGEM"
      />
    </>
  );
};

export default Maquiagem;
