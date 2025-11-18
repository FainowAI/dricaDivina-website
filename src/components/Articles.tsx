import { ArrowRight } from "lucide-react";
import articleImage from "@/assets/article-coffee.jpg";
import FadeIn from "@/components/FadeIn";

const Articles = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Matérias</h2>
            <div className="h-0.5 bg-accent w-24"></div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={articleImage}
                alt="Matéria em destaque"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="space-y-6">
            <h3 className="text-3xl font-bold leading-tight">
              Hábitos simples para uma rotina mais leve
            </h3>
            <p className="text-xl text-foreground leading-relaxed">
              Pequenas mudanças que transformaram meu dia-a-dia, balanceando o agitamento.
            </p>

            <div className="space-y-4 py-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-base">Mindfulness e meditação</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-base">Rotina de skincare noturna</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0"></div>
                <span className="text-base">Exercícios matinais</span>
              </div>
            </div>

            <button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95 h-14 px-8 rounded-full flex items-center gap-2 mt-8 text-base font-semibold transition-all duration-200">
              Saiba mais!
              <ArrowRight className="h-5 w-5" />
            </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Articles;
