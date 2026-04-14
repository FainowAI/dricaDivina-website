import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
    <Link to="/" className="hover:text-foreground transition-colors" aria-label="Home">
      <Home className="h-3.5 w-3.5" />
    </Link>
    {items.map((item, index) => (
      <span key={index} className="flex items-center gap-1">
        <ChevronRight className="h-3.5 w-3.5" />
        {item.href ? (
          <Link to={item.href} className="hover:text-foreground transition-colors">
            {item.label}
          </Link>
        ) : (
          <span className="text-foreground font-medium truncate max-w-[200px]">
            {item.label}
          </span>
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
