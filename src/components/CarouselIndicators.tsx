import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselIndicatorsProps {
  currentIndex?: number;
  totalItems: number;
  className?: string;
  variant?: "dots" | "hint";
}

const CarouselIndicators = ({
  currentIndex = 0,
  totalItems,
  className,
  variant = "hint"
}: CarouselIndicatorsProps) => {

  if (variant === "hint") {
    return (
      <div className={cn(
        "flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm",
        "animate-pulse md:hidden",
        className
      )}>
        <ChevronLeft className="h-4 w-4" />
        <span>Arraste para ver mais</span>
        <ChevronRight className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center gap-2 mt-4", className)}>
      {Array.from({ length: totalItems }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            index === currentIndex
              ? "w-8 bg-accent"
              : "w-2 bg-muted"
          )}
          aria-label={`Item ${index + 1} de ${totalItems}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
