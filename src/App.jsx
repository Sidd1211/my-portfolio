import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ExperiencePage from "./pages/Experience";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import TestimonialsPage from "./pages/Testimonials";

// Utility to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#030712]">
        <Header />
        
        {/* main container ensures footer stays at bottom if content is short */}
        <main className="flex-grow">
          <Routes>
            {/* Standard: Use "/" for Home instead of a redirect to /home */}
            <Route path="/" element={<HomePage />} />
            
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />

            {/* Custom 404 Page matching your theme */}
            <Route 
              path="*" 
              element={
                <div className="h-[70vh] flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-9xl font-black text-gray-800">404</h1>
                  <p className="text-2xl text-blue-400 font-mono mt-4 uppercase tracking-widest">
                    System Error: Page Not Found
                  </p>
                  <a href="/" className="mt-8 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                    Return to Terminal
                  </a>
                </div>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;