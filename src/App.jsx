import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Portfolio />
      </main>
    </>
  );
}

export default App;