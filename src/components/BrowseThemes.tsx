import { useNavigate } from "react-router-dom";
import { Plane, Heart, BookOpen, Shirt, Sparkles, LucideIcon, Droplet, Scissors, Palette } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Skeleton } from "@/components/ui/skeleton";
import { useCategories } from "@/hooks/useCategories";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Mapeamento de nomes de ícones para componentes Lucide
const iconMap: Record<string, LucideIcon> = {
  'Plane': Plane,
  'Heart': Heart,
  'BookOpen': BookOpen,
  'Shirt': Shirt,
  'Sparkles': Sparkles,
  'Droplet': Droplet,
  'Scissors': Scissors,
  'Palette': Palette
};

// Mapeamento de imagens de fundo para cada categoria
const categoryImages: Record<string, string> = {
  'skincare': 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&q=80',
  'cabelo': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop&q=80',
  'maquiagem': 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&q=80',
  'saude': 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop&q=80'
};

const BrowseThemes = () => {
  const navigate = useNavigate();
  const { data: categories, isLoading, error } = useCategories();

  // Buscar contagem de posts por categoria
  const { data: postCounts } = useQuery({
    queryKey: ['category-post-counts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('category_id')
        .eq('is_published', true);

      if (error) throw error;

      // Contar posts por categoria
      const counts: Record<string, number> = {};
      data?.forEach(post => {
        if (post.category_id) {
          counts[post.category_id] = (counts[post.category_id] || 0) + 1;
        }
      });
      return counts;
    },
    enabled: !!categories
  });

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
                  className="group cursor-pointer relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-vibrant"
                >
                  {/* Verificar se icon é um nome de ícone ou URL */}
                  {category.icon && iconMap[category.icon] ? (
                    // Renderizar ícone Lucide React
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-vibrant/20 to-orange-soft transition-all duration-500 group-hover:from-orange-vibrant/30 group-hover:to-orange-medium/20">
                      {(() => {
                        const IconComponent = iconMap[category.icon];
                        return <IconComponent className="w-20 h-20 md:w-24 md:h-24 text-orange-vibrant group-hover:scale-110 transition-transform duration-500" />;
                      })()}
                    </div>
                  ) : (
                    // Renderizar imagem (URL válida ou fallback baseado no slug)
                    <img
                      src={category.icon || categoryImages[category.slug] || categoryImages['maquiagem']}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}

                  {/* Orange overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-vibrant/90 via-orange-medium/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Overlay escuro base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/20 transition-all duration-500"></div>

                  {/* Texto sobreposto */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-2 drop-shadow-lg">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/95 font-medium drop-shadow-md">
                      {postCounts?.[category.id] || 0} posts
                    </p>

                    {/* Arrow indicator on hover */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-6 h-6 text-white animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
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
