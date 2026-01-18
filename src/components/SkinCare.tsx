import ClickableLink from "@/components/ClickableLink";
import CarouselIndicators from "@/components/CarouselIndicators";
import { ProductCardSkeletonGrid } from "@/components/skeletons";
import { useSkincareProducts } from "@/hooks/useProducts";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const SkinCare = () => {
  const { data: products, isLoading, error } = useSkincareProducts();

  if (error) {
    return (
      <section className="py-14 md:py-17 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Não foi possível carregar os produtos.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 md:py-17 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-9 lg:mb-12">
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="h-px bg-border w-32"></div>
            <h2 className="text-4xl font-bold uppercase">SkinCare</h2>
            <div className="h-px bg-border w-32"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meus cuidados para uma pele luminosa. Produtos que uso e recomendo diariamente.
          </p>
        </div>

        {isLoading ? (
          <ProductCardSkeletonGrid count={3} />
        ) : products && products.length > 0 ? (
          <>
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {products.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm h-full">
                      <div className="relative aspect-square">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.tag && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-background px-3 py-1 rounded-full text-xs font-semibold">
                              {product.tag}
                            </span>
                          </div>
                        )}
                        {product.discount && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                              {product.discount}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 md:p-5 lg:p-6">
                        <h3 className="font-bold mb-2 text-foreground">{product.name}</h3>
                        {product.price && (
                          <p className="text-2xl font-bold mb-3 md:mb-4 text-foreground">{product.price}</p>
                        )}
                        <ClickableLink text="Comprar" href={product.buy_link || "#"} />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            <CarouselIndicators totalItems={products.length} />
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum produto encontrado.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkinCare;
