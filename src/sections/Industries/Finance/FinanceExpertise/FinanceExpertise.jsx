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
          <span className="section-label">Our Capabilities</span>
          <h2>Brisbane Finance IT Solutions Offered At Infogenx</h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Integrated Systems" className="expertise-icon" />
            <h4>Integrated Financial Systems</h4>
            <p>
              We bring accounting, reporting, and tracking into one system. Your team gets a complete view of data without switching between separate platforms.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Automation" className="expertise-icon" />
            <h4>Process Automation</h4>
            <p>
              Automate data entry, invoicing, and reconciliation. Work gets done faster, with fewer errors, and without constant manual effort from your team.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Security" className="expertise-icon" />
            <h4>Secure Data and Transactions</h4>
            <p>
              Financial data needs strong protection. We build systems with proper security so your data stays safe while remaining easy for your team to access.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Compliance" className="expertise-icon" />
            <h4>Compliance and Reporting</h4>
            <p>
              We set up systems that keep records organised and generate accurate reports, ensuring you’re always prepared for ASIC and other regulatory requirements.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Data Visibility" className="expertise-icon" />
            <h4>Data Visibility and Insights</h4>
            <p>
              We make it easier to understand what’s actually happening. Track performance and make decisions based on real numbers, not just raw data.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconA} alt="Cloud Solutions" className="expertise-icon" />
            <h4>Cloud-Based Solutions</h4>
            <p>
              Access your data from anywhere and scale when needed. Our cloud-based Brisbane Finance IT Solutions are designed to be simple and reliable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

