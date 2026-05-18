import "./DataAnalyticsHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/data-analytics-ai.mp4";
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
          <h1>Data Analytics in Brisbane | Smarter Decisions, Real Business Results</h1>
          <p>
            Most businesses have more data than they know what to do with. CRM data, sales reports, website analytics, finance exports — it's all there. But when someone asks "why did revenue drop last quarter?" or "which customers are about to churn?" the answer is usually a shrug and a spreadsheet. That's the problem we fix at Infogenx. We're a data analytics agency in Brisbane that businesses call when they're tired of making big decisions on gut feel and outdated reports.
          </p>
          <div className="appdev-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Unlock Analytics & AI
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
