import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;