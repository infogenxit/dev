import "./FinanceExpertise.css";
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
          <span className="section-label">Finance IT Expertise</span>
          {/* <h2>Platform solutions addressing unique Australian industry challenges.</h2> */}
          <h2>
            Reliable Technology for Finance Operations
          </h2>
        </div>

        {/* Expertise grid */}
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>AI-Powered Codeless Development</h4>
            <p>Rapidly prototype and launch business apps without traditional coding constraints.</p> */}
            <h4>Compliance & Regulatory Reporting</h4>
            <p>
              Automated compliance workflows and reporting templates that meet Australian financial regulations, reducing risk and saving hours each month.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Custom Application Development</h4>
            <p>Deliberately crafted web and mobile solutions aligned with your strategic goals.</p> */}
            <h4>Financial Data Security</h4>
            <p>
              Enterprise-grade security for sensitive financial data — protecting client information and meeting Australian privacy obligations.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Cloud-Native Application Engineering</h4>
            <p>Build resilient, scalable applications optimized for AWS, Azure, GCP, and hybrid architectures.</p> */}
            <h4>Automated Report Generation</h4>
            <p>
              Replace manual spreadsheet reporting with automated financial reports delivered on schedule, accurate every time.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Application Modernization & Optimization</h4>
            <p>Upgrade legacy systems with performance, usability, and future-ready capabilities.</p> */}
            <h4>Client Portal & Document Management</h4>
            <p>
              Secure client portals for document sharing, e-signatures, and communication that streamline professional service delivery.
            </p>
          </div>

          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            {/* <h4>Security, Scalability, & Compliance</h4>
            <p>Ensure applications meet industry standards while performing under real-world load.</p> */}
            <h4>Practice Management Systems</h4>
            <p>
              End-to-end practice management tools for accounting and financial services firms that improve efficiency and reduce overhead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDevExpertise;
