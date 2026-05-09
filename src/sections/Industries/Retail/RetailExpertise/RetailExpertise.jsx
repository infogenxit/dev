import "./RetailExpertise.css";
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
          <span className="section-label">Brisbane Retail IT Solutions</span>
          {/* <h2>Platform solutions addressing unique Australian industry challenges.</h2> */}
          <h2>
            Your Retail Operations Deserve Better Technology
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Omnichannel & E-Commerce Integration</h4>
            <p>
              Your customers move between online and in-store. We make sure everything stays connected — browse anywhere, buy anywhere, no gaps.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Inventory Management System</h4>
            <p>
              Real-time stock tracking with barcode and RFID integration. Less guesswork, fewer stock issues, and better operational control.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Retail Analytics</h4>
            <p>
              Clear insights on sales, customers, and product performance — so decisions are based on real numbers, not instinct.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>AI & Smart Retail Technology</h4>
            <p>
              Practical tools like smart reordering, product suggestions, and automated chat support to make daily work easier and increase sales.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Cybersecurity for Retail</h4>
            <p>
              Customer payment data and purchase histories need serious protection. We use AI-driven threat detection across both online and in-store environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

