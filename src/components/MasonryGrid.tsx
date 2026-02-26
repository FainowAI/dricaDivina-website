import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import EnhancedPostCard, { PostCardSize } from "./EnhancedPostCard";
import FadeIn from "./FadeIn";

interface Post {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  featured_image?: string;
  created_at: string;
  reading_time?: number;
  categories?: {
    name: string;
  };
}

interface MasonryGridProps {
  posts: Post[];
  columnsCountBreakPoints?: { [key: number]: number };
  gutter?: string;
  sizePattern?: PostCardSize[];
}

const MasonryGrid = ({
  posts,
  columnsCountBreakPoints = { 350: 1, 768: 2, 1024: 3 },
  gutter = "1.5rem",
  sizePattern = ["medium", "large", "small", "medium", "small", "large"],
}: MasonryGridProps) => {
  // Assign sizes to posts in a pattern
  const postsWithSizes = posts.map((post, index) => ({
    ...post,
    size: sizePattern[index % sizePattern.length],
  }));

  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter={gutter}>
        {postsWithSizes.map((post, index) => (
          <FadeIn key={post.id} delay={index * 0.05}>
            <EnhancedPostCard
              title={post.title}
              category={post.categories?.name?.toUpperCase() || "BLOG"}
              image={post.featured_image || "/placeholder.svg"}
              link={`/artigo/${post.slug}`}
              date={post.created_at}
              readingTime={post.reading_time}
              summary={post.summary}
              size={post.size as PostCardSize}
            />
          </FadeIn>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGrid;
