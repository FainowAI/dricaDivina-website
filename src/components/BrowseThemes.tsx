import { useNavigate } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

interface ThemeCategory {
  name: string;
  count: number;
  image: string;
  link: string;
}

const BrowseThemes = () => {
  const navigate = useNavigate();

  // Mock de categorias populares com contadores
  // Posteriormente, esses números serão calculados dinamicamente
  const themes: ThemeCategory[] = [
    {
      name: "Maquiagem",
      count: 410,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
      link: "/beleza?subcategoria=maquiagem",
    },
    {
      name: "Skincare",
      count: 245,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
      link: "/beleza?subcategoria=skincare",
    },
    {
      name: "Looks",
      count: 449,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop",
      link: "/moda?subcategoria=looks",
    },
    {
      name: "Destinos",
      count: 186,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop",
      link: "/viagem?subcategoria=destinos",
    },
    {
      name: "Saúde",
      count: 11,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      link: "/saude",
    },
  ];

  const handleThemeClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
            Navegar
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {themes.map((theme, index) => (
            <FadeIn key={theme.name} delay={index * 0.1}>
              <article
                onClick={() => handleThemeClick(theme.link)}
                className="group cursor-pointer relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagem de fundo */}
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay escuro sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>

                {/* Texto sobreposto */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-2">
                    {theme.name}
                  </h3>
                  <p className="text-sm md:text-base text-white/90">
                    {theme.count} posts
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseThemes;
