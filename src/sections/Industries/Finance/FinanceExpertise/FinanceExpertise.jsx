import "./FinanceExpertise.css";
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
          <span className="section-label">Brisbane Finance IT Solutions</span>
          <h2>
            Reliable Technology for Finance Operations
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Integrated Financial Systems</h4>
            <p>
              Bring everything together into one system. Your team gets a clear, complete view of financial data without switching between separate platforms.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Process Automation</h4>
            <p>
              Tasks like data entry, invoicing, and reconciliation take up time. We automate these so work gets done faster with fewer errors.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Secure Data & Transactions</h4>
            <p>
              We build systems with strong protection, ensuring your financial data stays safe while remaining easy for your team to access securely.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Compliance & Reporting</h4>
            <p>
              Set up systems that keep records organised and generate accurate reports, ensuring you are always prepared for regulatory requirements.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Cloud-Based Solutions</h4>
            <p>
              Cloud systems give your team flexibility. Access data from anywhere, scale when needed, and avoid expensive hardware upgrades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

