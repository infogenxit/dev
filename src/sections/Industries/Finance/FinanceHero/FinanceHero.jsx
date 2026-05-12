import "./FinanceHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/Finance.mp4";
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
          <h1>Brisbane Finance IT Solutions | Infogenx</h1>
          <p>
            <strong>Reliable Technology for Finance Operations</strong>
            <br /><br />
            Finance businesses in Brisbane deal with pressure every day — accuracy, compliance, deadlines, and handling sensitive data. When your systems don’t support that properly, things start slipping. Reports take longer, manual work piles up, and small errors turn into bigger problems. That’s where our Brisbane Finance IT Solutions at Infogenx come in. We don’t start with technology. We start with how your business actually runs. What’s slowing your team down? Where are mistakes happening? What’s taking more time than it should? Once we understand that, we build systems that fix those issues — nothing extra, nothing unnecessary.
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

