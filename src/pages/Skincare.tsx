import CategoryPage from "@/components/CategoryPage";
import SEOHead from "@/components/SEOHead";
import { CATEGORY_SEO } from "@/lib/seo";

const Skincare = () => {
  return (
    <>
      <SEOHead
        title={CATEGORY_SEO.skincare.title}
        description={CATEGORY_SEO.skincare.description}
        canonicalPath="/skincare"
      />
      <CategoryPage
        categorySlug="skincare"
        categoryDisplayName="SKINCARE"
      />
    </>
  );
};

export default Skincare;
