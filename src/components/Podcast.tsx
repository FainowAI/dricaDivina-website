import { Play } from "lucide-react";
import ClickableLink from "@/components/ClickableLink";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const episodes = [
  {
    number: "Ep. 11",
    title: "Autocuidado sem culpa",
  },
  {
    number: "Ep. 20",
    title: "Beleza realista no dia a dia",
  },
];

const Podcast = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-px bg-border w-32"></div>
            <h2 className="text-4xl font-bold uppercase">Podcast</h2>
            <div className="h-px bg-border w-32"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Conversas sinceras sobre vida, bem-estar e propósito.
          </p>
        </div>

        <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {episodes.map((episode, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                <div className="bg-card border border-accent rounded-lg p-8 hover:shadow-xl hover:border-accent/80 transition-all h-full group cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <button className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all shadow-lg">
                      <Play className="h-6 w-6 ml-1" fill="currentColor" />
                    </button>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{episode.number}</p>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">{episode.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <ClickableLink text="Mais podcasts" href="#" className="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default Podcast;
