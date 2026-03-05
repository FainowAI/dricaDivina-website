import Navbar from "@/components/Navbar";
import HeroPost from "@/components/HeroPost";
import AboutDrica from "@/components/AboutDrica";
import LatestPosts from "@/components/LatestPosts";
import BrowseThemes from "@/components/BrowseThemes";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

import { HeroPostSkeleton } from "@/components/skeletons";
import { useFeaturedPost } from "@/hooks/usePosts";

const Index = () => {
  const { data: featuredPost, isLoading: isLoadingFeatured } = useFeaturedPost();

  return (
    <div className="min-h-screen">
      <Navbar />

      <AboutDrica />

      {isLoadingFeatured ? (
        <section className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
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

      <LatestPosts />
      <BrowseThemes />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
