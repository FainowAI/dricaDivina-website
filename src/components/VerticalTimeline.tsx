import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";

import timeline2019 from "@/assets/timeline-2019.jpeg";
import timeline2020 from "@/assets/timeline-2020.jpeg";
import timeline2021 from "@/assets/timeline-2021.jpeg";
import timeline2023 from "@/assets/timeline-2023.jpeg";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2019",
    title: "Nascimento da Beleza Madura",
    description:
      "Aos 47 anos, Drica reposiciona o @dricadivina para mulheres 35+, tornando-se pioneira em conteúdo de beleza madura no Brasil. Abandona o posicionamento genérico e passa a ensinar técnicas adaptadas à pele com rugas e flacidez.",
    image: timeline2019,
  },
  {
    year: "2020",
    title: "Escola Blush e Virada Digital",
    description:
      "Cria a Escola Blush com cursos de automaquiagem para mulheres maduras. Com a pandemia, pivota para o digital e transforma o conhecimento em cursos online, passando a viver das redes.",
    image: timeline2020,
  },
  {
    year: "2021",
    title: "Consolidação e Educação em Massa",
    description:
      "Fortalece quadros educativos como 'Drica na Farmácia', ensinando sobre dermocosmético em linguagem acessível. Consolida a filosofia de que 'pele é rainha' — maquiagem só funciona com skincare em dia.",
    image: timeline2021,
  },
  {
    year: "2022",
    title: "Lançamento do DRICAPOD",
    description:
      "Lança o DRICAPOD, primeiro videocast para a #mulhermadura no Spotify e YouTube. Amplia o escopo para maturidade, autocuidado, etarismo, relações e carreira para mulheres 40+.",
    image: timeline2021, // Placeholder - mesmo de 2021
  },
  {
    year: "2023",
    title: "Reconhecimento Nacional",
    description:
      "Alcança mais de 1 milhão de seguidores e é reconhecida pelo gshow como a maior criadora de conteúdo de beleza madura do Brasil. Indicada ao TikTok Awards 2023 na categoria 'Surra de Beleza'.",
    image: timeline2023,
  },
  {
    year: "2024",
    title: "Talks e Presença Internacional",
    description:
      "Participa do ELLE Talks – Beleza, discutindo menopausa e autoamor ao lado de Ana Paula Padrão. Marca presença na Times Square em Nova York, levando sua mensagem para o cenário internacional.",
    image: timeline2023, // Placeholder - mesmo de 2023
  },
  {
    year: "2025",
    title: "Palestrante e Inovação com IA",
    description:
      "Consolida-se como palestrante em agências como CDPV, TalkLab e Visão Palestras. Protagoniza parceria com Natura Chronos Derma e lança o projeto Drica Divina IA, um clone digital com inteligência artificial.",
    image: timeline2023, // Placeholder - mesmo de 2023
  },
];

const TimelinePoint = ({ isActive }: { isActive: boolean }) => (
  <motion.div
    className="relative z-10"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div
      className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-accent transition-colors duration-300 ${
        isActive ? "bg-accent" : "bg-background"
      }`}
    />
    <div className="absolute inset-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent/30 animate-ping" />
  </motion.div>
);

const TimelineCard = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`flex items-center gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col md:flex-row`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-center md:text-inherit`}>
        <FadeIn direction={isLeft ? "right" : "left"} delay={0.2}>
          <div
            className={`bg-card p-6 md:p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow ${
              isLeft ? "md:mr-4" : "md:ml-4"
            }`}
          >
            <span className="inline-block text-3xl md:text-4xl font-bold text-accent mb-3">
              {item.year}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-base text-foreground/80 leading-relaxed">
              {item.description}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Timeline Point - Hidden on mobile, shown in center on desktop */}
      <div className="hidden md:flex items-center justify-center">
        <TimelinePoint isActive={true} />
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center md:justify-start">
        <FadeIn direction={isLeft ? "left" : "right"} delay={0.4}>
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

const VerticalTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 md:py-24 bg-secondary/30 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-bold tracking-wider uppercase text-xs md:text-sm">
                Trajetória
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              A Jornada da{" "}
              <span className="text-accent italic">Drica Divina</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Vertical Line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-border/50 rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-accent to-accent/50 rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-border/50">
            <motion.div
              className="absolute top-0 left-0 w-full bg-accent"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <div key={item.year} className="relative">
                {/* Mobile Point */}
                <div className="md:hidden absolute left-6 top-8">
                  <TimelinePoint isActive={true} />
                </div>

                <div className="md:pl-0 pl-16">
                  <TimelineCard item={item} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTimeline;
