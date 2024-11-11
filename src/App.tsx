import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Nav from "./components/NavigationBar/Nav";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
