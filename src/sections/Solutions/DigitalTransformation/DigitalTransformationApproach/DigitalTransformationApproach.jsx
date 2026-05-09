import "./DigitalTransformationApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.png";

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Header */}
        <div className="approach-header">
          <span className="app-section-label">Digital Transformation</span>
          <h2>Transform Legacy Systems Into a Scalable Business Advantage</h2>
        </div>

        {/* Content */}
        <div className="approach-content">
          <p className="approach-lead">
            Outdated systems, disconnected tools, and manual processes slow growth. 
            Infogenx helps businesses modernise their operations with practical, 
            connected digital solutions built for performance.
          </p>
          <p className="approach-body">
            We align technology with how your business actually works, so that 
            transformation delivers measurable impact rather than unnecessary complexity.
          </p>
        </div>
      </div>

      {/* Corner Accent */}
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="app-corner-accent"
      />
    </section>
  );
};

export default AppDevApproach;
