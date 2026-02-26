import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  variant?: "horizontal" | "vertical" | "square";
  size?: "small" | "medium" | "large";
  className?: string;
}

const AdPlaceholder = ({
  variant = "horizontal",
  size = "medium",
  className
}: AdPlaceholderProps) => {
  const sizeClasses = {
    small: "h-17 md:h-20 lg:h-24",
    medium: "h-34 md:h-40 lg:h-48",
    large: "h-32 md:h-52 lg:h-64",
  };

  const variantClasses = {
    horizontal: "w-full",
    vertical: "w-64",
    square: "aspect-square w-64",
  };

  return (
    <div
      className={cn(
        "bg-muted/10 rounded-lg my-6 md:my-7 lg:my-8",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-label="Espaço reservado para publicidade"
    >
      {/* Texto oculto visualmente mas acessível para screen readers */}
      <span className="sr-only">Espaço Publicitário</span>
    </div>
  );
};

export default AdPlaceholder;
