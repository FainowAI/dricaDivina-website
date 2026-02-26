import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { AnimatedScribble } from "@/components/AnimatedScribble";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Ops!",
        description: "Por favor, insira seu e-mail.",
        variant: "destructive",
      });
      return;
    }

    // Simula envio
    toast({
      title: "Sucesso!",
      description: "Você está inscrita! Em breve receberá nossas novidades.",
      duration: 5000,
    });

    setEmail("");
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-orange-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white blur-3xl"></div>
      </div>

      <AnimatedScribble pathName="newsletter" className="opacity-20 text-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 lg:mb-6">
              Fique Por Dentro
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed mb-7 md:mb-9 lg:mb-10 text-white/95">
              Receba novidades, lançamentos e dicas exclusivas direto no seu e-mail.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <form onSubmit={handleSubmit} className="flex items-center gap-3 md:gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 md:h-14 text-sm md:text-base border-2 border-white/30 bg-white/95 backdrop-blur-sm px-4 md:px-6 focus:border-white focus:bg-white transition-all placeholder:text-foreground/50"
                aria-label="Digite seu e-mail"
              />
              <button
                type="submit"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white text-orange-vibrant flex items-center justify-center hover:scale-110 hover:shadow-2xl active:scale-95 transition-all duration-300 shadow-lg flex-shrink-0"
                aria-label="Enviar"
              >
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
