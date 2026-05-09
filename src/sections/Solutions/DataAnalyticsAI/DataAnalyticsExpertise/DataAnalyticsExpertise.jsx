import "./DataAnalyticsExpertise.css";
import IconA from "../../../../assets/images/icon1.png";
import IconB from "../../../../assets/images/icon2.png";
import IconC from "../../../../assets/images/icon3.png";
import IconD from "../../../../assets/images/icon4.png";
import IconE from "../../../../assets/images/icon5.png";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        {/* Heading */}
        <div className="appdev-expertise-header">
          <span className="section-label">Data, Analytics & AI</span>
          <h2>
            {/* Our Application <br />
            Development Expertise */}
            Turn connected data into actionable insight, sharper forecasting, and smarter business decisions.
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Data Discovery and Assessment</h4>
            <p>
              Identify gaps, disconnects, and opportunities across your current data environment.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Analytics and Reporting Design</h4>
            <p>
              Build dashboards and reporting frameworks that improve visibility and support better decisions.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>AI Enablement and Insight Generation</h4>
            <p>
              Apply AI to uncover patterns, improve forecasting, and support faster business action.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Data Integration and Governance</h4>
            <p>
             Connect data sources with the structure, quality, and control needed for dependable reporting.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaShieldAlt className="expertise-icon" /> */}
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Continuous Optimisation and Improvement</h4>
            <p>
              Refine analytics performance over time to keep insights relevant, useful, and aligned to change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
