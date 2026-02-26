import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import FadeIn from "@/components/FadeIn";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Contact Section */}
      <section className="pt-40 pb-12 md:py-28 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-12">
                Contato
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-base md:text-xl leading-relaxed text-foreground/80 mb-10 md:mb-16">
                Adoraria ouvir de você! Se você tem interesse em parcerias,
                colaborações ou é da imprensa, entre em contato pelos e-mails
                abaixo.
              </p>
            </FadeIn>

            {/* Email Cards */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
              <FadeIn delay={0.3}>
                <div className="bg-secondary/30 rounded-lg p-5 md:p-10 hover:shadow-lg transition-shadow">
                  <Mail className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    Parcerias
                  </h2>
                  <p className="text-sm md:text-base text-foreground/70 mb-4">
                    Colaborações comerciais e marcas
                  </p>
                  <a
                    href="mailto:parceria@dricadivina.com"
                    className="text-base md:text-lg text-primary hover:underline font-semibold"
                  >
                    parceria@dricadivina.com
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-secondary/30 rounded-lg p-5 md:p-10 hover:shadow-lg transition-shadow">
                  <Mail className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    Imprensa
                  </h2>
                  <p className="text-sm md:text-base text-foreground/70 mb-4">
                    Solicitações de entrevistas e mídia
                  </p>
                  <a
                    href="mailto:imprensa@dricadivina.com"
                    className="text-base md:text-lg text-primary hover:underline font-semibold"
                  >
                    imprensa@dricadivina.com
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.5}>
              <div className="border-t border-border pt-8 md:pt-12">
                <p className="text-base md:text-lg text-foreground/70">
                  Respondo a todos os e-mails pessoalmente. Por favor, aguarde
                  até 48 horas para uma resposta.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contato;
