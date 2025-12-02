import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import Favorites from "@/components/Favorites";
import Articles from "@/components/Articles";
import SkinCare from "@/components/SkinCare";
import Podcast from "@/components/Podcast";
import YouTube from "@/components/YouTube";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
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
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
