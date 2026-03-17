import "./ImplementIntegrationExpertise.css";
import IconA from "../../../../assets/images/icon1.png";
import IconB from "../../../../assets/images/icon2.png";
import IconC from "../../../../assets/images/icon3.png";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        {/* Heading */}
        <div className="appdev-expertise-header">
          <span className="section-label">Implementation & Integration</span>
          <h2>
            Seamless deployment and system connectivity for Australian
            organisations.
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Seamless System Integration</h4>
            <p>
              We connect all your systems to work in harmony, ensuring smooth
              data flow across your business.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Tailored Implementation for Your Needs</h4>
            <p>
              Our solutions are customised to your specific business
              requirements, ensuring that every step aligns with your goals.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Post-Launch Support and Optimisation</h4>
            <p>
              We offer continuous support and optimisation services to guarantee
              long-term performance and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
