import { Menu, Search, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex-1 lg:flex-none lg:mr-8">
          <h1 className="text-xl font-bold tracking-wide uppercase">Drica Divina</h1>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          <a href="#" className="text-sm hover:text-accent transition-colors border-b-2 border-accent">Moda</a>
          <a href="#" className="text-sm hover:text-accent transition-colors">Beleza</a>
          <a href="#" className="text-sm hover:text-accent transition-colors">Viagem</a>
          <a href="#" className="text-sm hover:text-accent transition-colors">Vídeos</a>
          <a href="#" className="text-sm hover:text-accent transition-colors">Saúde</a>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Youtube className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
