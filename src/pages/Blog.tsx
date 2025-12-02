import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AdPlaceholder from "@/components/AdPlaceholder";
import postDecor from "@/assets/post-decor.jpg";
import postSkincare from "@/assets/post-skincare.jpg";
import postTravel from "@/assets/post-travel.jpg";
import articleCoffee from "@/assets/article-coffee.jpg";
import heroImage from "@/assets/hero-image.jpg";

const categories = ["Todos", "MODA", "VIAGEM", "LIFESTYLE", "DICAS", "AUTOCUIDADO"];

const blogPosts = [
  {
    id: 1,
    title: "3 looks de inverno-estação para usar já",
    description: "Descubra as tendências de moda para a estação mais fria do ano com peças versáteis e estilosas.",
    image: postDecor,
    category: "MODA",
    tags: ["moda", "inverno", "tendências"],
    date: "15 Nov 2024",
  },
  {
    id: 2,
    title: "Guia de fim de semana em Trancoso",
    description: "Roteiro completo para aproveitar o melhor da Bahia em apenas dois dias.",
    image: postTravel,
    category: "VIAGEM",
    tags: ["viagem", "trancoso", "bahia"],
    date: "12 Nov 2024",
  },
  {
    id: 3,
    title: "Rotina matinal que transforma o dia",
    description: "Pequenos hábitos que fazem toda diferença no bem-estar e produtividade diária.",
    image: articleCoffee,
    category: "LIFESTYLE",
    tags: ["lifestyle", "rotina", "bem-estar"],
    date: "10 Nov 2024",
  },
  {
    id: 4,
    title: "Como montar uma mala de viagem inteligente",
    description: "Dicas práticas para não esquecer nada e viajar com leveza e organização.",
    image: postTravel,
    category: "DICAS",
    tags: ["viagem", "organização", "dicas"],
    date: "8 Nov 2024",
  },
  {
    id: 5,
    title: "Autocuidado: além da aparência física",
    description: "A importância de cuidar da saúde mental e emocional com carinho e consistência.",
    image: heroImage,
    category: "AUTOCUIDADO",
    tags: ["autocuidado", "saúde mental", "bem-estar"],
    date: "5 Nov 2024",
  },
  {
    id: 6,
    title: "Tendências de moda primavera/verão 2025",
    description: "O que vem por aí nas passarelas e como adaptar para o seu guarda-roupa.",
    image: postDecor,
    category: "MODA",
    tags: ["moda", "tendências", "verão"],
    date: "3 Nov 2024",
  },
  {
    id: 7,
    title: "Destinos acessíveis para viajar sozinha",
    description: "Lugares seguros e encantadores para quem quer se aventurar em uma viagem solo.",
    image: postTravel,
    category: "VIAGEM",
    tags: ["viagem", "solo travel", "destinos"],
    date: "1 Nov 2024",
  },
  {
    id: 8,
    title: "Minimalismo no dia a dia: por onde começar",
    description: "Como simplificar sua vida e focar no que realmente importa.",
    image: articleCoffee,
    category: "LIFESTYLE",
    tags: ["minimalismo", "lifestyle", "organização"],
    date: "28 Out 2024",
  },
  {
    id: 9,
    title: "5 apps que mudaram minha rotina de autocuidado",
    description: "Ferramentas digitais que ajudam a manter hábitos saudáveis e consistentes.",
    image: postSkincare,
    category: "DICAS",
    tags: ["tecnologia", "apps", "autocuidado"],
    date: "25 Out 2024",
  },
  {
    id: 10,
    title: "Meditação para iniciantes: guia prático",
    description: "Como começar a meditar sem complicação e colher os benefícios desde o primeiro dia.",
    image: heroImage,
    category: "AUTOCUIDADO",
    tags: ["meditação", "mindfulness", "bem-estar"],
    date: "22 Out 2024",
  },
  {
    id: 11,
    title: "Peças-chave para um guarda-roupa versátil",
    description: "Investimentos certeiros que combinam com tudo e nunca saem de moda.",
    image: postDecor,
    category: "MODA",
    tags: ["moda", "guarda-roupa", "básicos"],
    date: "20 Out 2024",
  },
  {
    id: 12,
    title: "Roteiro de 7 dias pela Europa",
    description: "Como aproveitar ao máximo uma semana viajando por cidades icônicas.",
    image: postTravel,
    category: "VIAGEM",
    tags: ["europa", "roteiro", "viagem"],
    date: "18 Out 2024",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      activeCategory === "Todos" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Conhecimento</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-foreground leading-relaxed mb-8">
                Artigos sobre moda, viagem, lifestyle, dicas e autocuidado.
                Inspiração e informação para transformar seu dia a dia.
              </p>
            </FadeIn>

            {/* Search Bar */}
            <FadeIn delay={0.3}>
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar posts por título, descrição ou tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-6 text-base rounded-full border-2 border-border focus:border-accent transition-colors"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 border-b-2 border-border bg-background sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium whitespace-nowrap py-2.5 px-5 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-accent text-white shadow-md"
                    : "bg-secondary/50 text-foreground hover:bg-secondary hover:shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4">
        <AdPlaceholder variant="horizontal" size="large" />
      </div>

      {/* Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <FadeIn>
            <div className="mb-8 text-center">
              <p className="text-lg text-foreground">
                {filteredPosts.length === 0
                  ? "Nenhum post encontrado"
                  : `${filteredPosts.length} ${
                      filteredPosts.length === 1 ? "post encontrado" : "posts encontrados"
                    }`}
              </p>
            </div>
          </FadeIn>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPosts.map((post, index) => (
                <FadeIn key={post.id} delay={index * 0.05}>
                  <article className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-3 left-3 bg-accent/90 text-white text-xs py-1.5 px-3">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                      <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-accent transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground line-clamp-2 leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  Tente buscar com outras palavras ou ajuste os filtros.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("Todos");
                  }}
                  className="text-accent hover:underline font-semibold"
                >
                  Limpar filtros
                </button>
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

export default Blog;

