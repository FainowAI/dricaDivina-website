import { useNavigate } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export type PostCardSize = "small" | "medium" | "large" | "featured";

interface EnhancedPostCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  date?: string;
  readingTime?: number;
  summary?: string;
  size?: PostCardSize;
  className?: string;
}

const EnhancedPostCard = ({
  title,
  category,
  image,
  link,
  date,
  readingTime = 5,
  summary,
  size = "medium",
  className,
}: EnhancedPostCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  // Format date
  const formattedDate = date
    ? new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  // Size variants
  const sizeConfig = {
    small: {
      container: "h-[280px] md:h-[320px]",
      image: "h-[140px] md:h-[160px]",
      padding: "p-3 md:p-4",
      title: "text-base md:text-lg lg:text-xl",
      category: "text-[10px] md:text-xs",
      meta: "text-[10px]",
      showSummary: false,
      showDate: false,
    },
    medium: {
      container: "h-[380px] md:h-[420px]",
      image: "h-[200px] md:h-[240px]",
      padding: "p-4 md:p-5",
      title: "text-lg md:text-xl lg:text-2xl",
      category: "text-xs md:text-sm",
      meta: "text-xs",
      showSummary: false,
      showDate: true,
    },
    large: {
      container: "h-[480px] md:h-[540px]",
      image: "h-[280px] md:h-[320px]",
      padding: "p-5 md:p-6 lg:p-8",
      title: "text-xl md:text-2xl lg:text-3xl",
      category: "text-xs md:text-sm",
      meta: "text-xs md:text-sm",
      showSummary: true,
      showDate: true,
    },
    featured: {
      container: "h-[580px] md:h-[640px] lg:h-[720px]",
      image: "h-[340px] md:h-[400px] lg:h-[480px]",
      padding: "p-6 md:p-8 lg:p-10",
      title: "text-2xl md:text-3xl lg:text-4xl",
      category: "text-sm md:text-base",
      meta: "text-sm md:text-base",
      showSummary: true,
      showDate: true,
    },
  };

  const config = sizeConfig[size];

  return (
    <article
      onClick={handleClick}
      className={cn(
        "group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500",
        config.container,
        "relative border border-border hover:border-orange-vibrant/40",
        className
      )}
    >
      {/* Image Container */}
      <div className={cn("overflow-hidden relative", config.image)}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Orange overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-vibrant/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Category badge with glassmorphism */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4">
          <span
            className={cn(
              "inline-block px-3 py-1 md:px-4 md:py-1.5 uppercase font-semibold tracking-wider",
              "bg-orange-vibrant/90 backdrop-blur-md text-white rounded-full shadow-lg border border-white/20",
              "group-hover:bg-orange-dark/90 group-hover:backdrop-blur-xl transition-all duration-300",
              config.category
            )}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Orange accent line */}
      <div className="h-1 bg-gradient-to-r from-orange-vibrant via-orange-medium to-orange-vibrant transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      {/* Content */}
      <div className={cn("space-y-2 md:space-y-3 flex flex-col", config.padding)}>
        {/* Metadata */}
        {(config.showDate || readingTime) && (
          <div className={cn("flex items-center gap-3 md:gap-4 text-muted-foreground", config.meta)}>
            {config.showDate && formattedDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                <span>{formattedDate}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              <span>{readingTime} min</span>
            </div>
          </div>
        )}

        {/* Title */}
        <h3
          className={cn(
            "font-bold leading-tight text-foreground line-clamp-3",
            "group-hover:text-orange-vibrant transition-colors duration-300",
            config.title
          )}
        >
          {title}
        </h3>

        {/* Summary - only for large and featured */}
        {config.showSummary && summary && (
          <p className="text-sm md:text-base text-muted-foreground line-clamp-2 leading-relaxed">
            {summary}
          </p>
        )}

        {/* Read more link - visible on hover */}
        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-orange-vibrant font-semibold text-sm md:text-base inline-flex items-center gap-1">
            Ler mais
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
  );
};

export default EnhancedPostCard;
