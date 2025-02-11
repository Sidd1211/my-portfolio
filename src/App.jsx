import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;
