import FadeIn from "@/components/FadeIn";
import ClickableLink from "@/components/ClickableLink";
import CarouselIndicators from "@/components/CarouselIndicators";
import { ProductCardSkeletonGrid } from "@/components/skeletons";
import { useFavoriteProducts } from "@/hooks/useProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Favorites = () => {
  const { data: favorites, isLoading, error } = useFavoriteProducts();

  if (error) {
    return (
      <section className="py-14 md:py-17 lg:py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Não foi possível carregar os favoritos.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 md:py-17 lg:py-20 bg-card">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-8 md:mb-9 lg:mb-12">
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="h-px bg-border w-32"></div>
              <h2 className="text-4xl font-bold uppercase">Favoritos</h2>
              <div className="h-px bg-border w-32"></div>
            </div>
          </div>
        </FadeIn>

        {isLoading ? (
          <ProductCardSkeletonGrid count={3} />
        ) : favorites && favorites.length > 0 ? (
          <>
            <Carousel opts={{ align: "start", slidesToScroll: 1 }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {favorites.map((item) => (
                  <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 md:p-5 lg:p-6">
                        {item.tag && (
                          <p className="text-sm text-accent font-semibold mb-1.5 md:mb-2 tracking-wide">
                            {item.tag}
                          </p>
                        )}
                        <h3 className="text-xl font-bold mb-4 md:mb-6 leading-tight min-h-[56px] text-foreground group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        <ClickableLink text="Comprar" href={item.buy_link || "#"} />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            <CarouselIndicators totalItems={favorites.length} />
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum favorito encontrado.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
