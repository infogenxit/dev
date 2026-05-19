import "./ManufacturingHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/Manufacturing.mp4";
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
          <h1>Brisbane Manufacturing IT Solutions: Infogenx</h1>
          <p>
            <strong>The Right Technology Stops Costing You and Starts Working For You</strong>
            <br /><br />
            Most manufacturers aren’t losing money on the factory floor — they’re losing it in the systems behind it. Inaccurate inventory, time-consuming manual reports, and unexpected equipment downtime all add up. That’s where our Manufacturing IT Solutions at Infogenx come in. As a Brisbane-based, award-winning team, we work with manufacturers to fix these gaps with practical systems built for real production environments, supporting businesses across Australia, India, and Papua New Guinea.
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


