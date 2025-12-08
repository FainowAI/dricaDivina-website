import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Saude from "./pages/Saude";
import Beleza from "./pages/Beleza";
import Blog from "./pages/Blog";
import Moda from "./pages/Moda";
import Viagem from "./pages/Viagem";
import Video from "./pages/Video";
import Contato from "./pages/Contato";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/saude" element={<Saude />} />
          <Route path="/beleza" element={<Beleza />} />
          <Route path="/moda" element={<Moda />} />
          <Route path="/viagem" element={<Viagem />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/artigo/:slug" element={<ArticlePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
