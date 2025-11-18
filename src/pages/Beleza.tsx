import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import postSkincare from "@/assets/post-skincare.jpg";
import vitaminSerum from "@/assets/skincare-vitamin.jpg";
import moisturizer from "@/assets/skincare-moisturizer.jpg";
import sunscreen from "@/assets/skincare-sunscreen.jpg";
import FadeIn from "@/components/FadeIn";

const categories = ["Maquiagem", "Skincare", "Cabelos", "Dicas"];

const featuredPosts = [
  {
    id: 1,
    title: "Rotina minimalista: 4 passos que realmente funcionam",
    description: "Como combinar limpeza, tratamento e proteção para pele luminosa em pouco tempo.",
    image: postSkincare,
    category: "SKINCARE",
    tag: "Destaque",
  },
  {
    id: 2,
    title: "Guia de séruns: vitamina C, niacinamida e quando usar",
    description: "Entenda os ativos, horários ideais e como não sobrecarregar a barreira cutânea.",
    image: vitaminSerum,
    category: "SKINCARE",
    tag: "Destaque",
  },
];

const allPosts = [
  {
    id: 3,
    title: "Base glow sem pesar: aplicação com técnicas de fotógrafa",
    description: "Produtos e truques rápidos para revitalizar fins sem pesar.",
    image: moisturizer,
    category: "Maquiagem",
    tag: "MAQUIAGEM",
  },
  {
    id: 4,
    title: "Ácidos sem medo: como introduzir passo a passo na rotina",
    description: "Passo a passo seguro para peles sensíveis e como ajustar frequência.",
    image: sunscreen,
    category: "Skincare",
    tag: "SKINCARE",
  },
  {
    id: 5,
    title: "Day after perfeito: dicas para ondas naturais",
    description: "Produtos e truques rápidos para revitalizar fins sem pesar.",
    image: postSkincare,
    category: "Cabelos",
    tag: "CABELOS",
  },
  {
    id: 6,
    title: "Necessaire de viagem: o que levo na mala de mão",
    description: "Itens compactos que resolvem skincare, cabelo e make em qualquer roteiro.",
    image: vitaminSerum,
    category: "Dicas",
    tag: "DICAS",
  },
  {
    id: 7,
    title: "Primers que realmente fazem diferença: textura e duração",
    description: "Como escolher primer para cada tipo de pele e ocasião.",
    image: moisturizer,
    category: "Maquiagem",
    tag: "MAQUIAGEM",
  },
  {
    id: 8,
    title: "Protetor solar toque seco: os melhores para oleosas",
    description: "Testei 10 protetores e separei os que não deixam oleosidade.",
    image: sunscreen,
    category: "Skincare",
    tag: "SKINCARE",
  },
  {
    id: 9,
    title: "Cronograma capilar simplificado: funciona?",
    description: "Como organizar hidratação, nutrição e reconstrução sem complicar.",
    image: postSkincare,
    category: "Cabelos",
    tag: "CABELOS",
  },
  {
    id: 10,
    title: "Maquiagem durável para o verão: truques e fixadores",
    description: "Como fazer a make durar o dia todo mesmo no calor intenso.",
    image: vitaminSerum,
    category: "Maquiagem",
    tag: "MAQUIAGEM",
  },
  {
    id: 11,
    title: "Contorno facial: técnica atualizada para 2025",
    description: "Aprenda a técnica moderna de contorno que valoriza traços naturais.",
    image: moisturizer,
    category: "Maquiagem",
    tag: "MAQUIAGEM",
  },
  {
    id: 12,
    title: "Skincare noturna: ordem correta dos produtos",
    description: "Entenda a sequência ideal para potencializar resultados durante o sono.",
    image: sunscreen,
    category: "Skincare",
    tag: "SKINCARE",
  },
];

const Beleza = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Maquiagem");

  const filteredPosts = allPosts.filter(
    (post) => post.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Beleza</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-foreground leading-relaxed">
                Dicas, tutoriais e produtos que amo. 410 posts sobre skincare,
                maquiagem, cabelos e cuidados pessoais.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 border-b-2 border-border bg-background sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-base font-medium whitespace-nowrap py-3 px-4 rounded-md transition-all ${
                  activeCategory === category
                    ? "bg-accent/10 text-accent font-bold"
                    : "text-foreground hover:bg-accent/5 hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - Destaque Skincare */}
      <section className="py-20 bg-rose-50/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold">Destaque Skincare</h2>
              <Button variant="link" className="text-accent text-base hover:underline py-2 px-3">
                Ver todos
              </Button>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.2}>
                <article className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-white text-sm py-1.5 px-3">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-base text-foreground leading-relaxed">
                    {post.description}
                  </p>
                </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-12 capitalize">{activeCategory}</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <article className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent/90 text-white text-sm py-1.5 px-3">
                    {post.tag}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-base text-foreground line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <FadeIn>
              <div className="text-center py-16">
                <p className="text-lg text-foreground">
                  Nenhum post encontrado nesta categoria ainda.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beleza;

