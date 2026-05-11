import "./CtaBanner.css";
import { useNavigate } from "react-router-dom";
const CtaBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-container">
        <p className="cta-subtitle">
          Ready to Start? Let's Have an Honest Conversation.
        </p>
        <p className="cta-description">
          We understand the initial meeting with a new IT solution provider can be daunting. That's why we make it easy: we want to know what you want to do, and we will give you an honest - and non-technical - analysis of how we can help - or if we are not the right partner.
          <br /><br />
          If you need expert IT consulting in Brisbane, we make it easy. We will ask you what you want to do, and then we will tell you, simply and without buzzwords, how we can help, and if we're the right team. 
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

