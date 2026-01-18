import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import VideoCard from "@/components/VideoCard";
import CarouselIndicators from "@/components/CarouselIndicators";
import { VideoCardSkeletonGrid } from "@/components/skeletons";
import { useVideos } from "@/hooks/useVideos";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const YouTube = () => {
  const { data, isLoading, error } = useVideos({ limit: 3 });
  const videos = data?.videos || [];

  if (error) {
    return (
      <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Não foi possível carregar os vídeos.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          {/* Cabeçalho da seção */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Últimos Vídeos
            </h2>
            <a
              href="/video"
              className="text-sm md:text-base text-primary hover:underline flex items-center gap-2 transition-all"
            >
              Ver todos os vídeos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {isLoading ? (
          <VideoCardSkeletonGrid count={3} />
        ) : videos.length > 0 ? (
          <>
            {/* Mobile: Carousel */}
            <div className="md:hidden">
              <Carousel opts={{ align: "start", loop: false }} className="w-full">
                <CarouselContent className="-ml-4">
                  {videos.map((video) => (
                    <CarouselItem key={video.id} className="pl-4">
                      <VideoCard
                        title={video.title}
                        thumbnail={video.thumbnail || "/placeholder.svg"}
                        link={video.video_url || "#"}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <CarouselIndicators totalItems={videos.length} />
            </div>

            {/* Desktop: Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {videos.map((video, index) => (
                <FadeIn key={video.id} delay={index * 0.1}>
                  <VideoCard
                    title={video.title}
                    thumbnail={video.thumbnail || "/placeholder.svg"}
                    link={video.video_url || "#"}
                  />
                </FadeIn>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum vídeo encontrado.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTube;
