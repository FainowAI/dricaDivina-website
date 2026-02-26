import Navbar from "@/components/Navbar";
import HeroPost from "@/components/HeroPost";
import AboutDrica from "@/components/AboutDrica";
import LatestPosts from "@/components/LatestPosts";
import BrowseThemes from "@/components/BrowseThemes";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { HeroPostSkeleton } from "@/components/skeletons";
import { useFeaturedPost } from "@/hooks/usePosts";

const Index = () => {
  const { data: featuredPost, isLoading: isLoadingFeatured } = useFeaturedPost();

  return (
    <div className="min-h-screen">
      <Navbar />

      {isLoadingFeatured ? (
        <section className="pt-36 pb-12 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 bg-background">
          <div className="w-full px-4 md:px-8 lg:px-12">
            <HeroPostSkeleton />
          </div>
        </section>
      ) : featuredPost ? (
        <HeroPost
          category={featuredPost.categories?.name?.toUpperCase() || ""}
          title={featuredPost.title}
          summary={featuredPost.summary || ""}
          image={featuredPost.featured_image || "/placeholder.svg"}
          link={`/artigo/${featuredPost.slug}`}
        />
      ) : (
        <HeroPost
          category="BLOG"
          title="Bem-vinda ao Drica Divina"
          summary="Descubra conteúdos sobre Skincare, Cabelo, Maquiagem e Saúde."
          image="/placeholder.svg"
          link="/blog"
        />
      )}

      <AboutDrica />

      <div className="w-full px-4 md:px-8 lg:px-12">
        <AdPlaceholder variant="horizontal" size="large" />
      </div>
      <LatestPosts />
      <div className="w-full px-4 md:px-8 lg:px-12">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <BrowseThemes />
      <div className="w-full px-4 md:px-8 lg:px-12">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
