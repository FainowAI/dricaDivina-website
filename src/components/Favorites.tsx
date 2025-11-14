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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold uppercase mb-12">Favoritos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((item, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-accent font-semibold mb-2 uppercase tracking-wide">
                  {item.category}
                </p>
                <h3 className="text-lg font-bold mb-4 leading-tight">
                  {item.title}
                </h3>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full rounded-full">
                  Compre aqui!
                  <ArrowRight className="ml-2 h-4 w-4" />
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
