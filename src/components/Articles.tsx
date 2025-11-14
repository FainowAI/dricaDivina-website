import { ArrowRight } from "lucide-react";
import articleImage from "@/assets/article-coffee.jpg";

const Articles = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-accent uppercase mb-4">Matérias</h2>
          <div className="h-px bg-border w-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={articleImage} 
              alt="Matéria em destaque"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold leading-tight">
              Hábitos simples para uma rotina mais leve
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pequenas mudanças que transformaram meu dia-a-dia, balanceando o agitamento.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-sm">Mindfulness e meditação</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-sm">Rotina de skincare noturna</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-sm">Exercícios matinais</span>
              </div>
            </div>
            
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 rounded-full flex items-center gap-2 mt-6">
              Saiba mais!
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
