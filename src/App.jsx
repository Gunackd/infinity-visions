import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <Services />
      </main>
    </>
  );
}

export default App;