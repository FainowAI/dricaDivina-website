import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { AnimatedScribble } from "@/components/AnimatedScribble";

const AboutDrica = () => {
    return (
        <section className="pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 bg-gradient-to-b from-orange-soft/30 via-background to-background relative overflow-hidden">
            {/* Animated decorative scribbled line - PRESERVED */}
            <AnimatedScribble pathName="about" className="opacity-10" strokeColor="hsl(14, 100%, 60%)" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <FadeIn delay={0.2} className="w-full space-y-6 md:space-y-8">
                        <div className="space-y-3 text-center">
                            <div className="inline-flex items-center gap-2 bg-orange-soft px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-orange-vibrant animate-pulse" />
                                <span className="text-orange-vibrant font-bold tracking-wider uppercase text-xs md:text-sm">
                                    Conheça a Drica
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Celebrando a <span className="text-orange-vibrant italic relative inline-block">
                                    beleza madura
                                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 6 Q100 2, 198 6" stroke="hsl(14, 100%, 60%)" strokeWidth="3" fill="none" opacity="0.5">
                                            <animate attributeName="d" values="M2 6 Q100 2, 198 6;M2 6 Q100 10, 198 6;M2 6 Q100 2, 198 6" dur="3s" repeatCount="indefinite" />
                                        </path>
                                    </svg>
                                </span> e redefinindo a maturidade.
                            </h2>
                        </div>

                        <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed text-center">
                            <p>
                                Drica Divina é uma influenciadora apaixonada por beleza, skincare e maquiagem, <strong className="text-orange-vibrant">pioneira</strong> em focar nas reais necessidades da pele madura.
                            </p>
                            <p>
                                Com sua voz potente e acolhedora, ela quebra as regras tradicionais e inspira mulheres a celebrarem cada linha de expressão como parte de suas histórias e conquistas.
                            </p>
                        </div>

                        {/* Stats - UPDATED VALUES */}
                        <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border/50">
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-bold text-orange-vibrant">6+</p>
                                <p className="text-xs md:text-sm text-muted-foreground mt-1">Anos Ativos</p>
                            </div>
                            <div className="text-center border-l border-r border-border/50">
                                <p className="text-2xl md:text-3xl font-bold text-orange-vibrant">3500+</p>
                                <p className="text-xs md:text-sm text-muted-foreground mt-1">Conteúdos</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-bold text-orange-vibrant">2M+</p>
                                <p className="text-xs md:text-sm text-muted-foreground mt-1">Seguidoras</p>
                            </div>
                        </div>

                        <div className="pt-2 text-center">
                            <Link
                                to="/sobre"
                                className="inline-flex items-center justify-center gap-3 bg-gradient-orange-primary hover:shadow-2xl text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:scale-105 group"
                            >
                                <span>Ler história completa</span>
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default AboutDrica;
