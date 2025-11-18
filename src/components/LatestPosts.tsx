import { ArrowRight } from "lucide-react";
import postDecor from "@/assets/post-decor.jpg";
import postSkincare from "@/assets/post-skincare.jpg";
import postTravel from "@/assets/post-travel.jpg";

const posts = [
  {
    category: "MODA",
    title: "3 looks de inverno-estação para usar já",
    image: postDecor,
  },
  {
    category: "BELEZA",
    title: "Rotina de skincare rápida para pele luminosa",
    image: postSkincare,
  },
  {
    category: "VIAGEM",
    title: "Guia de fim de semana em Trancoso",
    image: postTravel,
  },
];

const LatestPosts = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">Últimos Posts</h2>
          <a href="#" className="text-base text-accent hover:text-accent/80 hover:underline flex items-center gap-1 py-2 px-3 transition-all">
            Ver mais <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-accent font-semibold mb-3 tracking-wide">
                  {post.category}
                </p>
                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <button className="text-accent font-semibold text-base flex items-center gap-1 group-hover:gap-3 transition-all hover:underline py-2">
                  Ler agora <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
