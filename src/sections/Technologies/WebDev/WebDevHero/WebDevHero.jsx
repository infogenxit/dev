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
          Expert Website Development in Brisbane to Scale Your Business
        </h1>
        <p className="WebDev-hero-description">
          Most websites don't do much. Someone lands on them, can't work out what the business actually does in the first five seconds, and leaves. If that sounds familiar, it's probably a website problem.
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
          We're Infogenx, a web development company in Brisbane, and we build websites that actually do the job they're supposed to do — bring people in, build trust quickly, and turn visitors into customers. Not templated. Built properly for your business.
        </p>
      </div>
    </section>
  );
};

export default WebDevHero;

