import "./OdooHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/odoo.mp4";
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
          <h1>Expert Odoo Consultant Brisbane in Brisbane to Scale your business</h1>
          <p>
            Odoo Implementation - Customization - Support. Your Unified Business Platform. Fragmented data, "app fatigue," and disconnected workflows are common hurdles for growing businesses. Odoo is a single solution to manage everything from CRM and accounts to manufacturing and HR. At Infogenx, we are your expert Odoo consultants in Brisbane.
          </p>
          <div className="appdev-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Explore Odoo Solutions{" "}
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

