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
    small: "h-24",
    medium: "h-48",
    large: "h-64",
  };

  const variantClasses = {
    horizontal: "w-full",
    vertical: "w-64",
    square: "aspect-square w-64",
  };

  return (
    <div
      className={cn(
        "border-2 border-dashed border-muted bg-muted/30 rounded-lg flex items-center justify-center my-8",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-label="Espaço reservado para publicidade"
    >
      <p className="text-muted-foreground text-sm font-medium">Espaço Publicitário</p>
    </div>
  );
};

export default AdPlaceholder;
