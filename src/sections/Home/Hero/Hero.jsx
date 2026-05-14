import "./Hero.css";
import aiIcon from "../../../assets/images/aiIcon.webp";
import automationIcon from "../../../assets/images/automationIcon.webp";
import analyticsIcon from "../../../assets/images/analyticalIcon.webp";
import AiSetting from "../../../assets/images/ICONinfogenx1.webp";
import heroVideo from "../../../assets/videos/herovideobg.mp4";
import MicrosoftImg from "../../../assets/images/microsoft (2).webp";
import ZohoImg from "../../../assets/images/zoho (2).webp";
import OdooImg from "../../../assets/images/odoo (2).webp";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* <NetworkBackground /> */}
      <div className="hero-container">
        <h1 className="hero-heading">
          <span>Brisbane's IT Partner. Smarter Systems. Stronger Growth.</span>
        </h1>   
        <p className="hero-description">
          It all begins with strategy. Our IT consulting in Brisbane is focused on understanding your current IT infrastructure, what's missing, and a workable strategy for growth, one that works for your business - not a one-size-fits-all approach. At Infogenx, we donâ€™t just focus on technology; we focus on results. We partner with local, mid-market and emerging businesses to find solutions to operational problems by leveraging smart, future-focused technology. Whether it is a bespoke application, a cloud migration strategy or real-world AI-based automation or a data strategy that provides your management team with actionable insight, our team of seasoned engineers, architects and consultants has the experience to deliver it right, first time.
        </p>
        <div
          style={{ textAlign: "center", fontWeight: "500", color: "#403f3f" }}
        >
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Start Your Transformation
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert
            </button>
          </div>
          <p className="hero-proof">
            Join 50+ Australian businesses scaling with AI.
          </p>
        </div>
        <div className="hero-brands">
          <img src={MicrosoftImg} alt="Microsoft Solutions Partner Brisbane Australia" />
          <img src={ZohoImg} alt="Zoho Authorized Partner Brisbane Australia" />
          <img
            src={OdooImg}
            alt="Odoo Implementation Partner Brisbane Australia"
          />
        </div>
        <div className="hero-bottom-info">
          <p className="hero-secondary-text">It all begins with strategy. Our IT consulting in Brisbane is focused on understanding your current IT infrastructure, what's missing, and a workable strategy for growth, one that works for your business - not a one-size-fits-all approach. At Infogenx, we don’t just focus on technology; we focus on results. We partner with local, mid-market and emerging businesses to find solutions to operational problems by leveraging smart, future-focused technology. Whether it is a bespoke application, a cloud migration strategy or real-world AI-based automation or a data strategy that provides your management team with actionable insight, our team of seasoned engineers, architects and consultants has the experience to deliver it right, first time.</p>
        </div>
        </div>
        <div className="hero-floating-icons">
        <img
          src={aiIcon}
          alt="AI Application Development Brisbane"
          className="float-icon1 float-vertical icon-1"
        />
        <img
          src={automationIcon}
          alt="Business Process Automation Brisbane"
          className="float-icon2 float-vertical icon-2"
        />
        <img
          src={analyticsIcon}
          alt="Data Analytics and BI Solutions Brisbane"
          className="float-icon3 float-horizontal icon-3"
        />
        <img
          src={AiSetting}
          alt="IT Strategy and Digital Transformation Brisbane"
          className="float-icon4 float-horizontal icon-4"
        />
      </div>
    </section>
  );
};
export default Hero;



