import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface HeroPostProps {
  title: string;
  summary: string;
  image: string;
  category: string;
  link: string;
}

const HeroPost = ({ title, summary, image, category, link }: HeroPostProps) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Texto à esquerda */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-xs md:text-sm uppercase font-semibold text-primary tracking-wider">
                {category}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                {summary}
              </p>

              {/* Linha decorativa */}
              <div className="w-16 border-b-2 border-primary"></div>

              {/* Link com seta */}
              <a
                href={link}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                <span>Ler mais</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Imagem à direita */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroPost;
