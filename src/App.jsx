import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ExperiencePage from "./pages/Experience";

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow bg-gray-900 text-white">
        <Routes>
          {/* Redirect "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Home Page */}
          <Route path="/home" element={<HomePage />} />
          {/* Skills Page */}
          <Route path="/skills" element={<SkillsPage />} />
          {/* Experience Page */}
          <Route path="/experience" element={<ExperiencePage />} />
          {/* 404 Page */}
          <Route path="*" element={<div className="text-center mt-10">Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
