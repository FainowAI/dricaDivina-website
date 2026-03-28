import { TrendingUp, Instagram, Youtube, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import BusinessContactForm from "@/components/BusinessContactForm";
import VerticalTimeline from "@/components/VerticalTimeline";
import BrandPartners from "@/components/BrandPartners";
import { AnimatedScribble } from "@/components/AnimatedScribble";
import {
  YearsIcon,
  VideosIcon,
  FollowersIcon
} from "@/components/AnimatedIcons";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.12 8.12 0 004.76 1.52V6.76a4.85 4.85 0 01-.99-.07z" />
  </svg>
);

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 md:pt-60 lg:pt-80 pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-6xl font-bold mb-5 md:mb-8">Quem é DRICA DIVINA?</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-xl text-foreground leading-relaxed">
              A missão da DRICA DIVINA é inspirar o autocuidado como expressão de amor-próprio. Acredita que rotinas simples,
              consistentes e prazerosas transformam a relação com o espelho e com o tempo. Aqui, beleza é bem-estar, informação
              acessível e liberdade para envelhecer com dignidade, estilo e alegria.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Business Contact Form - Top */}
      <BusinessContactForm variant="top" />

      {/* Vertical Timeline Section */}
      <VerticalTimeline />

      {/* Brand Partners Section */}
      <BrandPartners />

      {/* Social Stats - Enhanced with same values as homepage */}
      <section className="py-16 md:py-28 bg-gradient-to-br from-accent/5 via-secondary/30 to-orange-soft/10 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-accent" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <AnimatedScribble pathName="latest" className="opacity-5" strokeColor="hsl(14, 100%, 60%)" />

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-accent font-bold tracking-wider uppercase text-xs md:text-sm">
                  Impacto
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Números que{" "}
                <span className="text-accent italic">inspiram</span>
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                value: "7+",
                label: "Anos Ativos",
                sublabel: "Dedicados à beleza madura",
                IconComponent: YearsIcon,
                color: "from-orange-500 to-amber-500",
                delay: 0.1
              },
              {
                value: "3500+",
                label: "Conteúdos",
                sublabel: "Vídeos, posts e tutoriais",
                IconComponent: VideosIcon,
                color: "from-rose-500 to-pink-500",
                delay: 0.2
              },
              {
                value: "2M+",
                label: "Seguidoras",
                sublabel: "Mulheres inspiradas",
                IconComponent: FollowersIcon,
                color: "from-violet-500 to-purple-500",
                delay: 0.3
              }
            ].map((stat, index) => (
              <FadeIn key={index} delay={stat.delay}>
                <motion.div
                  className="group relative bg-card/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />

                  {/* Animated background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Custom SVG Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-accent">
                      <stat.IconComponent size={36} />
                    </div>

                    {/* Value with animated counter effect */}
                    <motion.div
                      className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-accent to-orange-vibrant bg-clip-text text-transparent mb-3"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: stat.delay }}
                    >
                      {stat.value}
                    </motion.div>

                    <div className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {stat.label}
                    </div>

                    <div className="text-sm text-foreground/60">
                      {stat.sublabel}
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden rounded-br-2xl">
                    <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${stat.color} opacity-5 rounded-full translate-x-1/2 translate-y-1/2 group-hover:opacity-10 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Business Contact Form - Bottom */}
      <BusinessContactForm variant="bottom" />

      {/* Social Media Links Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Me siga nas redes</h2>
            <p className="text-foreground/60 mb-10">Conteúdo diário de beleza, autocuidado e inspiração</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://instagram.com/dricadivina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/dricadivina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.tiktok.com/@dricadivina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-black text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <TikTokIcon className="h-5 w-5" />
                <span>TikTok</span>
              </a>
              <a
                href="https://facebook.com/dricadivina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sobre;
