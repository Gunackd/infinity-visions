
import logo from "../assets/infinity-logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#top" className="footer-logo">
            <img src={logo} alt="Infinity Visions logo" />
          </a>

          <p>
            We turn ideas into visual experiences.
            Creative thinking, bold design and digital execution.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#top">Home</a>
          <a href="#work">Our Work</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#process">Our Process</a>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <a href="#services">Graphic Design</a>
          <a href="#services">Brand Identity</a>
          <a href="#services">Social Media Design</a>
          <a href="#services">Website Design</a>
          <a href="#services">Frontend Development</a>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>
          <a
            href="https://www.instagram.com/infinity_visions_official_/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
          <a href="#contact">Start a Project ↗</a>
          <a href="mailto:hello@infinityvisions.in">
            Email Us ↗
          </a>
        </div>
      </div>

      <div className="footer-cta">
        <p>HAVE SOMETHING IN MIND?</p>
        <a href="#contact">
          LET'S CREATE. <span>↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Infinity Visions. All rights reserved.</p>

        <a href="#top" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
