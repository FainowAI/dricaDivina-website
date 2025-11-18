import { Sparkles, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Quem é Drica Divina?</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-foreground leading-relaxed">
              A missão da Drica é inspirar o autocuidado como expressão de amor-próprio. Acredita que rotinas simples,
              consistentes e prazerosas transformam a relação com o espelho e com o tempo. Aqui, beleza é bem-estar, informação
              acessível e liberdade para envelhecer com dignidade, estilo e alegria.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="relative">
              {/* Desktop Timeline */}
              <div className="hidden md:block">
                <div className="relative h-2 bg-border mb-16">
                  {/* Timeline Points */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[12.5%] w-4 h-4 bg-accent rounded-full"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[37.5%] w-4 h-4 bg-accent rounded-full"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[62.5%] w-4 h-4 bg-accent rounded-full"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[87.5%] w-4 h-4 bg-accent rounded-full"></div>
                </div>

                <div className="grid grid-cols-4 gap-8">
                  {/* 2019 */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-6">2019</div>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img 
                        src="/placeholder.svg" 
                        alt="Início na beleza madura"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Início na beleza madura</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Drica começa a compartilhar dicas práticas de skincare e maquiagem para pele madura, quebrando regras
                      complicadas e focando no que funciona no dia a dia.
                    </p>
                  </div>

                  {/* 2020 */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-6">2020</div>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img 
                        src="/placeholder.svg" 
                        alt="Formação nos EUA"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Formação nos EUA</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Aprofunda estudos em cosmetologia e formulações, trazendo metodologia simples, segura e embasada para a
                      comunidade de língua portuguesa.
                    </p>
                  </div>

                  {/* 2021 */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-6">2021</div>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img 
                        src="/placeholder.svg" 
                        alt="Voz contra o etarismo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Voz contra o etarismo</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Passa a defender ativamente a diversidade de idades na beleza, criando campanhas e conteúdos que
                      celebram linhas, histórias e experiências.
                    </p>
                  </div>

                  {/* 2023 */}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-6">2023</div>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img 
                        src="/placeholder.svg" 
                        alt="Expansão do conteúdo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Expansão do conteúdo</h3>
                    <p className="text-base text-foreground leading-relaxed">
                      Amplia formatos com vídeos, newsletters e guias práticos, alcançando novas plataformas sem perder a
                      proximidade com o público.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden space-y-12">
                {[
                  {
                    year: "2019",
                    title: "Início na beleza madura",
                    description: "Drica começa a compartilhar dicas práticas de skincare e maquiagem para pele madura, quebrando regras complicadas e focando no que funciona no dia a dia."
                  },
                  {
                    year: "2020",
                    title: "Formação nos EUA",
                    description: "Aprofunda estudos em cosmetologia e formulações, trazendo metodologia simples, segura e embasada para a comunidade de língua portuguesa."
                  },
                  {
                    year: "2021",
                    title: "Voz contra o etarismo",
                    description: "Passa a defender ativamente a diversidade de idades na beleza, criando campanhas e conteúdos que celebram linhas, histórias e experiências."
                  },
                  {
                    year: "2023",
                    title: "Expansão do conteúdo",
                    description: "Amplia formatos com vídeos, newsletters e guias práticos, alcançando novas plataformas sem perder a proximidade com o público."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="text-xl font-bold text-accent mb-2">{item.year}</div>
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <div className="w-0.5 h-full bg-border mt-2"></div>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="w-24 h-24 mb-3 rounded-full overflow-hidden bg-muted">
                        <img 
                          src="/placeholder.svg" 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-base text-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que seguir a Drica */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-20">Por que seguir a Drica?</h2>
          </FadeIn>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-card p-10 rounded-lg border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expertise em cuidados com a pele</h3>
              <p className="text-base text-foreground leading-relaxed">
                Protocolos claros, embasados e adaptáveis à rotina: do essencial ao avançado, sem promessas milagrosas.
              </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card p-10 rounded-lg border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Comunidade engajada</h3>
                <p className="text-base text-foreground leading-relaxed">
                  Comentários, trocas e experiências reais que fortalecem o cuidado e a autoestima em todas as fases.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-card p-10 rounded-lg border border-border shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Conteúdos exclusivos e personalizados</h3>
                <p className="text-base text-foreground leading-relaxed">
                  Aulas, guias e recomendações sob medida para diferentes objetivos, tipos de pele e estilos de vida.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social Stats */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <FadeIn delay={0.1}>
              <div className="bg-card p-10 rounded-lg border border-border shadow-sm">
              <div className="text-6xl font-bold text-accent mb-4">420K</div>
              <div className="text-xl text-foreground font-semibold">Instagram</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card p-10 rounded-lg border border-border shadow-sm">
              <div className="text-6xl font-bold text-accent mb-4">310K</div>
              <div className="text-xl text-foreground font-semibold">TikTok</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-card p-10 rounded-lg border border-border shadow-sm">
              <div className="text-6xl font-bold text-accent mb-4">150K</div>
              <div className="text-xl text-foreground font-semibold">YouTube</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Artigos da Drica */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-20">Artigos da Drica</h2>
          </FadeIn>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Manhã eficiente"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 leading-tight">Manhã eficiente: limpeza suave e proteção inteligente</h3>
                <p className="text-base text-foreground leading-relaxed">
                  Como montar uma rotina leve que respeita a barreira cutânea e prepara a pele para o dia.
                </p>
              </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Maquiagem que valoriza"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">Maquiagem que valoriza: luz, textura e conforto</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Técnicas simples para realçar traços, sem pesar e com acabamento sofisticado.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Autocuidado como ritual"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">Autocuidado como ritual: pequenos compromissos diários</h3>
                  <p className="text-base text-foreground leading-relaxed">
                    Como transformar o cuidado pessoal em prática de amor-próprio e consistência.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sobre;

