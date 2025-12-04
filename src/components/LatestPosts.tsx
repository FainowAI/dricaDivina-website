import { ArrowRight } from "lucide-react";
import postDecor from "@/assets/post-decor.jpg";
import postSkincare from "@/assets/post-skincare.jpg";
import postTravel from "@/assets/post-travel.jpg";
import FadeIn from "@/components/FadeIn";
import PostCardLarge from "@/components/PostCardLarge";
import CarouselIndicators from "@/components/CarouselIndicators";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const posts = [
  {
    category: "MODA",
    title: "3 looks de inverno-estação para usar já",
    image: postDecor,
    link: "/beleza",
  },
  {
    category: "BELEZA",
    title: "Rotina de skincare rápida para pele luminosa",
    image: postSkincare,
    link: "/beleza",
  },
  {
    category: "VIAGEM",
    title: "Guia de fim de semana em Trancoso",
    image: postTravel,
    link: "/viagem",
  },
];

const LatestPosts = () => {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          {/* Cabeçalho da seção */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Últimos Posts
            </h2>
            <a
              href="/blog"
              className="text-sm md:text-base text-primary hover:underline flex items-center gap-2 transition-all"
            >
              Ver mais
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-4">
              {posts.map((post, index) => (
                <CarouselItem key={index} className="pl-4">
                  <PostCardLarge
                    title={post.title}
                    category={post.category}
                    image={post.image}
                    link={post.link}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <CarouselIndicators totalItems={posts.length} />
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {posts.map((post, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <PostCardLarge
                title={post.title}
                category={post.category}
                image={post.image}
                link={post.link}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
