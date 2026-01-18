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

const subcategories = ["Tudo", "Brasil", "Internacional", "Destinos", "Dica Divina da Drica", "Roteiros"];

const featuredPost = {
  title: "Guia de fim de semana em Trancoso",
  category: "VIAGEM",
  image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
  link: "#",
  summary: "Descubra os melhores lugares para comer, se hospedar e aproveitar cada momento neste paraíso baiano. Roteiro completo de 3 dias.",
};

const posts = [
  {
    title: "Europa no inverno: 5 cidades encantadoras",
    category: "INTERNACIONAL",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    link: "#",
  },
  {
    title: "Chapada Diamantina: trilhas imperdíveis",
    category: "BRASIL",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    link: "#",
  },
  {
    title: "Como fazer as malas: guia definitivo",
    category: "DICAS",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&q=80",
    link: "#",
  },
  {
    title: "Praias paradisíacas do Nordeste brasileiro",
    category: "DESTINOS",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    link: "#",
  },
  {
    title: "Roteiro de 10 dias pela Itália",
    category: "ROTEIROS",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80",
    link: "#",
  },
  {
    title: "Seguro viagem: vale a pena?",
    category: "DICAS",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    link: "#",
  },
  {
    title: "Fernando de Noronha: o que você precisa saber",
    category: "BRASIL",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
    link: "#",
  },
  {
    title: "Tóquio: guia para primeira viagem",
    category: "INTERNACIONAL",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    link: "#",
  },
  {
    title: "Apps essenciais para viajantes",
    category: "DICAS",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    link: "#",
  },
];

const Viagem = () => {
  const [activeSubcategory, setActiveSubcategory] = useState("Tudo");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StoriesMenu />

      {/* Category Header */}
      <div className="pt-32 md:pt-24">
        <CategoryHeader categoryName="VIAGEM" postCount={327} />
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

export default Viagem;
