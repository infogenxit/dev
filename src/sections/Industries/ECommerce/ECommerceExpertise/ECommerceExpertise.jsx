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
          <span className="section-label">Brisbane E-Commerce Development</span>
          <h2>
            Build Stores That Actually Sell
          </h2>
        </div>
        <div className="appdev-expertise-grid">
          <div className="expertise-item">
            <img src={IconA} alt="expertise-icon" className="expertise-icon" />
            <h4>Custom Store Design & Development</h4>
            <p>
              Your store looks and feels like your brand, not a generic theme. We design for conversions first, ensuring aesthetics support your sales goals.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconB} alt="expertise-icon" className="expertise-icon" />
            <h4>Platform Selection & Migration</h4>
            <p>
              Shopify, WooCommerce, or custom builds — we'll recommend what suits your business best and handle migration without losing data or rankings.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconC} alt="expertise-icon" className="expertise-icon" />
            <h4>Payment Gateway Integration</h4>
            <p>
              Credit cards, PayPal, Afterpay, and more. We connect all payment options cleanly so transactions go through without friction for your customers.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconD} alt="expertise-icon" className="expertise-icon" />
            <h4>Mobile-First Development</h4>
            <p>
              Over 70% of Australian shopping happens on mobile. We build stores that work flawlessly on every screen size to ensure you never miss a sale.
            </p>
          </div>
          <div className="expertise-item">
            <img src={IconE} alt="expertise-icon" className="expertise-icon" />
            <h4>SEO-Ready Architecture</h4>
            <p>
              We build with proper site structure, page speed, and technical SEO baked in from day one, ensuring your beautiful store is actually found by customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevExpertise;

