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
          <h1>Odoo Consultant in Brisbane to Scale Your Business</h1>
          <p>
            A majority of businesses are unaware that the issue is not the tools, as they already possess an excessive amount of them. The problem is that nothing fits into place. Information is stored in various locations, workarounds are used by teams, and basic activities take more time than they are supposed to.
            <br /><br />
            At Infogenx, we assist companies in rectifying this with the help of Odoo in Brisbane. In case you are seeking an Odoo consultant, we do not simply implement software but are committed to taking your operations into a single system that actually works in practice. Our experience is in the construction of AI-based applications, automation systems and integrated platforms, not only ERP configurations.
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

