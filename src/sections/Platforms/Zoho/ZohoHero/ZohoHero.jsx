import "./ZohoHero.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import appDevVideo from "../../../../assets/videos/zoho.mp4";
import AboutCornerAccent from "../../../../assets/images/about-corner-accent.webp";
const AppDevHero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // slow speed
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
          <h1>Your Trusted Zoho Consultant in Brisbane</h1>
          <p>
            Certified Zoho Partner in Brisbane - Strategy, Accomplishments, Automation & Support. Every business has the prime need for managing sales, operations, reporting and customer data across multiple systems. This, anyhow, results in inefficiencies, manual processes and a lack of clarity. At Infogenx, we are your Zoho consultants in Brisbane, and we provide structured solutions that deliver tangible results, integrating technology with business processes. With over 30 years of collective experience, we focus on Zoho implementation, workflow automation, and optimisation to create efficient, scalable and data-driven business processes. We're not just resellers; we are experienced consultants who blend technical and business insight to develop systems that perform in the real world.
          </p>
          <div className="appdev-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Explore Zoho Solutions
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

