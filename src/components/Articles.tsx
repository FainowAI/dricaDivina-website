import FadeIn from "@/components/FadeIn";
import ClickableLink from "@/components/ClickableLink";
import CarouselIndicators from "@/components/CarouselIndicators";
import { ArticleCardSkeletonList } from "@/components/skeletons";
import { useArticles } from "@/hooks/useArticles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Articles = () => {
  const { data: articles, isLoading, error } = useArticles(3);

  if (error) {
    return (
      <section className="py-11 md:py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Não foi possível carregar as matérias.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-11 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeIn>
          <div className="text-center mb-8 md:mb-9 lg:mb-12">
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="h-px bg-border w-32"></div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase">Matérias</h2>
              <div className="h-px bg-border w-32"></div>
            </div>
          </div>
        </FadeIn>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ArticleCardSkeletonList count={3} />
          </div>
        ) : articles && articles.length > 0 ? (
          <>
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {articles.map((article) => (
                  <CarouselItem key={article.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <article className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="h-32 md:h-40 overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 leading-tight text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                          {article.description}
                        </p>
                        <ClickableLink text="Saiba mais!" href={article.link || "#"} />
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            <CarouselIndicators totalItems={articles.length} />
          </>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhuma matéria encontrada.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
