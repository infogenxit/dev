import "./ECommerceExpertise.css";
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
          <h2>Brisbane E-Commerce Development Services Built for Real Business Needs</h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="Custom Design" className="expertise-icon" />
            <h4>Custom Store Design & Development</h4>
            <p>
              Your store looks like your brand, not a $29 theme. We design for conversions first, aesthetics second. Both matter, but sales keep the lights on.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="Platform Migration" className="expertise-icon" />
            <h4>Platform Selection & Migration</h4>
            <p>
              Shopify, WooCommerce, or Magento—we'll tell you honestly what suits your business. We handle migration without losing data or Google rankings.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="Payments" className="expertise-icon" />
            <h4>Payment Gateway Integration</h4>
            <p>
              Credit cards, PayPal, Afterpay—Brisbane customers want choices. We connect everything cleanly so transactions go through without drama.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="Mobile First" className="expertise-icon" />
            <h4>Mobile-First Development</h4>
            <p>
              70% of Australian shopping is on mobile. If your store is clunky on a phone, you're bleeding sales. Everything we build works flawlessly on every screen.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="SEO Architecture" className="expertise-icon" />
            <h4>SEO-Ready Architecture</h4>
            <p>
              We build with proper site structure, page speed, and technical SEO baked in from day one—not bolted on later as an afterthought.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconA} alt="Analytics" className="expertise-icon" />
            <h4>Analytics & Reporting Setup</h4>
            <p>
              Google Analytics and abandoned cart monitoring. You'll actually know what's working, so decisions get made on data instead of gut feelings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

