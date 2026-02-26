import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center pt-40 pb-20 md:pt-48 md:pb-32">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold text-primary">404</h1>
          <p className="mb-6 text-xl md:text-2xl text-foreground font-semibold">
            Página não encontrada
          </p>
          <p className="mb-8 text-base text-muted-foreground max-w-md mx-auto">
            A página que você está procurando não existe ou foi removida.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Voltar para o início
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
