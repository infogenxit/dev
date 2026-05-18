import "./ManagedServicesHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/managed-services.mp4";
import AboutCornerAccent from "../../../../assets/images/about-corner-accent.webp";
import NetworkBackground from "../../../../components/NetworkBackground/NetworkBackground";

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
      <NetworkBackground />
      <img
        alt="corner accent"
        className="about-corner-accent"
        src={AboutCornerAccent}
      />
      <div className="appdev-container">
        <div className="appdev-left">
          <h1>Workflow Automation Services in Brisbane | Infogenx</h1>
          <p>
            Your team didn't sign up to copy-paste data between systems, chase approvals over email, or rebuild the same report every Monday. But that's where a lot of businesses are right now — good people burning time on work that a well-built automation could handle in seconds. That’s what we fix at Infogenx. Our workflow automation services in Brisbane identify what’s slowing your business down and replace it with intelligent, automated processes that run accurately without anyone babysitting them. As your national partner for seamless Microsoft, Zoho, and Odoo integrations, we build connected automation systems designed for the modern Australian enterprise.
          </p>
          <div className="appdev-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Explore Automation Solutions
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
