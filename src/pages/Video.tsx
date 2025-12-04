import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHeader from "@/components/CategoryHeader";
import SubcategoryBar from "@/components/SubcategoryBar";
import VideoCard from "@/components/VideoCard";
import FadeIn from "@/components/FadeIn";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";

const subcategories = ["Tudo", "Tutoriais", "Vlog", "Reviews", "Bastidores"];

const featuredVideo = {
  title: "Vlog: Um dia comigo — dicas de looks e bastidores",
  thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
  link: "#",
  category: "VLOG",
  summary: "Acompanhe minha rotina do dia a dia, desde a escolha dos looks até os bastidores das gravações. Compartilho dicas e inspirações.",
};

const videos = [
  {
    title: "Tutorial: Maquiagem natural para o dia a dia",
    thumbnail: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
    link: "#",
  },
  {
    title: "Review: Testei os produtos mais virais do TikTok",
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    link: "#",
  },
  {
    title: "Vlog de viagem: Explorando Tóquio",
    thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    link: "#",
  },
  {
    title: "Tutorial: Penteados fáceis para cabelos longos",
    thumbnail: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    link: "#",
  },
  {
    title: "Bastidores: Como gravo meus vídeos",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    link: "#",
  },
  {
    title: "Review: Skincare coreano que vale a pena",
    thumbnail: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
    link: "#",
  },
  {
    title: "Tutorial: Maquiagem para festas e eventos",
    thumbnail: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
    link: "#",
  },
  {
    title: "Vlog: Preparação para evento especial",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    link: "#",
  },
  {
    title: "Review: Melhores bases do mercado",
    thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    link: "#",
  },
];

const Video = () => {
  const [activeSubcategory, setActiveSubcategory] = useState("Tudo");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Category Header */}
      <div className="pt-24">
        <CategoryHeader categoryName="VÍDEO" postCount={510} />
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

      {/* Featured Video */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Video Thumbnail */}
              <div className="order-2 md:order-1">
                <VideoCard
                  thumbnail={featuredVideo.thumbnail}
                  title={featuredVideo.title}
                  link={featuredVideo.link}
                />
              </div>

              {/* Text */}
              <div className="order-1 md:order-2 flex flex-col justify-center">
                <p className="text-xs md:text-sm uppercase font-semibold text-primary mb-3 md:mb-4 tracking-wider">
                  {featuredVideo.category}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                  {featuredVideo.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6 md:mb-8">
                  {featuredVideo.summary}
                </p>
                <div className="w-20 border-b-2 border-primary mb-6 md:mb-8"></div>
                <a
                  href={featuredVideo.link}
                  className="text-sm md:text-base text-primary hover:underline flex items-center gap-2 font-semibold"
                >
                  Assistir agora →
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

      {/* Videos Grid */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {videos.map((video, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <VideoCard
                  title={video.title}
                  thumbnail={video.thumbnail}
                  link={video.link}
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

export default Video;
