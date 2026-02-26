import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHeader from "@/components/CategoryHeader";
import PostCardLarge from "@/components/PostCardLarge";
import FadeIn from "@/components/FadeIn";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { HeroPostSkeleton, PostCardSkeletonGrid } from "@/components/skeletons";
import { usePosts, useFeaturedPost } from "@/hooks/usePosts";
import { useCategory } from "@/hooks/useCategories";

interface CategoryPageProps {
  categorySlug?: string;
  categoryDisplayName: string;
  showSearch?: boolean;
}

const PAGE_SIZE = 9;

const CategoryPage = ({ categorySlug, categoryDisplayName, showSearch = false }: CategoryPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [offset, setOffset] = useState(0);

  // Fetch category info
  const { data: category } = useCategory(categorySlug);

  // Fetch featured post
  const { data: featuredPost, isLoading: isLoadingFeatured } = useFeaturedPost(categorySlug);

  // Fetch posts with pagination
  const { data: postsData, isLoading: isLoadingPosts } = usePosts({
    categorySlug,
    limit: PAGE_SIZE,
    offset,
    search: searchTerm || undefined,
  });

  const posts = postsData?.posts || [];
  const totalCount = postsData?.totalCount || 0;
  const hasMore = postsData?.hasMore || false;

  const handleLoadMore = () => {
    setOffset(prev => prev + PAGE_SIZE);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setOffset(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Category Header */}
      <div className="pt-40 md:pt-44 lg:pt-56">
        <CategoryHeader
          categoryName={categoryDisplayName}
          postCount={category?.post_count || totalCount}
        />
      </div>

      {/* Search Bar - Optional */}
      {showSearch && (
        <section className="py-6 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar posts por título..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-full border-2 border-border focus:border-accent transition-colors"
              />
            </div>
          </div>
        </section>
      )}

      {/* Ad Space */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="large" />
      </div>

      {/* Featured Post */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-4">
          {isLoadingFeatured ? (
            <HeroPostSkeleton />
          ) : featuredPost ? (
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {/* Image */}
                <div className="order-2 md:order-1">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={featuredPost.featured_image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <p className="text-xs md:text-sm uppercase font-semibold text-primary mb-3 md:mb-4 tracking-wider">
                    {featuredPost.categories?.name?.toUpperCase() || categoryDisplayName}
                  </p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                    {featuredPost.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6 md:mb-8">
                    {featuredPost.summary}
                  </p>
                  <div className="w-20 border-b-2 border-primary mb-6 md:mb-8"></div>
                  <a
                    href={`/artigo/${featuredPost.slug}`}
                    className="text-sm md:text-base text-primary hover:underline flex items-center gap-2 font-semibold"
                  >
                    Ler mais →
                  </a>
                </div>
              </div>
            </FadeIn>
          ) : null}
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4 flex justify-end">
        <AdPlaceholder variant="square" size="medium" />
      </div>

      {/* Posts Grid */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          {isLoadingPosts && offset === 0 ? (
            <PostCardSkeletonGrid count={9} />
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {posts.map((post, index) => (
                  <FadeIn key={post.id} delay={index * 0.05}>
                    <PostCardLarge
                      title={post.title}
                      category={post.categories?.name?.toUpperCase() || ""}
                      image={post.featured_image || "/placeholder.svg"}
                      link={`/artigo/${post.slug}`}
                    />
                  </FadeIn>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <FadeIn delay={0.3}>
                  <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
                    <Button
                      variant="outline"
                      onClick={handleLoadMore}
                      disabled={isLoadingPosts}
                      className="border-2 border-primary text-primary px-8 py-6 text-base font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                    >
                      {isLoadingPosts ? "Carregando..." : "Carregar Mais"}
                    </Button>
                  </div>
                </FadeIn>
              )}
            </>
          ) : (
            <FadeIn>
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  {searchTerm
                    ? `Nenhum post encontrado com "${searchTerm}".`
                    : "Nenhum post encontrado nesta categoria."}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => handleSearchChange("")}
                    className="text-accent hover:underline font-semibold"
                  >
                    Limpar busca
                  </button>
                )}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="medium" />
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
