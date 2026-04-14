import CategoryPage from "@/components/CategoryPage";
import SEOHead from "@/components/SEOHead";

const Blog = () => {
  return (
    <>
      <SEOHead
        title="Blog | Drica Divina"
        description="Artigos sobre skincare, cabelo, maquiagem e saúde. Conteúdo autêntico para mulheres que querem se sentir bem."
        canonicalPath="/blog"
      />
      <CategoryPage
        categoryDisplayName="BLOG"
        showSearch={true}
      />
    </>
  );
};

export default Blog;
