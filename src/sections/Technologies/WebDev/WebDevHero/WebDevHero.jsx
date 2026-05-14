import "./WebDevHero.css";
import AboutCornerAccent from "../../../../assets/images/about-corner-accent.webp";
const WebDevHero = () => {
  return (
    <section className="WebDev-hero">
      <img
        alt="corner accent"
        className="about-corner-accent"
        src={AboutCornerAccent}
      />
      <div className="WebDev-hero-container">
        <h1 className="WebDev-hero-heading">
          Expert Web Development in Brisbane to Scale Your Business
        </h1>
        <p className="WebDev-hero-description">
          Build fast, scalable, secure, and future-ready web platforms using
          modern web technologies and best engineering practices.
        </p>
        <div className="WebDev-hero-buttons">
          <button className="WebDev-primary-btn">
            Get Your FREE Consultation
          </button>
          <button className="WebDev-secondary-btn">
            Talk to a Web Development Expert
          </button>
        </div>
        <p className="WebDev-hero-description-bottom">
          Build fast, scalable, secure, and future-ready web platforms using
          modern web technologies and best engineering practices.
        </p>
      </div>
    </section>
  );
};
export default WebDevHero;
