import "./ConsultingExpertise.css";
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
          <span className="section-label">Consulting & Advisory</span>
          <h2>
            Unlock Your Business Potential with Strategic Consulting & Advisory
            Services
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Comprehensive Digital Strategy Development</h4>
            <p>
              We analyse your business goals and develop a roadmap to drive
              growth using the most suitable platforms.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Tailored Platform Selection and Integration</h4>
            <p>
              Choose the best platforms like Microsoft, Zoho, or Odoo to align
              with your unique business needs and optimise efficiency.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Expert Roadmap Planning and Execution</h4>
            <p>
              We provide clear, actionable roadmaps that guide the entire
              implementation process, ensuring you meet your goals seamlessly.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Informed Decision-Making through Data-Driven Insights</h4>
            <p>
              Our advisory services offer real-time data analysis and actionable
              insights to support your decisions and accelerate success.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Continuous Support for Sustained Growth</h4>
            <p>
              We don’t just advise; we ensure continuous support and
              optimisation to help your business scale and evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;


