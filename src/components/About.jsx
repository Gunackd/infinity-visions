import { motion } from "framer-motion";
import logo from "../assets/infinity-logo.png";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-visual">

        <motion.div
          className="about-circle"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.img
          src={logo}
          alt="Infinity Visions"
          className="about-logo"
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
        />

      </div>

      <div className="about-content">

        <p className="about-label">
          ABOUT / INFINITY VISIONS
        </p>

        <h2>
          WE CREATE
          <br />
          VISUALS THAT
          <br />
          <span>MEAN SOMETHING.</span>
        </h2>

        <p className="about-description">
          Infinity Visions is a creative design studio focused on
          building memorable visual identities, digital experiences
          and creative solutions for brands, businesses and ideas.
        </p>

        <p className="about-description">
          From a single visual to an entire digital experience,
          we bring together creativity, design and technology to
          turn ideas into something people remember.
        </p>

        <a href="#contact" className="about-button">
          Work With Us ↗
        </a>

      </div>

    </section>
  );
}

export default About;