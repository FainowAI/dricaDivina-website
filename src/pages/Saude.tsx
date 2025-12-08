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

const subcategories = ["Tudo", "Saúde", "Fitness", "Nutrição", "Bem-estar"];

const featuredPost = {
  title: "5 dicas para manter a saúde mental em dia",
  category: "BEM-ESTAR",
  image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  link: "#",
  summary: "Dicas de saúde, fitness, nutrição e bem-estar para uma vida equilibrada. Pequenos hábitos que transformam sua rotina diária.",
};

const posts = [
  {
    title: "Rotina de exercícios para iniciantes",
    category: "FITNESS",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    link: "#",
  },
  {
    title: "Alimentação balanceada: guia completo",
    category: "NUTRIÇÃO",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    link: "#",
  },
  {
    title: "Yoga para iniciantes: primeiros passos",
    category: "FITNESS",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    link: "#",
  },
  {
    title: "Como melhorar a qualidade do sono",
    category: "SAÚDE",
    image: "https://images.unsplash.com/photo-1541480551145-2370a440d585?w=800&q=80",
    link: "#",
  },
  {
    title: "Meditação: benefícios e como começar",
    category: "BEM-ESTAR",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    link: "#",
  },
  {
    title: "Treino funcional em casa: guia prático",
    category: "FITNESS",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    link: "#",
  },
  {
    title: "Suplementos: o que você precisa saber",
    category: "NUTRIÇÃO",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
    link: "#",
  },
  {
    title: "Hidratação: muito além da água",
    category: "SAÚDE",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    link: "#",
  },
  {
    title: "Pilates: transformando corpo e mente",
    category: "FITNESS",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    link: "#",
  },
];

const Saude = () => {
  const [activeSubcategory, setActiveSubcategory] = useState("Tudo");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StoriesMenu />

      {/* Category Header */}
      <div className="pt-32 md:pt-24">
        <CategoryHeader categoryName="SAÚDE" postCount={89} />
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

export default Saude;
