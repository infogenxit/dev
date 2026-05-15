import "./TransportExpertise.css";
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
          <h2>Brisbane Logistics IT Solutions We Deliver</h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="TMS" className="expertise-icon" />
            <h4>Transportation Management System</h4>
            <p>
              Built for businesses of all sizes—billing, load management, shipment tracking, and reporting in one platform. No more juggling systems for one answer.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Supply Chain" className="expertise-icon" />
            <h4>Supply Chain Management</h4>
            <p>
              See what’s actually happening right now—what’s moving, what’s slowing down, and what needs attention—so you run based on real demand, not guesswork.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Route Optimisation" className="expertise-icon" />
            <h4>Route Optimisation and GPS</h4>
            <p>
              Routes are planned automatically based on traffic and load. Deliveries go out on time, fuel costs stay under control, and things run smoother for your drivers.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="E-Commerce Logistics" className="expertise-icon" />
            <h4>E-Commerce Logistics Integration</h4>
            <p>
              We connect tracking, inventory, and last-mile delivery properly so customers get real-time updates and your team isn’t dealing with constant status calls.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Cloud Communication" className="expertise-icon" />
            <h4>Cloud Communication Tools</h4>
            <p>
              Everyone involved—warehouse staff, drivers, customers, and partners—can see the same live information. No more calling around for basic delivery updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;


