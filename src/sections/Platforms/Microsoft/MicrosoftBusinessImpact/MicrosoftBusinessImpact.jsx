import "./MicrosoftBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Our Philosophy</span>
          <h2>What Sets Infogenx Apart in Microsoft Consulting?</h2>
          <p className="impact-intro-text">
            There’s no shortage of companies offering Microsoft solutions. What brings the difference is how dedicatedly we work.
          </p>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="Solutions" />
            </div>
            <div className="impact-content">
              <h4>Real Solutions</h4>
              <p>
                We look for solutions, not just workarounds. If there's a better way to do it, we'll find it.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="Automation" />
            </div>
            <div className="impact-content">
              <h4>Automation First</h4>
              <p>
                We find ways to automate and streamline things, reducing manual work and human error.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="Client-centric" />
            </div>
            <div className="impact-content">
              <h4>Needs-Driven</h4>
              <p>
                We work to your needs, not force you to work to ours. Your business processes lead the technology.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="Support" />
            </div>
            <div className="impact-content">
              <h4>Evolving Support</h4>
              <p>
                And we continue to support you beyond the initial installation to make improvements and adjustments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;


