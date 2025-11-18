import { ArrowRight } from "lucide-react";
import articleImage from "@/assets/article-coffee.jpg";
import FadeIn from "@/components/FadeIn";

const Articles = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeIn>
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Matérias</h2>
            <div className="h-0.5 bg-accent w-20"></div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center">
          <FadeIn direction="right">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src={articleImage}
                alt="Matéria em destaque"
                className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="space-y-5 lg:space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Hábitos simples para uma rotina mais leve
            </h3>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Pequenas mudanças que transformaram meu dia-a-dia, balanceando o agitamento.
            </p>

            <div className="space-y-3 py-2">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-base md:text-lg">Mindfulness e meditação</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-base md:text-lg">Rotina de skincare noturna</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-base md:text-lg">Exercícios matinais</span>
              </div>
            </div>

            <button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95 h-12 md:h-14 px-6 md:px-8 rounded-full flex items-center gap-2 mt-6 text-sm md:text-base font-semibold transition-all duration-200">
              Saiba mais!
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Articles;
