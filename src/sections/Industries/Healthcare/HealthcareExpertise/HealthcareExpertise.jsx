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
          <span className="section-label">Our Capabilities</span>
          <h2>Brisbane Healthcare IT Solutions That Support Better Healthcare Operations</h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Electronic Health Records" className="expertise-icon" />
            <h4>Electronic Health Records</h4>
            <p>
              When a patient walks in, your team shouldn’t be searching through folders. Our EHR systems keep everything in one place—medical history, past visits, and medication alerts—so information is easy to access.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Hospital Management System" className="expertise-icon" />
            <h4>Hospital Management System</h4>
            <p>
              Our hospital management platform ties pharmacy, labs, billing, and insurance together so your staff isn't re-entering the same data across five different systems, supported by our reliable Brisbane healthcare IT solutions.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Clinic Management System" className="expertise-icon" />
            <h4>Clinic Management System</h4>
            <p>
              Smaller clinics need billing that just works. We build straightforward software that handles the billing process automatically and doesn't require a full-time IT person to keep running.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Healthcare Analytics" className="expertise-icon" />
            <h4>Healthcare Analytics</h4>
            <p>
              We set up analytics tools that surface patterns worth acting on: early warning signs, treatment trends, and operational bottlenecks. Decisions get sharper when backed by real numbers.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="IoT in Healthcare" className="expertise-icon" />
            <h4>IoT in Healthcare</h4>
            <p>
              We connect patient monitors and diagnostic equipment so your team gets a live picture of what's happening across the facility, not a delayed or incomplete one.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconA} alt="Cloud Solutions" className="expertise-icon" />
            <h4>Cloud Solutions</h4>
            <p>
              Moving to the cloud means your team can access what they need from anywhere, you only pay for what you use, and scaling up doesn't require buying new hardware every two years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

