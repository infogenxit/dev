import "./SupportExpertise.css";
import IconA from "../../../../assets/images/icon1.png";
import IconB from "../../../../assets/images/icon2.png";
import IconC from "../../../../assets/images/icon3.png";
import IconD from "../../../../assets/images/icon4.png";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        {/* Heading */}
        <div className="appdev-expertise-header">
          <span className="section-label">Support & Optimisation</span>
          <h2>
            Continuous Support and Optimisation for Peak Performance and
            Seamless Operations
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="automation-expertise-grid">
          <div className="expertise-item">
            {/* <FaRobot className="expertise-icon" /> */}
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>24/7 Monitoring and Support</h4>
            <p>
              We offer round-the-clock support, monitoring, and rapid issue
              resolution to keep your platforms running smoothly.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCode className="expertise-icon" /> */}
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Tailored Performance Enhancements</h4>
            <p>
              We implement custom improvements and upgrades that drive better
              performance and align with business goals.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaCloud className="expertise-icon" /> */}
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Fast-Track Issue Resolution</h4>
            <p>
              With a dedicated team, we resolve platform issues quickly to
              minimise downtime and disruptions.
            </p>
          </div>

          <div className="expertise-item">
            {/* <FaTools className="expertise-icon" /> */}
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Proactive Knowledge Transfer and Training</h4>
            <p>
              We empower your team with the knowledge and tools needed to handle
              future platform challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
