import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import MasonryGrid from "@/components/MasonryGrid";
import { PostCardSkeletonGrid } from "@/components/skeletons";
import { useLatestPosts } from "@/hooks/usePosts";

const LatestPosts = () => {
  const { data: posts, isLoading, error } = useLatestPosts(9);

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
          <PostCardSkeletonGrid count={9} />
        ) : posts && posts.length > 0 ? (
          <MasonryGrid
            posts={posts}
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
            gutter="1.5rem"
            sizePattern={["large", "medium", "small", "medium", "large", "small", "medium", "small", "large"]}
          />
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
