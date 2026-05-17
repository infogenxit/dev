import "./CtaBanner.css";
import { useNavigate } from "react-router-dom";
const CtaBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Automate, Integrate, and Scale? Let’s Talk Strategy.</h2>
        <p className="cta-description">
          We understand that choosing an enterprise solution partner can feel daunting. That’s why we cut through the buzzwords to deliver an honest, transparent analysis of how we can help—or if we aren't the right fit. From our Brisbane delivery centers to businesses nationwide, we map your operational goals directly to real-world growth.
          <br /><br />
          <strong>Call us now on +61 403339424.</strong>
        </p>
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


