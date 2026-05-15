import { Link } from "react-router-dom";
import "./ServicesDropdown.css";
import CodeBox1 from "../../assets/images/Microsoft Solutions.webp";
import CodeBox2 from "../../assets/images/Zoho Solutions.webp";
import CodeBox3 from "../../assets/images/Odoo Solutions.webp";
import CodeBox4 from "../../assets/images/Shopify Solutions.png";
const PlatformsDropdown = ({ closeMenu }) => {
  return (
    <div className="services-dropdown">
      <div className="services-grid">
        <Link to="/platforms/microsoft" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox1} alt="Microsoft Solutions" />
          </div>
          <div className="service-info">
            <h4>Microsoft Solutions</h4>
            <p>
              Empower your enterprise with custom Azure, .NET, and Microsoft 365 solutions.
            </p>
          </div>
        </Link>
        <Link to="/platforms/zoho" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox2} alt="Zoho Solutions" />
          </div>
          <div className="service-info">
            <h4>Zoho Solutions</h4>
            <p>
              Streamline your business with tailored Zoho CRM, Finance, and People implementations.
            </p>
          </div>
        </Link>
        <Link to="/platforms/odoo" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox3} alt="Odoo Solutions" />
          </div>
          <div className="service-info">
            <h4>Odoo Solutions</h4>
            <p>
              Fully integrated ERP solutions to manage every aspect of your business operations.
            </p>
          </div>
        </Link>
        <Link to="/platforms/shopify" onClick={closeMenu}>
          <div className="service-img">
            <img src={CodeBox4} alt="Shopify Solutions" />
          </div>
          <div className="service-info">
            <h4>Shopify Solutions</h4>
            <p>
              Custom e-commerce experiences and high-converting storefronts on Shopify.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default PlatformsDropdown;


