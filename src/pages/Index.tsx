import Navbar from "@/components/Navbar";
import FullscreenHero from "@/components/FullscreenHero";
import AboutDrica from "@/components/AboutDrica";
import LatestPosts from "@/components/LatestPosts";
import BrowseThemes from "@/components/BrowseThemes";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

const Index = () => {
  return (
    <>
      <SEOHead canonicalPath="/" />
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <div className="min-h-screen">
        <Navbar />

      <FullscreenHero />

      <AboutDrica />

      <LatestPosts />
      <BrowseThemes />
      <Newsletter />
      <Footer />
      </div>
    </>
  );
};

export default Index;
