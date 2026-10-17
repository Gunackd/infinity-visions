import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <Services />
        <WhyUs />
        <About />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;