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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-accent uppercase">Últimos Posts</h2>
          <a href="#" className="text-accent hover:underline flex items-center gap-1">
            Ver mais <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-accent font-semibold mb-2 uppercase tracking-wide">
                {post.category}
              </p>
              <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <button className="text-accent font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Ler agora <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
