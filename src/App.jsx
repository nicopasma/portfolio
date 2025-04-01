import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import Footer from "./components/footer";
import './styles/App.css';
import PortfolioPage from "./pages/portfolio";


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/portfolio/" element={<HomePage />} />
        <Route path="/portfolio/showcase" element={<PortfolioPage />} />
        <Route path="/portfolio/blog" element={<BlogPage />} />
        <Route path="/portfolio/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
