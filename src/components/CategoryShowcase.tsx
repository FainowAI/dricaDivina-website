import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

interface Post {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  featured_image?: string;
  created_at: string;
}

interface CategoryShowcaseProps {
  categoryName: string;
  categorySlug: string;
  posts: Post[];
  backgroundColor?: string;
}

const CategoryShowcase = ({
  categoryName,
  categorySlug,
  posts,
  backgroundColor = "bg-background",
}: CategoryShowcaseProps) => {
  const navigate = useNavigate();

  if (!posts || posts.length === 0) return null;

  // Take first 3 posts for zigzag layout
  const showcasePosts = posts.slice(0, 3);

  return (
    <section className={`py-12 md:py-20 lg:py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-vibrant">
              {categoryName}
            </h2>
            <button
              onClick={() => navigate(`/${categorySlug}`)}
              className="text-sm md:text-base text-orange-vibrant hover:text-orange-dark flex items-center gap-2 transition-colors group"
            >
              Ver mais
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

        {/* Zigzag Layout */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {showcasePosts.map((post, index) => {
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={post.id} delay={index * 0.15}>
                <article
                  onClick={() => navigate(`/artigo/${post.slug}`)}
                  className={`group cursor-pointer grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center ${
                    isEven ? "" : "md:grid-flow-dense"
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] ${
                      isEven ? "" : "md:col-start-2"
                    }`}
                  >
                    <img
                      src={post.featured_image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Orange overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-vibrant/40 via-orange-medium/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Category badge with glassmorphism */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-2 text-xs md:text-sm uppercase font-semibold tracking-wider bg-orange-vibrant/90 backdrop-blur-md text-white rounded-full shadow-lg border border-white/20">
                        {categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-3 md:space-y-4 ${isEven ? "" : "md:col-start-1"}`}>
                    {/* Date */}
                    <p className="text-sm md:text-base text-muted-foreground">
                      {new Date(post.created_at).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground group-hover:text-orange-vibrant transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    {post.summary && (
                      <p className="text-base md:text-lg text-muted-foreground line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    )}

                    {/* Read more link */}
                    <div className="pt-2">
                      <span className="text-orange-vibrant font-semibold text-base md:text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Ler mais
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                      </span>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
