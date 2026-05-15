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
          <span className="section-label">Our Capabilities</span>
          <h2>Brisbane Retail IT Solutions Built for How You Actually Operate</h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Omnichannel Integration" className="expertise-icon" />
            <h4>Omnichannel & E-Commerce Integration</h4>
            <p>
              Your customers move between online and in-store. We make sure everything stays connected — browse anywhere, buy anywhere, no gaps in the experience.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Inventory Management" className="expertise-icon" />
            <h4>Inventory Management System</h4>
            <p>
              Real-time stock tracking with barcode and RFID. Less guesswork, fewer stock issues, and full visibility across your entire supply chain.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Retail Analytics" className="expertise-icon" />
            <h4>Retail Analytics</h4>
            <p>
              Clear insights on sales, customers, and product performance — so your business decisions are based on real numbers and actionable data.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="AI Smart Retail" className="expertise-icon" />
            <h4>AI & Smart Retail Technology</h4>
            <p>
              Practical tools like smart reordering, product suggestions, and AI chat support to make daily work easier and drive higher conversion rates.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Retail Cybersecurity" className="expertise-icon" />
            <h4>Cybersecurity for Retail</h4>
            <p>
              Customer payment data needs serious protection. We use AI-driven threat detection and behavioral biometrics across both online and in-store environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;


