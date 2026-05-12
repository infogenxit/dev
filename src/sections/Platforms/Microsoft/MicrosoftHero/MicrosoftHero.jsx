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
          <h1>Expert Microsoft Dynamics 365 in Brisbane to Scale Your Business</h1>
          <p>
            Microsoft Dynamics 365 - Power BI - Microsoft Solutions. In today's business world, multiple systems are functioning with scattered data and ineffective processes. This simply affects the visibility and decision-making skills of a business. Infogenx is an active Microsoft partner in Brisbane, working to integrate systems and optimise processes through structured, outcome-driven solutions.
            <br /><br />
            With 30+ years of collective experience, our team implements and boosts Microsoft Dynamics 365, Power BI and other Microsoft solutions. This results in proper alignment of technology to your business processes. We dedicatedly build flexible, integrated systems that help reduce manual work while improving data integrity and enabling business performance.
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

