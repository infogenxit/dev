import React from "react";
import "./ShopifyExpertise.css";
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
          <h2>Why Shopify in Brisbane Works Best When Set Up Properly?</h2>
          <p className="expertise-intro-text" style={{ maxWidth: "950px", margin: "20px auto 0", color: "#666", fontSize: "1.05rem", lineHeight: "1.7" }}>
            One of the most trusted online store running platforms is Shopify. It is quick, scalable and provides the power to start and grow without extensive infrastructure. However, the platform is not the answer.
            <br /><br />
            The majority of problems begin when the stores expand, the number of manual processes increases, the systems do not interconnect, and reporting becomes vague. Unless it is properly configured, Shopify may soon be the next tool to add to the list of tools that your team will have to maintain. That is why it is important that you work with a knowledgeable Shopify professional in Brisbane. It is not only about constructing a store, but a system that helps your operations over the long term.
          </p>
          <p style={{ marginTop: "20px", fontWeight: "600", color: "#00123c" }}>
            Our Shopify Capabilities — From Build to Scale. We don’t treat Shopify as just a website. We consider it a part of your greater business system.
          </p>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Shopify Development Brisbane" className="expertise-icon" />
            <h4>Shopify Development</h4>
            <p>
              We develop Shopify stores, as a Brisbane developer, to be fast, clean and focused on your customer experience—not templates.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Shopify App Development Brisbane" className="expertise-icon" />
            <h4>Shopify App Development</h4>
            <p>
              In case of the inability to handle your processes, integrations, or business logic with standard features, we create custom Shopify apps to add functionality to your workflows.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Shopify Integration Brisbane" className="expertise-icon" />
            <h4>Shopify Integration</h4>
            <p>
              We integrate Shopify with your current systems, CRMs, ERPs and accounting tools to ensure that your data moves in the right direction throughout your business.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Shopify Automation Brisbane" className="expertise-icon" />
            <h4>Shopify Automation</h4>
            <p>
              Manual work slows development. We implement a practical ecommerce automation with Shopify automation in Brisbane tools and integrations to manage repetitive processes.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="Shopify Analytics Brisbane" className="expertise-icon" />
            <h4>Shopify Analytics</h4>
            <p>
              We set up reporting that actually makes sense. Using Shopify analytics in Brisbane, you can easily see the sales and customer behaviour without searching through various tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;


