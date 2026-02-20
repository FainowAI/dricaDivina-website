import { useParams, useNavigate } from "react-router-dom";
import { Share2, Facebook, Twitter, Link2, Pin } from "lucide-react";
import DOMPurify from "dompurify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PostCardLarge from "@/components/PostCardLarge";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { usePost, useRelatedPosts } from "@/hooks/usePosts";
import { PostCardSkeletonGrid } from "@/components/skeletons";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: post, isLoading, error } = usePost(slug || "");
  const { data: relatedPosts, isLoading: isLoadingRelated } = useRelatedPosts(
    post?.id || "",
    post?.category_id || "",
    3
  );

  const handleShare = (platform: string) => {
    if (platform === "copy") {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link foi copiado para a área de transferência.",
      });
    } else {
      toast({
        title: "Compartilhar",
        description: `Abrindo ${platform}...`,
      });
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Detect if content is HTML
  const isHTMLContent = (content: string): boolean => {
    // Check if content contains HTML tags
    return /<\/?[a-z][\s\S]*>/i.test(content);
  };

  // Sanitize and render HTML content safely with DOMPurify
  const renderHTMLContent = (content: string) => {
    // DOMPurify sanitizes the HTML to prevent XSS attacks
    const cleanHTML = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li', 'blockquote', 'a', 'img', 'figure', 'figcaption',
        'div', 'span', 'table', 'thead', 'tbody', 'tr', 'th', 'td'
      ],
      ALLOWED_ATTR: [
        'href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel'
      ],
      ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    });

    return (
      <FadeIn>
        <div
          className="article-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        />
      </FadeIn>
    );
  };

  // Render content (plain text with markdown-like formatting)
  const renderPlainContent = (content: string) => {
    // Split by double newlines to create paragraphs
    const paragraphs = content.split(/\n\n+/);

    return paragraphs.map((paragraph, index) => {
      // Check if it's a heading (starts with ##)
      if (paragraph.startsWith("## ")) {
        return (
          <FadeIn key={index} delay={0.1 * index}>
            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 leading-tight">
              {paragraph.replace("## ", "")}
            </h2>
          </FadeIn>
        );
      }

      // Regular paragraph
      return (
        <FadeIn key={index} delay={0.1 * index}>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
            {paragraph}
          </p>
        </FadeIn>
      );
    });
  };

  // Main render function that decides which renderer to use
  const renderContent = (content: string) => {
    if (isHTMLContent(content)) {
      return renderHTMLContent(content);
    }
    return renderPlainContent(content);
  };

  // Error state - Post not found
  if (error || (!isLoading && !post)) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O post que você está procurando não existe ou foi removido.
          </p>
          <Button onClick={() => navigate("/blog")}>Voltar para o Blog</Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <article className="pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-3 mb-6">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-16 w-full mb-4" />
              <Skeleton className="h-16 w-3/4 mb-8" />
              <div className="flex gap-3 mb-10">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
              </div>
              <Skeleton className="aspect-video w-full rounded-lg mb-12" />
              <div className="max-w-prose mx-auto space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Article Header */}
      <article className="pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              {/* Categories and Date */}
              <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
                {post.categories && (
                  <Badge className="bg-primary text-white text-xs px-3 py-1">
                    {post.categories.name?.toUpperCase()}
                  </Badge>
                )}
                {post.tags &&
                  post.tags.slice(0, 2).map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs px-3 py-1"
                    >
                      {tag.toUpperCase()}
                    </Badge>
                  ))}
                <span className="text-sm text-foreground/60">
                  {post.published_at
                    ? formatDate(post.published_at)
                    : formatDate(post.created_at)}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 md:mb-10">
                {post.title}
              </h1>

              {/* Share Buttons */}
              <div className="flex gap-3 mb-10 md:mb-12">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("Pinterest")}
                  className="flex items-center gap-2"
                >
                  <Pin className="h-4 w-4" />
                  Pin
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("Facebook")}
                  className="flex items-center gap-2"
                >
                  <Facebook className="h-4 w-4" />
                  Compartilhar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("Twitter")}
                  className="flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  Tweet
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("copy")}
                  className="flex items-center gap-2"
                >
                  <Link2 className="h-4 w-4" />
                  Copiar
                </Button>
              </div>
            </FadeIn>

            {/* Hero Image */}
            {post.featured_image && (
              <FadeIn delay={0.2}>
                <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden mb-12 md:mb-16 group">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleShare("Pinterest")}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Pin this image"
                  >
                    <Pin className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </FadeIn>
            )}

            {/* Summary */}
            {post.summary && (
              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground/80 font-medium max-w-prose mx-auto">
                  {post.summary}
                </p>
              </FadeIn>
            )}

            {/* Article Content */}
            <div className="max-w-prose mx-auto">
              {post.content && renderContent(post.content)}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 md:py-16 lg:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">
              Você também pode gostar
            </h2>
          </FadeIn>

          {isLoadingRelated ? (
            <div className="max-w-6xl mx-auto">
              <PostCardSkeletonGrid count={3} />
            </div>
          ) : relatedPosts && relatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <FadeIn key={relatedPost.id} delay={index * 0.1}>
                  <PostCardLarge
                    title={relatedPost.title}
                    category={relatedPost.categories?.name?.toUpperCase() || ""}
                    image={relatedPost.featured_image || "/placeholder.svg"}
                    link={`/artigo/${relatedPost.slug}`}
                  />
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Nenhum post relacionado encontrado.
              </p>
            </div>
          )}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ArticlePage;
