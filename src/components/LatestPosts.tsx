import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import PostCardLarge from "@/components/PostCardLarge";
import CarouselIndicators from "@/components/CarouselIndicators";
import { PostCardSkeletonGrid } from "@/components/skeletons";
import { useLatestPosts } from "@/hooks/usePosts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const LatestPosts = () => {
  const { data: posts, isLoading, error } = useLatestPosts(3);

  if (error) {
    return (
      <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Não foi possível carregar os posts.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <FadeIn>
          {/* Cabeçalho da seção */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Últimos Posts
            </h2>
            <a
              href="/blog"
              className="text-sm md:text-base text-primary hover:underline flex items-center gap-2 transition-all"
            >
              Ver mais
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {isLoading ? (
          <PostCardSkeletonGrid count={3} />
        ) : posts && posts.length > 0 ? (
          <>
            {/* Mobile: Carousel */}
            <div className="md:hidden">
              <Carousel opts={{ align: "start", loop: false }} className="w-full">
                <CarouselContent className="-ml-4">
                  {posts.map((post) => (
                    <CarouselItem key={post.id} className="pl-4">
                      <PostCardLarge
                        title={post.title}
                        category={post.categories?.name?.toUpperCase() || ""}
                        image={post.featured_image || "/placeholder.svg"}
                        link={`/artigo/${post.slug}`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <CarouselIndicators totalItems={posts.length} />
            </div>

            {/* Desktop: Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {posts.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.1}>
                  <PostCardLarge
                    title={post.title}
                    category={post.categories?.name?.toUpperCase() || ""}
                    image={post.featured_image || "/placeholder.svg"}
                    link={`/artigo/${post.slug}`}
                  />
                </FadeIn>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum post encontrado.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestPosts;
