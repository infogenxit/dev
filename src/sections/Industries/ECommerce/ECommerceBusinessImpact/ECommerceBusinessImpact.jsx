import "./ECommerceBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";
const AppDevBusinessImpact = () => {
  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Built for Real-World Sales Impact</h2>
        </div>
        <div className="business-impact-grid">
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business1} alt="" />
            </div>
            <div className="impact-content">
              <h4>Conversion-First Design</h4>
              <p>
                We design for sales first, ensuring every pixel supports the user journey and drives your customers toward checkout.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business2} alt="" />
            </div>
            <div className="impact-content">
              <h4>Australian Market Experts</h4>
              <p>
                We understand local payment preferences, shipping expectations, and consumer behaviour in Brisbane and beyond.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business3} alt="" />
            </div>
            <div className="impact-content">
              <h4>Data-Driven Decisions</h4>
              <p>
                We set up advanced analytics so you can track abandoned carts, conversion rates, and performance based on real numbers.
              </p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-image">
              <img src={Business4} alt="" />
            </div>
            <div className="impact-content">
              <h4>Long-Term Support</h4>
              <p>
                We stay involved after launch, providing ongoing maintenance so your store remains secure and optimized as you grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevBusinessImpact;

