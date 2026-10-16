import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;