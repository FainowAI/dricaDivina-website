import { Globe, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 lg:py-16 bg-footer text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DRICA DIVINA</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Skincare, Cabelo, Maquiagem & Saúde. Inspiração para uma vida mais leve e autêntica.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-200 hover:text-gray-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/skincare" className="text-gray-200 hover:text-gray-300 transition-colors">
                  Skincare
                </a>
              </li>
              <li>
                <a href="/cabelo" className="text-gray-200 hover:text-gray-300 transition-colors">
                  Cabelo
                </a>
              </li>
              <li>
                <a href="/maquiagem" className="text-gray-200 hover:text-gray-300 transition-colors">
                  Maquiagem
                </a>
              </li>
              <li>
                <a href="/saude" className="text-gray-200 hover:text-gray-300 transition-colors">
                  Saúde
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-200 hover:text-gray-300 transition-colors">
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
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/dricadivina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="/contato"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start text-gray-200">
            <a href="/contato" className="hover:text-gray-300 transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Política de privacidade
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Termos de uso
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-200">
            <Globe className="h-4 w-4" />
            <span>Português (BR)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-gray-200">
          <p>&copy; {new Date().getFullYear()} DRICA DIVINA. Todos os direitos reservados.</p>
          <p className="mt-2">Feito com amor por Drica Divina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
