import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de privacidade
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Português (BR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
