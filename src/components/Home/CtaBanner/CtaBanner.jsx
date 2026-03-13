import "./CtaBanner.css";
import { useNavigate } from "react-router-dom";
const CtaBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-container">
        <p className="cta-subtitle">
          Ready to Modernise the Way Your Business Runs?
        </p>
        <p className="cta-description">If you’re serious about reducing manual work, improving visibility, and building systems that scale, Infogenx is ready.
        </p>
       

        <h2 className="cta-title">Contact Us Today!</h2>

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
