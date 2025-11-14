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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LatestPosts />
      <Favorites />
      <Articles />
      <SkinCare />
      <Podcast />
      <YouTube />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
