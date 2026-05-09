import "./MicrosoftHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/Microsoft Excellence Delivered.mp4";
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
          <h1>Expert Microsoft Dynamics 365 Brisbane in Brisbane to Scale your business</h1>
          <p>
            Microsoft Dynamics 365 - Power BI - Microsoft Solutions. In today's business world, multiple systems often function with scattered data and ineffective processes. Infogenx is an active Microsoft partner in Brisbane, helping businesses leverage the full power of the Microsoft ecosystem.
          </p>
          <div className="appdev-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Explore Microsoft Solutions{" "}
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert<span>↗</span>
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

