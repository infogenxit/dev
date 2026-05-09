import "./HealthcareExpertise.css";
import IconA from "../../../../assets/images/icon1.webp";
import IconB from "../../../../assets/images/icon2.webp";
import IconC from "../../../../assets/images/icon3.webp";
import IconD from "../../../../assets/images/icon4.webp";
import IconE from "../../../../assets/images/icon5.webp";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        <div className="appdev-expertise-header">
          <span className="section-label">Brisbane Healthcare IT Solutions</span>
          <h2>
            We Help Healthcare Providers Stop Drowning in Admin
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Electronic Health Records</h4>
            <p>
              Keep everything in one place — medical history, past visits, and medication alerts — so information is easy to access when it’s needed.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Hospital Management System</h4>
            <p>
              Tie all hospital departments together so your staff isn't re-entering the same data five times across five different systems.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Clinic Management System</h4>
            <p>
              Straightforward software for smaller clinics that handles the billing process automatically and doesn't require a full-time IT person.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Healthcare Analytics</h4>
            <p>
              Set up analytics tools that actually surface patterns worth acting on: early warning signs, treatment trends, and operational bottlenecks.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Cloud & IoT Solutions</h4>
            <p>
              Connect diagnostic equipment for live monitoring and move to the cloud so your team can access what they need from anywhere securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

