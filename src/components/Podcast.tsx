import { Play } from "lucide-react";
import ClickableLink from "@/components/ClickableLink";
import CarouselIndicators from "@/components/CarouselIndicators";
import { PodcastCardSkeletonList } from "@/components/skeletons";
import { usePodcasts } from "@/hooks/usePodcasts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Podcast = () => {
  const { data: episodes, isLoading, error } = usePodcasts(4);

  if (error) {
    return (
      <section className="py-14 md:py-17 lg:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Não foi possível carregar os podcasts.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 md:py-17 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-9 lg:mb-12">
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-px bg-border w-32"></div>
            <h2 className="text-4xl font-bold uppercase">Podcast</h2>
            <div className="h-px bg-border w-32"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Conversas sinceras sobre vida, bem-estar e propósito.
          </p>
        </div>

        {isLoading ? (
          <div className="max-w-5xl mx-auto">
            <PodcastCardSkeletonList count={2} />
          </div>
        ) : episodes && episodes.length > 0 ? (
          <>
            <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {episodes.map((episode) => (
                  <CarouselItem key={episode.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                    <div className="bg-card border border-accent rounded-lg p-6 md:p-7 lg:p-8 hover:shadow-xl hover:border-accent/80 transition-all h-full group cursor-pointer">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <button
                          className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all shadow-lg"
                          onClick={() => episode.audio_url && window.open(episode.audio_url, '_blank')}
                        >
                          <Play className="h-6 w-6 ml-1" fill="currentColor" />
                        </button>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {episode.episode_number ? `Ep. ${episode.episode_number}` : "Episódio"}
                          </p>
                          <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                            {episode.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            <CarouselIndicators totalItems={episodes.length} />
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum podcast encontrado.</p>
          </div>
        )}

        <div className="text-center mt-8">
          <ClickableLink text="Mais podcasts" href="#" className="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default Podcast;
