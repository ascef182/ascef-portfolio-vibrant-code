import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FrontendPortfolio from "./pages/FrontendPortfolio";
import FrontendPortfolioEN from "./pages/FrontendPortfolioEN";
import CloudSecurityPortfolio from "./pages/CloudSecurityPortfolio";
import CloudSecurityPortfolioEN from "./pages/CloudSecurityPortfolioEN";
import ProjectDetails from "./pages/ProjectDetails";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/frontend" element={<FrontendPortfolio />} />
            <Route path="/frontend/en" element={<FrontendPortfolioEN />} />
            <Route path="/cloud-security" element={<CloudSecurityPortfolio />} />
            <Route path="/cloud-security/en" element={<CloudSecurityPortfolioEN />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
