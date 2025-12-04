import { ArrowRight } from "lucide-react";
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
    <section className="py-12 md:py-20 lg:py-24 bg-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-5 lg:mb-6">
              Fique Por Dentro
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg leading-relaxed mb-7 md:mb-9 lg:mb-10 text-foreground/80">
              Receba novidades, lançamentos e vídeos direto no seu e-mail.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <form onSubmit={handleSubmit} className="flex items-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 md:h-14 text-sm md:text-base border border-border bg-background px-4 md:px-6 focus:border-primary transition-colors"
                aria-label="Digite seu e-mail"
              />
              <button
                type="submit"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg flex-shrink-0"
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
