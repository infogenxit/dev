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
          <span className="section-label">Brisbane Logistics IT Solutions</span>
          <h2>
            Visibility Gaps Are Costing Your Logistics Business
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Transportation Management System</h4>
            <p>
              Billing, invoicing, load management, shipment tracking, and reporting all in one platform. No more juggling five systems for one straight answer.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Supply Chain Management</h4>
            <p>
              See what’s actually happening right now — what’s moving, what’s slowing down, and what needs attention — so you run based on real demand.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Route Optimisation & GPS</h4>
            <p>
              Plan routes automatically based on traffic, delivery windows, and load. Deliveries go out on time, fuel costs stay under control, and things run smoother.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>E-Commerce Logistics Integration</h4>
            <p>
              Connect tracking, inventory, and last-mile delivery properly so customers get updates and your team isn’t dealing with constant complaints.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Cloud Communication Tools</h4>
            <p>
              Everyone involved — warehouse staff, drivers, customers, and partners — can see the same live information. No more calling around for basic updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

