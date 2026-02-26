import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

const AboutDrica = () => {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-orange-soft/30 via-background to-background relative overflow-hidden">
            {/* Animated decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 opacity-20 animate-pulse">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="hsl(14, 100%, 60%)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.4C26.4,83.8,10,86,-5.8,85.8C-21.6,85.6,-36.8,83,-49.9,75.6C-63,68.2,-74,56,-80.8,42.1C-87.6,28.2,-90.2,12.6,-88.7,-2.4C-87.2,-17.4,-81.6,-31.8,-73.4,-44.6C-65.2,-57.4,-54.4,-68.6,-41.2,-76.2C-28,-83.8,-12.4,-87.8,2.4,-91.8C17.2,-95.8,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 100 100"
                            to="360 100 100"
                            dur="30s"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>
            </div>

            <div className="absolute bottom-10 left-10 w-24 h-24 md:w-40 md:h-40 opacity-15 animate-pulse" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="hsl(16, 100%, 70%)" d="M39.5,-65.5C51.4,-58.2,61.3,-47.5,67.8,-35.1C74.3,-22.7,77.4,-8.6,76.8,5.3C76.2,19.2,71.9,32.9,64.3,44.8C56.7,56.7,45.8,66.8,33.1,72.4C20.4,78,5.9,79.1,-8.3,76.8C-22.5,74.5,-36.4,68.8,-48.1,60.5C-59.8,52.2,-69.3,41.3,-74.4,28.5C-79.5,15.7,-80.2,1,-76.7,-12.4C-73.2,-25.8,-65.5,-37.9,-55.1,-45.8C-44.7,-53.7,-31.6,-57.4,-18.9,-64.2C-6.2,-71,-3.1,-81,2.4,-85.1C7.9,-89.2,27.6,-72.8,39.5,-65.5Z" transform="translate(100 100)">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="360 100 100"
                            to="0 100 100"
                            dur="25s"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">

                    {/* Imagem */}
                    <FadeIn className="w-full md:w-1/2">
                        <div className="relative group">
                            {/* Background blob com gradiente laranja */}
                            <div className="absolute -inset-6 bg-gradient-to-br from-orange-vibrant/20 via-orange-medium/15 to-transparent rounded-[3rem] transform -rotate-2 transition-all duration-700 group-hover:rotate-1 group-hover:scale-105" />

                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50">
                                <img
                                    src="/placeholder.svg"
                                    alt="Drica Divina"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Orange gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-vibrant/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Animated badge */}
                                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-xl p-3 md:p-6 rounded-2xl shadow-2xl border border-orange-vibrant/20 transform translate-y-0 opacity-100 transition-all duration-500 group-hover:translate-y-[-8px]">
                                    <div className="flex items-center gap-4">
                                        {/* Animated sparkle icon */}
                                        <div className="relative w-10 h-10">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-orange-vibrant">
                                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" opacity="0.8">
                                                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                                                </path>
                                                <path d="M19 3L19.5 5.5L22 6L19.5 6.5L19 9L18.5 6.5L16 6L18.5 5.5L19 3Z" fill="currentColor">
                                                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
                                                </path>
                                                <path d="M5 15L5.5 17L7 17.5L5.5 18L5 20L4.5 18L3 17.5L4.5 17L5 15Z" fill="currentColor">
                                                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" begin="1s" />
                                                </path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground text-sm md:text-base">Maturidade & Beleza Livre</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">Quebrando padrões desde 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className="hidden lg:block absolute -right-6 top-20 bg-white rounded-2xl shadow-xl p-4 border border-orange-vibrant/20 transform transition-all duration-500 hover:scale-110">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-orange-primary flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
                                            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor">
                                                <animate attributeName="transform" type="scale" values="1;1.2;1" dur="1.5s" repeatCount="indefinite" additive="sum" />
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-orange-vibrant text-lg">2M+</p>
                                        <p className="text-xs text-muted-foreground">Seguidoras</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Texto */}
                    <FadeIn delay={0.2} className="w-full md:w-1/2 space-y-6 md:space-y-8">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 bg-orange-soft px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-orange-vibrant animate-pulse" />
                                <span className="text-orange-vibrant font-bold tracking-wider uppercase text-xs md:text-sm">
                                    Conheça a Drica
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Empoderando a <span className="text-orange-vibrant italic relative inline-block">
                                    beleza madura
                                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 6 Q100 2, 198 6" stroke="hsl(14, 100%, 60%)" strokeWidth="3" fill="none" opacity="0.5">
                                            <animate attributeName="d" values="M2 6 Q100 2, 198 6;M2 6 Q100 10, 198 6;M2 6 Q100 2, 198 6" dur="3s" repeatCount="indefinite" />
                                        </path>
                                    </svg>
                                </span> e combatendo o etarismo.
                            </h2>
                        </div>

                        <div className="space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed">
                            <p>
                                Drica Divina é uma influenciadora apaixonada por beleza, skincare e maquiagem, <strong className="text-orange-vibrant">pioneira</strong> em focar nas reais necessidades da pele madura.
                            </p>
                            <p>
                                Com sua voz potente e acolhedora, ela quebra as regras tradicionais e inspira mulheres a celebrarem cada linha de expressão como parte de suas histórias e conquistas.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border/50">
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-bold text-orange-vibrant">5+</p>
                                <p className="text-xs md:text-sm text-muted-foreground mt-1">Anos Ativos</p>
                            </div>
                            <div className="text-center border-l border-r border-border/50">
                                <p className="text-2xl md:text-3xl font-bold text-orange-vibrant">1000+</p>
                                <p className="text-xs md:text-sm text-muted-foreground mt-1">Conteúdos</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-bold text-orange-vibrant">2M+</p>
                                <p className="text-xs md:text-sm text-muted-foreground mt-1">Seguidoras</p>
                            </div>
                        </div>

                        <div className="pt-2">
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
