import "./ShopifyHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/Retaily Unlocked.mp4";
import AboutCornerAccent from "../../../../assets/images/about-corner-accent.webp";
const AppDevHero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // slow speed
    }
  }, []);
  return (
    <section className="appdev-hero">
      <img
        alt="corner accent"
        className="about-corner-accent"
        src={AboutCornerAccent}
      ></img>
      <div className="appdev-container">
        <div className="appdev-left">
          <h1>Expert Shopify Agency in Brisbane to Scale Your Business</h1>
          <p>
            Shopify Expert | Shopify Development | Automation & Integration. The most common challenges encountered by most eCommerce businesses are not in the launching, but in scaling operations effectively as the number of orders increases. Detached systems, manual processes, and fragmented data among inventory, fulfilment, and reporting processes tend to hamper performance and visibility.
            <br /><br />
            Being a hands-on Shopify agency in Brisbane, Infogenx develops and maintains organised, combined Shopify environments that promote scalable development. Having experience in Shopify, automation, and integrating systems, we specialize in creating dependable back-end processes with the storefront, making sure that your whole eCommerce is running smoothly.
          </p>
          <div className="appdev-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Get Your FREE Consultation
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert <span>↗</span>
            </button>
          </div>
        </div>
        <div className="appdev-right">
          <div className="appdev-video-wrapper">
            <div className="bg"></div>
            <video
              src={appDevVideo}
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="appdev-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevHero;

