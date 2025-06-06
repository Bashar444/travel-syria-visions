
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./contexts/LanguageContext";
import UrlHandler from "./components/UrlHandler";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FeedbackButton from "./components/FeedbackButton";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Universities from "./pages/Universities";
import SuccessStories from "./pages/SuccessStories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import WorkWithUs from "./pages/WorkWithUs";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./components/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <UrlHandler />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/universities" element={<Universities />} />
                  <Route path="/success-stories" element={<SuccessStories />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/work-with-us" element={<WorkWithUs />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <FeedbackButton />
              <CookieConsent />
            </div>
            <Analytics />
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
