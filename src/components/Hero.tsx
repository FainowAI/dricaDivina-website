import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import postSkincare from "@/assets/post-skincare.jpg";
import FadeIn from "@/components/FadeIn";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-14 md:pt-17 lg:pt-20 min-h-[80vh] flex items-center bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <article
            onClick={() => navigate('/beleza')}
            className="group cursor-pointer relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={postSkincare}
                alt="Rotina minimalista de beleza"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <Badge className="bg-accent text-white mb-4 text-xs md:text-sm py-1.5 px-3 hover:bg-accent/90 transition-colors">
                  BELEZA
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Rotina minimalista: 4 passos que realmente funcionam
                </h2>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
