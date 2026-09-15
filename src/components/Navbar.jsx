import logo from "../assets/infinity-logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        <img src={logo} alt="Infinity Visions" />
      </a>

      <nav>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
      </nav>

      <a href="#contact" className="nav-button">
        Start a Project
      </a>
    </header>
  );
}

export default Navbar;