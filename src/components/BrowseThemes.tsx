import { useNavigate } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import { Skeleton } from "@/components/ui/skeleton";
import { useCategories } from "@/hooks/useCategories";

const BrowseThemes = () => {
  const navigate = useNavigate();
  const { data: categories, isLoading, error } = useCategories();

  const handleThemeClick = (link: string) => {
    navigate(link);
  };

  if (error) {
    return (
      <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Não foi possível carregar as categorias.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
            Navegar
          </h2>
        </FadeIn>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-lg" />
            ))}
          </div>
        ) : categories && categories.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <FadeIn key={category.id} delay={index * 0.1}>
                <article
                  onClick={() => handleThemeClick(`/${category.slug}`)}
                  className="group cursor-pointer relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Imagem de fundo */}
                  <img
                    src={category.icon || `https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop`}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay escuro sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>

                  {/* Texto sobreposto */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/90">
                      {category.post_count || 0} posts
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhuma categoria encontrada.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseThemes;
