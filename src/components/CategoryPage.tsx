import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHeader from "@/components/CategoryHeader";
import PostCardLarge from "@/components/PostCardLarge";
import FadeIn from "@/components/FadeIn";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { PostCardSkeletonGrid } from "@/components/skeletons";
import { usePosts } from "@/hooks/usePosts";
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


      {/* Posts Grid */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          {isLoadingPosts && offset === 0 ? (
            <PostCardSkeletonGrid count={9} />
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
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
                      className="border-2 border-primary text-primary px-6 py-4 md:px-8 md:py-6 text-base font-semibold hover:bg-primary hover:text-white transition-all duration-200"
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


      <Footer />
    </div>
  );
};

export default CategoryPage;
