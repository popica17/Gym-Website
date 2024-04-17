import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import Career from "./pages/Career";
import Footer from "./components/Footer";
import ScrollToTop from "./helpers/scrollToTop";

function App() {
  return (
    <div>
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
