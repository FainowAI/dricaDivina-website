import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import VideoCard from "@/components/VideoCard";
import CarouselIndicators from "@/components/CarouselIndicators";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const videos = [
  {
    title: "Vlog: Um dia comigo — dicas de looks",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    link: "#",
  },
  {
    title: "Maquiagem com linha de verão",
    thumbnail: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
    link: "#",
  },
  {
    title: "Especial de Viagens em cada de maio",
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    link: "#",
  },
];

const YouTube = () => {
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

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={index} className="pl-4">
                  <VideoCard
                    title={video.title}
                    thumbnail={video.thumbnail}
                    link={video.link}
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
            <FadeIn key={index} delay={index * 0.1}>
              <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                link={video.link}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTube;
