import { Menu, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { useState, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FollowButton from "@/components/FollowButton";
import LanguageSelector from "@/components/LanguageSelector";
import StoriesMenu from "@/components/StoriesMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDesktopMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDesktopMenuOpen(false), 200);
  };

  const categories = [
    { name: "Moda", path: "/moda" },
    { name: "Beleza", path: "/beleza" },
    { name: "Viagem", path: "/viagem" },
    { name: "Vídeo", path: "/video" },
    { name: "Saúde", path: "/saude" },
    { name: "Sobre", path: "/sobre" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background z-50 shadow-sm border-b border-border">
      <div className="container mx-auto">
        {/* Main Nav Row */}
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Left: Mobile Menu */}
          <div className="flex items-center lg:w-1/3">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden h-11 w-11 p-0">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8">
                  <NavLink
                    to="/"
                    className="text-xl py-3 px-2 hover:text-primary hover:bg-accent/5 rounded-md transition-all"
                    activeClassName="text-primary bg-accent/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                  {categories.map((category) => (
                    <NavLink
                      key={category.path}
                      to={category.path}
                      className="text-xl py-3 px-2 hover:text-primary hover:bg-accent/5 rounded-md transition-all"
                      activeClassName="text-primary bg-accent/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center lg:w-1/3">
            <NavLink to="/" className="inline-block">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide hover:text-primary transition-colors cursor-pointer">
                DRICA DIVINA
              </h1>
            </NavLink>
          </div>

          {/* Right: Utilities */}
          <div className="flex items-center gap-2 justify-end lg:w-1/3">
            <div className="hidden sm:flex items-center gap-2">
              <FollowButton />
              <LanguageSelector />
            </div>
            <Button
              variant="ghost"
              className="h-11 w-11 p-0 hover:bg-accent/10 hover:text-primary transition-all"
              aria-label="Buscar"
            >
              <Search className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Navigation - Hover Trigger */}
        <div
          className="hidden lg:flex items-center justify-center pb-2 pt-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-1 text-xs uppercase font-semibold tracking-wider py-2 px-3 hover:text-primary transition-all text-foreground">
            Categorias
            <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isDesktopMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Desktop Dropdown Menu */}
      <div
        className={`hidden lg:block absolute left-0 right-0 bg-background border-b border-border shadow-md transition-all duration-200 z-50 ${isDesktopMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto flex items-center justify-center gap-8 py-4">
          {categories.map((category) => (
            <NavLink
              key={category.path}
              to={category.path}
              className="text-xs uppercase font-semibold tracking-wider py-2 px-3 hover:text-primary hover:bg-accent/5 rounded-md transition-all"
              activeClassName="text-primary bg-accent/10"
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Stories Menu - Mobile only */}
      <div className="lg:hidden">
        <StoriesMenu />
      </div>
    </nav>
  );
};

export default Navbar;
