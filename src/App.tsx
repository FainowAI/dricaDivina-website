import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Saude from "./pages/Saude";
import Skincare from "./pages/Skincare";
import Cabelo from "./pages/Cabelo";
import Maquiagem from "./pages/Maquiagem";
import Blog from "./pages/Blog";
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
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/cabelo" element={<Cabelo />} />
          <Route path="/maquiagem" element={<Maquiagem />} />
          <Route path="/saude" element={<Saude />} />
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
