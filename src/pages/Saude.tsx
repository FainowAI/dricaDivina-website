import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import StoriesMenu from "@/components/StoriesMenu";
import CategoryHeader from "@/components/CategoryHeader";
import SubcategoryBar from "@/components/SubcategoryBar";
import PostCardLarge from "@/components/PostCardLarge";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import postSkincare from "@/assets/post-skincare.jpg";
import postTravel from "@/assets/post-travel.jpg";
import postDecor from "@/assets/post-decor.jpg";

// Dados de posts de saúde
const healthPosts = [
  {
    id: 1,
    title: "5 dicas para manter a saúde mental em dia",
    category: "Bem-estar",
    subcategory: "Saúde",
    image: postSkincare,
    link: "/artigo/saude-mental",
    featured: true,
  },
  {
    id: 2,
    title: "Rotina de exercícios para iniciantes",
    category: "Fitness",
    subcategory: "Fitness",
    image: postTravel,
    link: "/artigo/exercicios-iniciantes",
  },
  {
    id: 3,
    title: "Alimentação balanceada: guia completo",
    category: "Nutrição",
    subcategory: "Nutrição",
    image: postDecor,
    link: "/artigo/alimentacao-balanceada",
  },
  {
    id: 4,
    title: "Yoga para iniciantes: primeiros passos",
    category: "Bem-estar",
    subcategory: "Fitness",
    image: postSkincare,
    link: "/artigo/yoga-iniciantes",
  },
  {
    id: 5,
    title: "Como melhorar a qualidade do sono",
    category: "Bem-estar",
    subcategory: "Saúde",
    image: postTravel,
    link: "/artigo/qualidade-sono",
  },
  {
    id: 6,
    title: "Meditação: benefícios e como começar",
    category: "Bem-estar",
    subcategory: "Saúde",
    image: postDecor,
    link: "/artigo/meditacao-beneficios",
  },
  {
    id: 7,
    title: "Treino funcional em casa: guia prático",
    category: "Fitness",
    subcategory: "Fitness",
    image: postSkincare,
    link: "/artigo/treino-funcional",
  },
  {
    id: 8,
    title: "Suplementos: o que você precisa saber",
    category: "Nutrição",
    subcategory: "Nutrição",
    image: postTravel,
    link: "/artigo/suplementos-guia",
  },
  {
    id: 9,
    title: "Hidratação: muito além da água",
    category: "Nutrição",
    subcategory: "Saúde",
    image: postDecor,
    link: "/artigo/hidratacao",
  },
  {
    id: 10,
    title: "Pilates: transformando corpo e mente",
    category: "Fitness",
    subcategory: "Fitness",
    image: postSkincare,
    link: "/artigo/pilates-beneficios",
  },
  {
    id: 11,
    title: "Skincare e saúde da pele: rotina completa",
    category: "Bem-estar",
    subcategory: "Saúde",
    image: postTravel,
    link: "/artigo/skincare-saude-pele",
  },
];

const Saude = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Tudo");

  const categories = ["Tudo", "Saúde", "Fitness", "Nutrição", "Bem-estar"];

  const filteredPosts = activeCategory === "Tudo"
    ? healthPosts
    : healthPosts.filter(post => post.subcategory === activeCategory);

  const featuredPost = healthPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StoriesMenu />

      {/* Hero Section - Category Title */}
      <section className="pt-32 xs:pt-36 md:pt-32 lg:pt-36 pb-8 xs:pb-12 md:pb-16 bg-secondary/30">
        <div className="container mx-auto">
          <FadeIn>
            <CategoryHeader categoryName="Saúde" postCount={healthPosts.length} />
            <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mt-4">
              Dicas de saúde, fitness, nutrição e bem-estar para uma vida equilibrada.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Subcategory Bar */}
      <SubcategoryBar
        subcategories={categories}
        onSubcategoryChange={setActiveCategory}
      />

      {/* Featured Post (Hero Style) */}
      {featuredPost && activeCategory === "Tudo" && (
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                {/* Image - Full width mobile, left on desktop */}
                <div className="relative w-full -mx-4 md:mx-0 order-1 md:order-1">
                  <div className="aspect-[4/3] md:rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Text - Below image mobile, right on desktop */}
                <div className="space-y-4 md:space-y-6 order-2 md:order-2">
                  <Badge className="bg-primary text-white text-[10px] md:text-xs uppercase px-3 py-1.5">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-[26px] xs:text-[32px] md:text-4xl lg:text-5xl font-bold leading-tight uppercase">
                    {featuredPost.title}
                  </h2>
                  <button
                    onClick={() => navigate(featuredPost.link)}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <span>Ler mais</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto">
          {/* Mobile: Vertical stack with 48px spacing */}
          <div className="flex flex-col gap-12 sm:hidden">
            {regularPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
                <PostCardLarge
                  title={post.title}
                  category={post.category}
                  image={post.image}
                  link={post.link}
                />
              </FadeIn>
            ))}
          </div>

          {/* Tablet/Desktop: Grid layout */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {regularPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.1}>
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
          <div className="mt-12 md:mt-16 lg:mt-20 text-center">
            <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm md:text-base uppercase tracking-wider">
              <span>Carregar Mais</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Saude;
