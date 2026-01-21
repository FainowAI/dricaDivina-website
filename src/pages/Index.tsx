import Navbar from "@/components/Navbar";
import HeroPost from "@/components/HeroPost";
import LatestPosts from "@/components/LatestPosts";
import Favorites from "@/components/Favorites";
import Articles from "@/components/Articles";
import SkinCare from "@/components/SkinCare";
import Podcast from "@/components/Podcast";
import YouTube from "@/components/YouTube";
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
        <section className="pt-52 pb-16 md:pt-60 md:pb-24 lg:pt-80 lg:pb-32 bg-background">
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
          summary="Descubra conteúdos sobre beleza, moda, viagem, saúde e muito mais."
          image="/placeholder.svg"
          link="/blog"
        />
      )}

      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="large" />
      </div>
      <LatestPosts />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <Favorites />
      <div className="container mx-auto px-4 flex justify-end">
        <AdPlaceholder variant="square" size="medium" />
      </div>
      <Articles />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <SkinCare />
      <Podcast />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="small" />
      </div>
      <YouTube />
      <BrowseThemes />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
