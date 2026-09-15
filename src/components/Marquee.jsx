function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>BRANDING</span>
        <span>GRAPHIC DESIGN</span>
        <span>UI/UX</span>
        <span>WEB DEVELOPMENT</span>
        <span>DIGITAL EXPERIENCES</span>
        <span>CREATIVE DESIGN</span>

        {/* Duplicate for seamless animation */}
        <span>BRANDING</span>
        <span>GRAPHIC DESIGN</span>
        <span>UI/UX</span>
        <span>WEB DEVELOPMENT</span>
        <span>DIGITAL EXPERIENCES</span>
        <span>CREATIVE DESIGN</span>
      </div>
    </div>
  );
}

export default Marquee;