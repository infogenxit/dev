import "./TransportHero.css";
import appDevVideo from "../../../../assets/videos/Logistics.mp4";
import AboutCornerAccent from "../../../../assets/images/about-corner-accent.webp";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
          <h1>Brisbane Logistics IT Solutions | Infogenx</h1>
          <p>
            <strong>Late Deliveries and Visibility Gaps Are Costing Your Logistics Business More Than You Think</strong>
            <br /><br />
            A missed delivery window, a shipment nobody can locate, a driver taking the wrong route because the system didn't update in time — these aren't just operational headaches. They're the kind of problems that lose clients. Infogenx builds Brisbane logistics IT solutions for transport and logistics businesses that actually fix what's breaking down behind the scenes.
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

