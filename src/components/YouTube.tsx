import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const videos = [
  { title: "Vlog: Um dia comigo — dicas de looks", featured: true },
  { title: "Maquiagem com linha de verão", featured: false },
  { title: "Especial de Viagens em cada de maio", featured: false },
  { title: "Rotina de cuidados com a pele", featured: false },
];

const YouTube = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-px bg-primary-foreground/30 w-32"></div>
            <h2 className="text-4xl font-bold uppercase">YouTube</h2>
            <div className="h-px bg-primary-foreground/30 w-32"></div>
          </div>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Vídeos semanais com dicas, tutoriais e bastidores da minha rotina.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {videos.map((video, index) => (
              <CarouselItem
                key={index}
                className={`pl-2 md:pl-4 basis-full ${index === 0 ? 'sm:basis-2/3 md:basis-3/5' : 'sm:basis-1/3 md:basis-1/5'}`}
              >
                <div className={`group cursor-pointer ${index === 0 ? '' : 'h-full'}`}>
                  <div className={`aspect-video bg-primary-foreground/10 rounded-lg overflow-hidden flex items-center justify-center border-2 border-primary-foreground/20 group-hover:border-primary-foreground/40 transition-all ${index === 0 ? '' : 'h-32'}`}>
                    <button className={`${index === 0 ? 'w-20 h-20' : 'w-12 h-12'} rounded-full bg-primary-foreground/20 border-2 border-primary-foreground flex items-center justify-center hover:bg-primary-foreground/40 hover:scale-110 transition-all shadow-lg`}>
                      <Play className={`${index === 0 ? 'h-8 w-8' : 'h-4 w-4'} ml-1`} fill="currentColor" />
                    </button>
                  </div>
                  <p className={`mt-4 font-semibold group-hover:text-accent transition-colors ${index === 0 ? 'text-base' : 'text-sm'}`}>{video.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/20" />
          <CarouselNext className="hidden md:flex border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default YouTube;
