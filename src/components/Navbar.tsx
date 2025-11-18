import { Menu, Search, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden h-11 w-11 p-0">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 mt-8">
              <a
                href="#"
                className="text-lg py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Moda
              </a>
              <NavLink
                to="/beleza"
                className="text-lg py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all"
                activeClassName="text-accent bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beleza
              </NavLink>
              <a
                href="#"
                className="text-lg py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Viagem
              </a>
              <a
                href="#"
                className="text-lg py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vídeos
              </a>
              <NavLink
                to="/sobre"
                className="text-lg py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all"
                activeClassName="text-accent bg-accent/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex-1 lg:flex-none lg:mr-8">
          <h1 className="text-2xl font-bold tracking-wide">Drica Divina</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          <a href="#" className="text-base py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all">
            Moda
          </a>
          <NavLink
            to="/beleza"
            className="text-base py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all"
            activeClassName="text-accent bg-accent/10 font-semibold"
          >
            Beleza
          </NavLink>
          <a href="#" className="text-base py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all">
            Viagem
          </a>
          <a href="#" className="text-base py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all">
            Vídeos
          </a>
          <NavLink
            to="/sobre"
            className="text-base py-3 px-2 hover:text-accent hover:bg-accent/5 rounded-md transition-all"
            activeClassName="text-accent bg-accent/10 font-semibold"
          >
            Sobre
          </NavLink>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="h-11 w-11 p-0 hover:bg-accent/10 hover:text-accent transition-all"
            aria-label="Buscar"
          >
            <Search className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            className="hidden sm:flex h-11 w-11 p-0 hover:bg-accent/10 hover:text-accent transition-all"
            aria-label="Instagram"
            asChild
          >
            <a href="https://instagram.com/dricadivina" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6" />
            </a>
          </Button>
          <Button
            variant="ghost"
            className="hidden sm:flex h-11 w-11 p-0 hover:bg-accent/10 hover:text-accent transition-all"
            aria-label="YouTube"
            asChild
          >
            <a href="https://youtube.com/@dricadivina" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-6 w-6" />
            </a>
           </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
