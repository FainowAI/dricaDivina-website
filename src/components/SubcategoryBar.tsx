import { useState } from "react";

interface SubcategoryBarProps {
  subcategories: string[];
  onSubcategoryChange?: (subcategory: string) => void;
}

const SubcategoryBar = ({ subcategories, onSubcategoryChange }: SubcategoryBarProps) => {
  const [activeSubcategory, setActiveSubcategory] = useState(subcategories[0] || "Tudo");

  const handleClick = (subcategory: string) => {
    setActiveSubcategory(subcategory);
    if (onSubcategoryChange) {
      onSubcategoryChange(subcategory);
    }
  };

  return (
    <div className="border-t border-b border-border bg-background sticky top-16 md:top-20 z-40">
      <div className="container mx-auto">
        <nav className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto py-3 md:py-4 scrollbar-hide scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => handleClick(subcategory)}
              className={`text-xs md:text-sm uppercase font-semibold tracking-wider whitespace-nowrap py-2 px-4 md:px-3 rounded-md transition-all duration-200 snap-start min-w-[80px] ${
                activeSubcategory === subcategory
                  ? "text-primary bg-accent/10 border-b-2 border-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-accent/5"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SubcategoryBar;
