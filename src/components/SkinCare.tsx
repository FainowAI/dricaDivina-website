import { Button } from "@/components/ui/button";
import vitaminSerum from "@/assets/skincare-vitamin.jpg";
import moisturizer from "@/assets/skincare-moisturizer.jpg";
import sunscreen from "@/assets/skincare-sunscreen.jpg";

const products = [
  {
    name: "Sérum de Vitamina C 15%",
    price: "R$ 129,90",
    discount: "-15%",
    image: vitaminSerum,
    tag: "Tratamento",
  },
  {
    name: "Creme Hidratante Ceramidas",
    price: "R$ 89,90",
    discount: "-10%",
    image: moisturizer,
    tag: "Hidratação",
  },
  {
    name: "Protetor Solar Toque Seco",
    price: "R$ 79,90",
    discount: "FPS 50",
    image: sunscreen,
    tag: "Proteção",
  },
];

const SkinCare = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold uppercase mb-4">Skin Care</h2>
          <p className="text-lg text-muted-foreground">
            Meus cuidados para uma pele luminosa. Produtos que uso e recomendo diariamente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background px-3 py-1 rounded-full text-xs font-semibold">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.discount}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold mb-4">{product.price}</p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full rounded-full">
                  Comprar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinCare;
