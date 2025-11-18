import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productShoes from "@/assets/product-shoes.jpg";
import productLipgloss from "@/assets/product-lipgloss.jpg";
import productNecklace from "@/assets/product-necklace.jpg";

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
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16">Favoritos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((item, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
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
                <h3 className="text-xl font-bold mb-6 leading-tight min-h-[56px]">
                  {item.title}
                </h3>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:scale-105 active:scale-95 w-full h-12 rounded-full text-base font-semibold transition-all duration-200">
                  Compre aqui!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
