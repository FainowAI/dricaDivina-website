import { useState } from "react";
import Navbar from "@/components/Navbar";
import StoriesMenu from "@/components/StoriesMenu";
import Footer from "@/components/Footer";
import CategoryHeader from "@/components/CategoryHeader";
import SubcategoryBar from "@/components/SubcategoryBar";
import VideoCard from "@/components/VideoCard";
import FadeIn from "@/components/FadeIn";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";
import { VideoCardSkeletonGrid, HeroPostSkeleton } from "@/components/skeletons";
import { useVideos, useFeaturedVideo } from "@/hooks/useVideos";

const PAGE_SIZE = 9;

const Video = () => {
  const [activeSubcategory, setActiveSubcategory] = useState("Tudo");
  const [offset, setOffset] = useState(0);

  // Fetch featured video
  const { data: featuredVideo, isLoading: isLoadingFeatured } = useFeaturedVideo();

  // Fetch videos with pagination
  const { data: videosData, isLoading: isLoadingVideos } = useVideos({
    limit: PAGE_SIZE,
    offset,
  });

  const videos = videosData?.videos || [];
  const hasMore = videosData?.hasMore || false;
  const totalCount = videosData?.totalCount || 0;

  const handleLoadMore = () => {
    setOffset(prev => prev + PAGE_SIZE);
  };

  // Subcategories from videos table category field
  const subcategories = ["Tudo", "Tutoriais", "Vlog", "Reviews", "Bastidores"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StoriesMenu />

      {/* Category Header */}
      <div className="pt-32 md:pt-24">
        <CategoryHeader categoryName="VÍDEO" postCount={totalCount} />
      </div>

      {/* Subcategory Bar */}
      <SubcategoryBar
        subcategories={subcategories}
        onSubcategoryChange={setActiveSubcategory}
      />

      {/* Ad Space */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="large" />
      </div>

      {/* Featured Video */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4">
          {isLoadingFeatured ? (
            <HeroPostSkeleton />
          ) : featuredVideo ? (
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {/* Video Thumbnail */}
                <div className="order-2 md:order-1">
                  <VideoCard
                    thumbnail={featuredVideo.thumbnail || "/placeholder.svg"}
                    title={featuredVideo.title}
                    link={featuredVideo.video_url || "#"}
                  />
                </div>

                {/* Text */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <p className="text-xs md:text-sm uppercase font-semibold text-primary mb-3 md:mb-4 tracking-wider">
                    {featuredVideo.category || "VÍDEO"}
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                    {featuredVideo.title}
                  </h2>
                  <div className="w-20 border-b-2 border-primary mb-6 md:mb-8"></div>
                  <a
                    href={featuredVideo.video_url || "#"}
                    className="text-sm md:text-base text-primary hover:underline flex items-center gap-2 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistir agora →
                  </a>
                </div>
              </div>
            </FadeIn>
          ) : null}
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4 flex justify-end">
        <AdPlaceholder variant="square" size="medium" />
      </div>

      {/* Videos Grid */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          {isLoadingVideos && offset === 0 ? (
            <VideoCardSkeletonGrid count={9} />
          ) : videos.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {videos.map((video, index) => (
                  <FadeIn key={video.id} delay={index * 0.05}>
                    <VideoCard
                      title={video.title}
                      thumbnail={video.thumbnail || "/placeholder.svg"}
                      link={video.video_url || "#"}
                    />
                  </FadeIn>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <FadeIn delay={0.3}>
                  <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
                    <Button
                      variant="outline"
                      onClick={handleLoadMore}
                      disabled={isLoadingVideos}
                      className="border-2 border-primary text-primary px-8 py-6 text-base font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      {isLoadingVideos ? "Carregando..." : "Carregar Mais"}
                    </Button>
                  </div>
                </FadeIn>
              )}
            </>
          ) : (
            <FadeIn>
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  Nenhum vídeo encontrado.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>

      <Footer />
    </div>
  );
};

export default Video;
