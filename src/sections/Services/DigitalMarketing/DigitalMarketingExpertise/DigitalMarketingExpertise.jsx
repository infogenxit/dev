import "./DigitalMarketingExpertise.css";
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
          <span className="section-label">Digital Marketing</span>
          <h2>
            Strategic Campaigns, Measurable Results, and Scalable Growth for
            Your Business
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Search Engine Optimization (SEO)</h4>
            <p>
              Improve your website’s visibility on search engines and attract
              organic traffic that converts into customers.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Pay-Per-Click Advertising (PPC)</h4>
            <p>
              Target the right audience with high-performing paid campaigns that
              maximize ROI and generate instant results.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Social Media Marketing</h4>
            <p>
              Build your brand presence and engage with your audience across
              platforms like Facebook, Instagram, and LinkedIn.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Content Marketing Strategy</h4>
            <p>
              Create valuable, relevant content that educates, engages, and
              drives long-term customer relationships.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>Email Marketing & Automation</h4>
            <p>
              Nurture leads and retain customers with personalized email
              campaigns and automated workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

