import { useState } from "react";
import Navbar from "@/components/Navbar";
import StoriesMenu from "@/components/StoriesMenu";
import Footer from "@/components/Footer";
import CategoryHeader from "@/components/CategoryHeader";
import SubcategoryBar from "@/components/SubcategoryBar";
import PostCardLarge from "@/components/PostCardLarge";
import FadeIn from "@/components/FadeIn";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";

const subcategories = ["Tudo", "Maquiagem", "Skincare", "Cabelos", "Dica Divina da Drica"];

const featuredPost = {
  title: "Rotina minimalista: 4 passos que realmente funcionam",
  category: "SKINCARE",
  image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&q=80",
  link: "#",
  summary: "Como combinar limpeza, tratamento e proteção para pele luminosa em pouco tempo. Produtos testados e aprovados para todos os tipos de pele.",
};

const posts = [
  {
    title: "Guia de séruns: vitamina C, niacinamida e quando usar",
    category: "SKINCARE",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    link: "#",
  },
  {
    title: "Base glow sem pesar: aplicação com técnicas de fotógrafa",
    category: "MAQUIAGEM",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    link: "#",
  },
  {
    title: "Ácidos sem medo: como introduzir passo a passo na rotina",
    category: "SKINCARE",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
    link: "#",
  },
  {
    title: "Day after perfeito: dicas para ondas naturais",
    category: "CABELOS",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    link: "#",
  },
  {
    title: "Necessaire de viagem: o que levo na mala de mão",
    category: "DICAS",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    link: "#",
  },
  {
    title: "Primers que realmente fazem diferença: textura e duração",
    category: "MAQUIAGEM",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    link: "#",
  },
  {
    title: "Protetor solar toque seco: os melhores para oleosas",
    category: "SKINCARE",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    link: "#",
  },
  {
    title: "Cronograma capilar simplificado: funciona?",
    category: "CABELOS",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80",
    link: "#",
  },
  {
    title: "Maquiagem durável para o verão: truques e fixadores",
    category: "MAQUIAGEM",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
    link: "#",
  },
];

const Beleza = () => {
  const [activeSubcategory, setActiveSubcategory] = useState("Tudo");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StoriesMenu />

      {/* Category Header */}
      <div className="pt-32 md:pt-24">
        <CategoryHeader categoryName="BELEZA" postCount={410} />
      </div>

      {/* Subcategory Bar */}
      <SubcategoryBar
        subcategories={subcategories}
        onSubcategoryChange={setActiveSubcategory}
      />

      {/* Ad Space */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="large" />
      </div>

      {/* Featured Post */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Image */}
              <div className="order-2 md:order-1">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="order-1 md:order-2 flex flex-col justify-center">
                <p className="text-xs md:text-sm uppercase font-semibold text-primary mb-3 md:mb-4 tracking-wider">
                  {featuredPost.category}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                  {featuredPost.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6 md:mb-8">
                  {featuredPost.summary}
                </p>
                <div className="w-20 border-b-2 border-primary mb-6 md:mb-8"></div>
                <a
                  href={featuredPost.link}
                  className="text-sm md:text-base text-primary hover:underline flex items-center gap-2 font-semibold"
                >
                  Ler mais →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4 flex justify-end">
        <AdPlaceholder variant="square" size="medium" />
      </div>

      {/* Posts Grid */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {posts.map((post, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <PostCardLarge
                  title={post.title}
                  category={post.category}
                  image={post.image}
                  link={post.link}
                />
              </FadeIn>
            ))}
          </div>

          {/* Load More Button */}
          <FadeIn delay={0.3}>
            <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-6 text-base font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                Carregar Mais
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>

      <Footer />
    </div>
  );
};

export default Beleza;
