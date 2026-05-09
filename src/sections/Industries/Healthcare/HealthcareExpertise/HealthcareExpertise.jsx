import "./HealthcareExpertise.css";
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
          <span className="section-label">Healthcare IT Expertise</span>
          {/* <h2>Platform solutions addressing unique Australian industry challenges.</h2> */}
          <h2>
            We Help Healthcare Providers Run Better — So They Can Care Better
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>AI-Powered Codeless Development</h4>
            <p>Rapidly prototype and launch business apps without traditional coding constraints.</p> */}
            <h4>Patient Record Management</h4>
            <p>
              Secure, centralised digital record systems that reduce paperwork and give clinicians instant access to the information they need.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Custom Application Development</h4>
            <p>Deliberately crafted web and mobile solutions aligned with your strategic goals.</p> */}
            <h4>Compliance & Regulatory Automation</h4>
            <p>
              Automated compliance tracking for Australian healthcare regulations — reducing audit risk and keeping your practice protected.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Cloud-Native Application Engineering</h4>
            <p>Build resilient, scalable applications optimized for AWS, Azure, GCP, and hybrid architectures.</p> */}
            <h4>Staff Productivity Tools</h4>
            <p>
              Systems that streamline scheduling, communication, and task management so your team spends more time on patients, less on admin.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Application Modernization & Optimization</h4>
            <p>Upgrade legacy systems with performance, usability, and future-ready capabilities.</p> */}
            <h4>Healthcare Cost Management</h4>
            <p>
              Better data visibility and automated reporting to help practice managers control costs and forecast with confidence.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Security, Scalability, & Compliance</h4>
            <p>Ensure applications meet industry standards while performing under real-world load.</p> */}
            <h4>Data Security & Patient Privacy</h4>
            <p>
              Healthcare-grade security for patient data, built to meet Australian privacy standards and protect your practice from data breaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
