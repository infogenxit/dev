import "./CloudComputingHero.css";
import AboutCornerAccent from "../../../../assets/images/about-corner-accent.webp";

const CloudComputingHero = () => {
  return (
    <section className="WebDev-hero">
      <img
        alt="corner accent"
        className="about-corner-accent"
        src={AboutCornerAccent}
      />
      <div className="WebDev-hero-container">
        <h1 className="WebDev-hero-heading">
          Expert Cloud Computing in Brisbane to Scale Your Business
        </h1>
        <p className="WebDev-hero-description">
          Running servers you own is expensive. Maintaining ageing infrastructure takes time your IT team doesn't have. And when your business needs to scale quickly — up or down — on-premise systems just can't keep up.
        </p>
        <div className="WebDev-hero-buttons">
          <button className="WebDev-primary-btn">
            Get Your FREE Consultation
          </button>
          <button className="WebDev-secondary-btn">
            Talk to a Cloud Expert
          </button>
        </div>
        <p className="WebDev-hero-description-bottom">
          That's the problem cloud computing in Brisbane solves. And it's what Infogenx Digital Solutions has been helping local businesses do — move off legacy infrastructure, onto cloud environments that are faster, more secure, and built to grow with them. We work across AWS, Azure, and Google Cloud.
        </p>
      </div>
    </section>
  );
};

export default CloudComputingHero;

