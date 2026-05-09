import "./AboutHero.css";
import { useNavigate } from "react-router-dom";
import aboutHeroBg from "../../../assets/images/about-hero-bg.webp";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.webp";
const AboutHero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
    >
      {/* Original alt: alt="corner accent" */}
      <img
        alt="Infogenx Australia - AI Automation & App Development Corner Graphic"
        className="about-corner-accent"
        src={AboutCornerAccent}
        fetchPriority="high"
        loading="eager"
      ></img>
      <div className="about-hero-overlay" />
      <div className="about-hero-container">
        <div className="about-hero-left">
          <h1>
            {/* About InfogenX */}
            About InfogenX | AI Automation & App Development Australia
          </h1>
          <div className="about-hero-buttons">
            <button
              className="about-primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Meet Our Team{" "}
            </button>
            <button
              className="about-secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us <span>↗</span>
            </button>
          </div>
        </div>
        <div className="about-hero-right">
          <p>
            Infogenx helps small Australian Small Business Enterprise operations with AI-enabled 
            applications, automation, and analytics across Microsoft, Zoho, and Odoo - delivering connected, 
            scalable solutions that reduce complexity, improve visibility, and drive smarter decisions with real business impact.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;

