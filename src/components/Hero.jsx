import { motion } from "framer-motion";
import logo from "../assets/infinity-logo.png";

function Hero() {
  return (
    <section className="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="hero-label">
          CREATIVE DESIGN STUDIO
        </p>

        <h1>
          WE TURN IDEAS
          <br />
          INTO VISUAL
          <br />
          EXPERIENCES.
        </h1>

        <p className="hero-description">
          We create bold visual identities, digital experiences
          and creative solutions for ambitious brands.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Start a Project
          </a>

          <a href="#work" className="secondary-button">
            Explore Our Work
          </a>
        </div>

      </motion.div>


      {/* Hero Visual */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeOut"
        }}
      >

        <div className="hero-circle"></div>

        <motion.img
          src={logo}
          alt="Infinity Visions"
          className="hero-logo"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

      </motion.div>

    </section>
  );
}

export default Hero;