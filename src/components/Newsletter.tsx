import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

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
    <section className="py-17 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold text-foreground mb-4 md:mb-5 lg:mb-6">
              Fique Por Dentro
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl mb-7 md:mb-9 lg:mb-10 leading-relaxed">
              Receba novidades do Conhecimento, lançamentos e vídeos direto no seu e-mail.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-base border-2 border-muted rounded-full px-6 focus:border-accent transition-colors"
              aria-label="Digite seu e-mail"
            />
            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:scale-105 active:scale-95 h-14 px-10 rounded-full text-base font-semibold transition-all duration-200"
            >
              Enviar
            </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
