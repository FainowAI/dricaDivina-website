import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ClickableLinkProps {
  text: string;
  href?: string;
  onClick?: () => void;
  showIcon?: boolean;
  className?: string;
}

const ClickableLink = ({
  text,
  href,
  onClick,
  showIcon = true,
  className
}: ClickableLinkProps) => {
  const baseClasses = "text-accent font-semibold text-base flex items-center gap-2 hover:underline hover:gap-3 transition-all cursor-pointer";

  const content = (
    <>
      {text}
      {showIcon && <ArrowRight className="h-5 w-5 transition-all" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(baseClasses, className)}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseClasses, className)}>
      {content}
    </button>
  );
};

export default ClickableLink;
