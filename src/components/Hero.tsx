import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-20 min-h-[80vh] flex items-center bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 py-12">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Bem-vinda, Divina!
            </h1>
            <p className="text-xl text-foreground max-w-lg leading-relaxed">
              Sou a Drica, sua amiga de carinho e bem-estar. Aqui você encontra dicas do dia, beleza descomplicada, roteiros de viagem e conversas sinceras sobre saúde e autocuidado.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95 h-14 px-8 rounded-full text-base transition-all duration-200">
              Conheça o Blog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative h-[600px] lg:h-[700px]">
            <img
              src={heroImage}
              alt="Drica Divina"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
