import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHeader from "@/components/CategoryHeader";
import SubcategoryBar from "@/components/SubcategoryBar";
import PostCardLarge from "@/components/PostCardLarge";
import FadeIn from "@/components/FadeIn";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";

const subcategories = ["Tudo", "Acessórios", "Looks", "Sapatos", "Bolsas", "Tendências"];

const featuredPost = {
  title: "3 looks de inverno-estação para usar já",
  category: "MODA",
  image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
  link: "#",
  summary: "Descubra as peças-chave para montar looks versáteis e estilosos nesta estação. Inspirações para diferentes ocasiões e estilos.",
};

const posts = [
  {
    title: "Guia completo de sapatos: como escolher o modelo ideal",
    category: "SAPATOS",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
    link: "#",
  },
  {
    title: "Bolsas que nunca saem de moda: investimento certo",
    category: "BOLSAS",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    link: "#",
  },
  {
    title: "Tendências 2025: o que vai dominar as passarelas",
    category: "TENDÊNCIAS",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    link: "#",
  },
  {
    title: "Acessórios que transformam qualquer look básico",
    category: "ACESSÓRIOS",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    link: "#",
  },
  {
    title: "Como criar um guarda-roupa cápsula funcional",
    category: "LOOKS",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
    link: "#",
  },
  {
    title: "Street style: inspirações direto das ruas de Paris",
    category: "LOOKS",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    link: "#",
  },
  {
    title: "Jeans: o guia definitivo para encontrar o corte perfeito",
    category: "LOOKS",
    image: "https://images.unsplash.com/photo-1542272454315-7f6d5b926c83?w=800&q=80",
    link: "#",
  },
  {
    title: "Alfaiataria feminina: poder e elegância no dia a dia",
    category: "LOOKS",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
    link: "#",
  },
  {
    title: "Metais e joias: como combinar sem errar",
    category: "ACESSÓRIOS",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    link: "#",
  },
];

const Moda = () => {
  const [activeSubcategory, setActiveSubcategory] = useState("Tudo");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Category Header */}
      <div className="pt-24">
        <CategoryHeader categoryName="MODA" postCount={968} />
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

export default Moda;
