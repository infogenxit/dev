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
          <span className="section-label">Our Capabilities</span>
          <h2>Smart Brisbane Manufacturing IT Solutions Built for Your Operations</h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Enterprise Mobility" className="expertise-icon" />
            <h4>Enterprise Mobility Solutions</h4>
            <p>
              Staff on the floor need information just as much as managers. We build mobility tools that keep everyone connected—job updates, production data, and task management—without walking back to a terminal.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="ERP Systems" className="expertise-icon" />
            <h4>ERP Systems</h4>
            <p>
              Finance, inventory, procurement, production—everything in one place. No more switching between tools. Everyone works off the same system, so things move faster and with fewer mistakes.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="RPA" className="expertise-icon" />
            <h4>Robotic Process Automation</h4>
            <p>
              A lot of time gets wasted on repetitive work like invoices and reports. We automate that. Your team gets time back, errors drop, and work gets done quicker without extra effort.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="AI Quality Inspection" className="expertise-icon" />
            <h4>AI Visual Quality Inspection</h4>
            <p>
              Pick up issues early, so you’re not dealing with rework later. Less waste, better output, and more consistency. Manual checks miss things—our AI systems don't.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="IoT Smart Factory" className="expertise-icon" />
            <h4>IoT and Smart Factory Tools</h4>
            <p>
              Don't wait till the end of the shift to know something went wrong. Connect your machines to see what’s happening in real time—output, performance, and downtime—all in one view.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconA} alt="Cloud Infrastructure" className="expertise-icon" />
            <h4>Cloud Infrastructure</h4>
            <p>
              Cloud makes scaling simple. Access data from anywhere, scale when needed, and eliminate the cost of maintaining local hardware as your production facility expands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;


