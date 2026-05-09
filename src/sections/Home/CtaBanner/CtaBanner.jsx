import "./CtaBanner.css";
import { useNavigate } from "react-router-dom";
const CtaBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-container">
        <p className="cta-subtitle">
          {/* Ready to Modernise the Way Your Business Runs? */}
          Brisbane's Trusted IT Consulting Partner — From Strategy to Scale
        </p>
        <p className="cta-description">
          {/* If you’re serious about reducing manual work, improving visibility, and building systems that scale, Infogenx is ready. */}
          We understand the initial meeting with a new IT solution provider can be daunting. That's why we make it easy: we want to know what you want to do, and we will give you an honest - and non-technical - analysis of how we can help - or if we are not the right partner.
          <br /><br />
          <strong>Call us now on +61 403339424.</strong>
        </p>
        <h2 className="cta-title">
          {/* Contact Us Today! */}
          Contact Us Today!
        </h2>
        <div className="cta-buttons">
          <button
            className="cta-primary"
            onClick={() => navigate("/contact-us")}
          >
            Start Your Transformation  
          </button>
          <button
            className="cta-secondary"
            onClick={() => navigate("/contact-us")}
          >
            Talk to an Expert  
          </button>
        </div>
      </div>
    </section>
  );
};
export default CtaBanner;

