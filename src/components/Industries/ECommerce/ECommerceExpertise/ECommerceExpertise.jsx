import "./ECommerceExpertise.css";
import IconA from "../../../../assets/images/icon1.png";
import IconB from "../../../../assets/images/icon2.png";
import IconC from "../../../../assets/images/icon3.png";
import IconD from "../../../../assets/images/icon4.png";
import IconE from "../../../../assets/images/icon5.png";
const AppDevExpertise = () => {
  return (
    <section className="appdev-expertise-section">
      <div className="appdev-expertise-container">
        {/* Heading */}
        <div className="appdev-expertise-header">
          <span className="section-label">eCommerce IT Expertise</span>
          {/* <h2>Platform solutions addressing unique Australian industry challenges.</h2> */}
          <h2>
            Shopify Agency Brisbane — Built for Scalable eCommerce
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>AI-Powered Codeless Development</h4>
            <p>Rapidly prototype and launch business apps without traditional coding constraints.</p> */}
            <h4>Shopify Store Development</h4>
            <p>
              Custom Shopify storefronts designed to convert. From theme customisation to full custom builds tailored to your brand.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Custom Application Development</h4>
            <p>Deliberately crafted web and mobile solutions aligned with your strategic goals.</p> */}
            <h4>Order Management Automation</h4>
            <p>
              Automate order processing, fulfilment, and returns so your team can focus on growth, not repetitive manual tasks.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Cloud-Native Application Engineering</h4>
            <p>Build resilient, scalable applications optimized for AWS, Azure, GCP, and hybrid architectures.</p> */}
            <h4>App Development & Integration</h4>
            <p>
              Custom Shopify apps and third-party integrations that connect your store with your warehouse, ERP, and marketing tools.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Application Modernization & Optimization</h4>
            <p>Upgrade legacy systems with performance, usability, and future-ready capabilities.</p> */}
            <h4>eCommerce Analytics</h4>
            <p>
              Track what's working with integrated analytics dashboards that connect your store data to real business decisions.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Security, Scalability, & Compliance</h4>
            <p>Ensure applications meet industry standards while performing under real-world load.</p> */}
            <h4>Scaling & Performance Optimisation</h4>
            <p>
              Ensure your store handles growth with performance optimisation, A/B testing, and conversion rate improvements that drive revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
