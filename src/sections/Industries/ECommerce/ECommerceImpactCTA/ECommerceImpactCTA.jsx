import "./ECommerceImpactCTA.css";
import { useNavigate } from "react-router-dom";
import Correct from "../../../../assets/images/correct.webp";
const AppDevImpactCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="impact-cta-section">
      <div className="impact-cta-container">
        <div className="impact-cta-left">
          <h2>
            Ready to build something worth buying from?
          </h2>
          <p>
            Get in touch with the Infogenx Brisbane E-Commerce Development team for a free consultation. Call us now on <strong>+61 403339424</strong> for a straight answer on what your store actually needs.
          </p>
          <div className="impact-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Get Your FREE Consultation
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert <span>↗</span>
            </button>
          </div>
        </div>
        <div className="impact-cta-right">
          <div className="impact-cta-content">
            <ul>
              <li>
                <img src={Correct} alt="correct" /> Mobile-first, high-conversion design
              </li>
              <li>
                <img src={Correct} alt="correct" /> Shopify, WooCommerce & Custom builds
              </li>
              <li>
                <img src={Correct} alt="correct" /> Seamless payment & logistics integration
              </li>
            </ul>
            <p className="impact-note">Let us build the future together.<br /><strong>Call us now on +61 403339424.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppDevImpactCTA;



