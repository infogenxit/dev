import "./AboutHero.css";
import { useNavigate } from "react-router-dom";
import aboutHeroBg from "../../../assets/images/about-hero-bg.webp";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.webp";
import NetworkBackground from "../../../components/NetworkBackground/NetworkBackground";

const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
    >
      <NetworkBackground />
      {/* Original alt: alt="corner accent" */}
      <img
        alt="Infogenx Australia - AI Automation & App Development Corner Graphic"
        className="about-corner-accent"
        src={AboutCornerAccent}
        fetchpriority="high"
        loading="eager"
      ></img>
      <div className="about-hero-overlay" />
      <div className="about-hero-container">
        <h1 className="about-hero-heading">
          <span>InfogenX | <span className="highlight-orange">AI Automation</span> & <span className="highlight-orange">App Development</span> Australia</span>
        </h1>
        <p className="about-hero-description">
          Infogenx helps small Australian Small Business Enterprise operations with AI-enabled applications, automation, and analytics across{" "}
          <span className="platforms-highlight">Microsoft, Zoho, and Odoo</span> - delivering connected, scalable solutions that reduce complexity, improve visibility, and drive smarter decisions with real business impact.
        </p>
        <div className="about-hero-buttons">
          <button
            className="about-primary-btn"
            onClick={() => navigate("/contact-us")}
          >
            Meet Our Team
          </button>
          <button
            className="about-secondary-btn"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
