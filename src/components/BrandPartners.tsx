import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { AnimatedScribble } from "@/components/AnimatedScribble";
import { supabase } from "@/integrations/supabase/client";

interface BrandPartner {
  id: string;
  name: string;
  logo_url: string | null;
  website_url: string | null;
  category: string | null;
  display_order: number | null;
}

const BrandPartners = () => {
  const [brands, setBrands] = useState<BrandPartner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data, error } = await supabase
          .from("brand_partners" as any)
          .select("id, name, logo_url, website_url, category, display_order")
          .eq("is_active", true)
          .order("display_order", { ascending: true });

        if (error) throw error;
        setBrands((data as BrandPartner[]) || []);
      } catch (err) {
        console.error("Error fetching brand partners:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  // Don't render section if no brands and not loading
  if (!loading && brands.length === 0) return null;

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <AnimatedScribble pathName="newsletter" className="opacity-5" strokeColor="hsl(14, 100%, 60%)" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-accent font-bold tracking-wider uppercase text-xs md:text-sm">
                Parcerias
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Marcas que{" "}
              <span className="text-accent italic relative inline-block">
                confiam
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M2 6 Q50 2, 98 6"
                    stroke="hsl(14, 100%, 60%)"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </h2>
            <p className="text-foreground/60 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Empresas que escolheram a Drica Divina para conectar suas marcas
              com a maior comunidade de beleza madura do Brasil.
            </p>
          </div>
        </FadeIn>

        {loading ? (
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-28 md:h-36 rounded-2xl bg-card/50 border border-border/30 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {brands.map((brand, index) => (
              <FadeIn key={brand.id} delay={index * 0.05}>
                <motion.div
                  className="group relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {brand.website_url ? (
                    <a
                      href={brand.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center h-28 md:h-36 p-4 md:p-6"
                    >
                      <BrandContent brand={brand} />
                      <ExternalLink className="absolute top-3 right-3 w-3.5 h-3.5 text-foreground/20 group-hover:text-accent transition-colors duration-300" />
                    </a>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-28 md:h-36 p-4 md:p-6">
                      <BrandContent brand={brand} />
                    </div>
                  )}

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const BrandContent = ({ brand }: { brand: BrandPartner }) => {
  if (brand.logo_url) {
    return (
      <img
        src={brand.logo_url}
        alt={brand.name}
        className="max-h-12 md:max-h-16 max-w-[140px] md:max-w-[180px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
    );
  }

  return (
    <span className="text-base md:text-lg font-semibold text-foreground/70 group-hover:text-accent transition-colors duration-300 text-center">
      {brand.name}
    </span>
  );
};

export default BrandPartners;
