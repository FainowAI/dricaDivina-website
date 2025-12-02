import { Globe, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DRICA DIVINA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Moda, Beleza & Lifestyle. Inspiração para uma vida mais leve e autêntica.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Conhecimento
                </a>
              </li>
              <li>
                <a href="/beleza" className="text-muted-foreground hover:text-foreground transition-colors">
                  Beleza
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com/dricadivina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/dricadivina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            <a href="#" className="hover:text-foreground transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de uso
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Português (BR)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DRICA DIVINA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
