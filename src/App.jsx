import Home from "./components/Home";
import Navbar from "./components/Navbar";

import "./App.css";
import Services from "./components/Services";
import About from "./components/About";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="containerrr">
      <Navbar />
      <Home />
      <Services />
      <About />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
