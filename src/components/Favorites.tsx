import FadeIn from "@/components/FadeIn";
import ClickableLink from "@/components/ClickableLink";
import productShoes from "@/assets/product-shoes.jpg";
import productLipgloss from "@/assets/product-lipgloss.jpg";
import productNecklace from "@/assets/product-necklace.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const favorites = [
  {
    category: "MODA",
    title: "Tênis minimalista off-white",
    image: productShoes,
  },
  {
    category: "BELEZA",
    title: "Batom coral favorito do momento",
    image: productLipgloss,
  },
  {
    category: "ACESSÓRIOS",
    title: "Longo de seda com estampa clássica",
    image: productNecklace,
  },
];

const Favorites = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="h-px bg-border w-32"></div>
              <h2 className="text-4xl font-bold uppercase">Favoritos</h2>
              <div className="h-px bg-border w-32"></div>
            </div>
          </div>
        </FadeIn>

        <Carousel opts={{ align: "start", slidesToScroll: 1 }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {favorites.map((item, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-accent font-semibold mb-3 tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold mb-6 leading-tight min-h-[56px] text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <ClickableLink text="Comprar" href="#" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Favorites;
