import "./ManufacturingExpertise.css";
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
          <span className="section-label">Brisbane Manufacturing IT Solutions</span>
          <h2>
            The Right Technology Stops Costing You and Starts Working For You
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Enterprise Mobility Solutions</h4>
            <p>
              Staff on the floor need information as much as managers. We build mobility tools that keep everyone connected — job updates, production data, and task management.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>ERP Systems Integration</h4>
            <p>
              Finance, inventory, procurement, and production — all in one place. Everyone works off the same system, so things move faster and with fewer mistakes.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Robotic Process Automation</h4>
            <p>
              Automate repetitive work like invoices, reports, and data entry. Your team gets time back, errors drop, and work gets done quicker without extra effort.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>AI Visual Quality Inspection</h4>
            <p>
              Pick up issues early on the production line so you’re not dealing with rework later. Less waste, better output, and more consistency across every batch.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>IoT & Smart Factory Tools</h4>
            <p>
              Connect your machines so you can see what’s happening in real time — output, performance, and downtime — all in one unified operational view.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

