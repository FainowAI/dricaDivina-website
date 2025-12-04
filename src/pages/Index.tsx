import Navbar from "@/components/Navbar";
import HeroPost from "@/components/HeroPost";
import LatestPosts from "@/components/LatestPosts";
import Favorites from "@/components/Favorites";
import Articles from "@/components/Articles";
import SkinCare from "@/components/SkinCare";
import Podcast from "@/components/Podcast";
import YouTube from "@/components/YouTube";
import BrowseThemes from "@/components/BrowseThemes";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroPost
        category="BELEZA"
        title="Rotina de skincare: produtos essenciais para uma pele radiante"
        summary="Descubra os segredos de uma rotina de cuidados com a pele eficaz e transformadora. Produtos testados e aprovados para todos os tipos de pele."
        image="https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1200&q=80"
        link="/beleza"
      />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="large" />
      </div>
      <LatestPosts />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <Favorites />
      <div className="container mx-auto px-4 flex justify-end">
        <AdPlaceholder variant="square" size="medium" />
      </div>
      <Articles />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <SkinCare />
      <Podcast />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="small" />
      </div>
      <YouTube />
      <BrowseThemes />
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
