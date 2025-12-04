import { Share2, Facebook, Twitter, Link2, Pin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import PostCardLarge from "@/components/PostCardLarge";
import FadeIn from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock article data
const article = {
  title: "Rotina de skincare: produtos essenciais para uma pele radiante",
  date: "15 de Janeiro, 2025",
  categories: ["BELEZA", "SKINCARE"],
  heroImage: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1600&q=80",
  content: [
    {
      type: "paragraph",
      text: "Uma rotina de skincare eficaz não precisa ser complicada. Com os produtos certos e consistência, você pode alcançar uma pele saudável e radiante. Vou compartilhar com você os passos essenciais que transformaram minha pele.",
    },
    {
      type: "heading",
      text: "Limpeza: O primeiro passo essencial",
    },
    {
      type: "paragraph",
      text: "A limpeza é a base de qualquer rotina de skincare. Ela remove impurezas, excesso de oleosidade e resíduos de maquiagem, preparando a pele para absorver melhor os produtos seguintes. Use um limpador suave pela manhã e um mais profundo à noite.",
    },
    {
      type: "paragraph",
      text: "Minha dica é escolher produtos que respeitem o pH natural da pele e não causem ressecamento. Prefira texturas em gel para peles oleosas e cremosas para peles secas.",
    },
    {
      type: "heading",
      text: "Hidratação: nunca pule este passo",
    },
    {
      type: "paragraph",
      text: "Independente do seu tipo de pele, a hidratação é fundamental. Até peles oleosas precisam de hidratação adequada. Um bom hidratante mantém a barreira cutânea saudável e previne o envelhecimento precoce.",
    },
    {
      type: "paragraph",
      text: "Escolha fórmulas leves para o dia e mais nutritivas para a noite. E lembre-se: o protetor solar é parte essencial da hidratação diurna!",
    },
  ],
};

const relatedPosts = [
  {
    title: "Guia de séruns: vitamina C, niacinamida e quando usar",
    category: "SKINCARE",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
    link: "#",
  },
  {
    title: "Protetor solar: como escolher o ideal para seu tipo de pele",
    category: "SKINCARE",
    image: "https://images.unsplash.com/photo-1556228852-80a9e1e18846?w=800&q=80",
    link: "#",
  },
  {
    title: "Rotina noturna: produtos que fazem diferença",
    category: "BELEZA",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
    link: "#",
  },
];

const ArticlePage = () => {
  const { toast } = useToast();

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
                {article.categories.map((category, index) => (
                  <Badge
                    key={index}
                    className="bg-primary text-white text-xs px-3 py-1"
                  >
                    {category}
                  </Badge>
                ))}
                <span className="text-sm text-foreground/60">{article.date}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 md:mb-10">
                {article.title}
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
            <FadeIn delay={0.2}>
              <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden mb-12 md:mb-16 group">
                <img
                  src={article.heroImage}
                  alt={article.title}
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

            {/* Article Content */}
            <div className="max-w-prose mx-auto">
              {article.content.map((block, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  {block.type === "paragraph" && (
                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
                      {block.text}
                    </p>
                  )}
                  {block.type === "heading" && (
                    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 leading-tight">
                      {block.text}
                    </h2>
                  )}
                </FadeIn>
              ))}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <PostCardLarge
                  title={post.title}
                  category={post.category}
                  image={post.image}
                  link={post.link}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ArticlePage;
