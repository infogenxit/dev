import "./RetailHero.css";
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
          <h1>Brisbane Retail IT Solutions to Scale Your Business</h1>
          <p>
            <strong>Your Retail Operations Deserve Better Technology</strong>
            <br /><br />
            Managing stock on spreadsheets and chasing supplier invoices manually is costing retailers real money. At Infogenx, we work with retail businesses across Brisbane and broader Australia to fix exactly that. Based here since 2012, we help everyone from small independents to larger chains dealing with complex supply chain challenges.
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


