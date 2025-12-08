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
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const subcategories = ["Tudo", "Moda", "Viagem", "Lifestyle", "Dicas", "Autocuidado"];

const featuredPost = {
  title: "Rotina matinal que transforma o dia",
  category: "LIFESTYLE",
  image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=1200&q=80",
  link: "#",
  summary: "Pequenos hábitos que fazem toda diferença no bem-estar e produtividade diária. Descubra como começar o dia com mais energia e propósito.",
};

const posts = [
  {
    title: "3 looks de inverno-estação para usar já",
    category: "MODA",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    link: "#",
  },
  {
    title: "Guia de fim de semana em Trancoso",
    category: "VIAGEM",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    link: "#",
  },
  {
    title: "Como montar uma mala de viagem inteligente",
    category: "DICAS",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&q=80",
    link: "#",
  },
  {
    title: "Autocuidado: além da aparência física",
    category: "AUTOCUIDADO",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    link: "#",
  },
  {
    title: "Tendências de moda primavera/verão 2025",
    category: "MODA",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    link: "#",
  },
  {
    title: "Destinos acessíveis para viajar sozinha",
    category: "VIAGEM",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    link: "#",
  },
  {
    title: "Minimalismo no dia a dia: por onde começar",
    category: "LIFESTYLE",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    link: "#",
  },
  {
    title: "5 apps que mudaram minha rotina de autocuidado",
    category: "DICAS",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    link: "#",
  },
  {
    title: "Meditação para iniciantes: guia prático",
    category: "AUTOCUIDADO",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    link: "#",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSubcategory, setActiveSubcategory] = useState("Tudo");

  // Filtrar posts baseado na busca e subcategoria
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeSubcategory === "Tudo" || post.category === activeSubcategory.toUpperCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StoriesMenu />

      {/* Category Header */}
      <div className="pt-32 md:pt-24">
        <CategoryHeader categoryName="CONHECIMENTO" postCount={127} />
      </div>

      {/* Search Bar - Mantido como funcionalidade exclusiva */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar posts por título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-base rounded-full border-2 border-border focus:border-accent transition-colors"
            />
          </div>
        </div>
      </section>

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
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {filteredPosts.map((post, index) => (
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
            </>
          ) : (
            <FadeIn>
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  Nenhum post encontrado com "{searchTerm}".
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-accent hover:underline font-semibold"
                >
                  Limpar busca
                </button>
              </div>
            </FadeIn>
          )}
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

export default Blog;
