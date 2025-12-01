import { ArrowRight } from "lucide-react";
import postDecor from "@/assets/post-decor.jpg";
import postSkincare from "@/assets/post-skincare.jpg";
import postTravel from "@/assets/post-travel.jpg";
import FadeIn from "@/components/FadeIn";
import ClickableLink from "@/components/ClickableLink";
import CarouselIndicators from "@/components/CarouselIndicators";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const posts = [
  {
    category: "MODA",
    title: "3 looks de inverno-estação para usar já",
    image: postDecor,
  },
  {
    category: "BELEZA",
    title: "Rotina de skincare rápida para pele luminosa",
    image: postSkincare,
  },
  {
    category: "VIAGEM",
    title: "Guia de fim de semana em Trancoso",
    image: postTravel,
  },
];

const LatestPosts = () => {
  return (
    <section className="py-14 md:py-17 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-8 md:mb-9 lg:mb-12">
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="h-px bg-border w-32"></div>
              <h2 className="text-4xl font-bold uppercase">Últimos Posts</h2>
              <div className="h-px bg-border w-32"></div>
            </div>
            <div className="flex justify-center">
              <a href="#" className="text-base text-accent hover:text-accent/80 hover:underline flex items-center gap-1 py-2 px-3 transition-all">
                Ver mais <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </FadeIn>

        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {posts.map((post, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <article className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-5 lg:p-6">
                    <p className="text-sm text-accent font-semibold mb-2 md:mb-3 tracking-wide">
                      {post.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-3 md:mb-4 leading-tight text-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <ClickableLink text="Ler agora" href="#" />
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <CarouselIndicators totalItems={posts.length} />
      </div>
    </section>
  );
};

export default LatestPosts;
