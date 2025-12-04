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
    <div className="border-t border-b border-border bg-background sticky top-20 z-40">
      <div className="container mx-auto px-4">
        <nav className="flex gap-6 md:gap-8 overflow-x-auto py-4 scrollbar-hide">
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => handleClick(subcategory)}
              className={`text-xs md:text-sm uppercase font-semibold tracking-wider whitespace-nowrap py-2 px-3 rounded-md transition-all duration-200 ${
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
