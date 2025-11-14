import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-accent uppercase mb-4">
            Fique Por Dentro
          </h2>
          <p className="text-lg mb-8">
            Receba novidades do blog, lançamentos e vídeos direto no seu e-mail.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="flex-1 h-12 border-primary rounded-full px-6"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 rounded-full">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
