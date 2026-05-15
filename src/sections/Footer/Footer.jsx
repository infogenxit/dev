import "./Footer.css";
import Footerlogo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { PATHS } from "../../route/paths";
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={Footerlogo} alt="Infogenx" />
            <p>
              AI-enabled applications, intelligent automation, and analytics
              solutions built to help businesses simplify operations,
              connect systems, and scale with confidence.
            </p>
          </div>
          <div className="footer-social">
            <Link
              to="https://www.instagram.com/infogenx_pvt_ltd/"
              target="_blank"
            >
              <RiInstagramLine />
            </Link>
            <Link
              to="https://www.linkedin.com/company/infogenx-pvt-ltd/"
              target="_blank"
            >
              <RiLinkedinBoxLine />
            </Link>
            <Link to="https://www.facebook.com/Infogenx" target="_blank">
              <RiFacebookBoxLine />
            </Link>
            <Link to="https://x.com/Infogenx1" target="_blank">
              <RiTwitterXLine />
            </Link>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li><Link to={PATHS.about}>About Us</Link></li>
              <li><Link to={PATHS.careers}>Careers</Link></li>
              <li><Link to={PATHS.contactUs}>Contact Us</Link></li>
              <li><Link to={PATHS.privacyPolicy}>Privacy Policy</Link></li>
              <li><Link to={PATHS.termsConditions}>Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4>SERVICES</h4>
            <ul>
              <li><Link to={PATHS.implementationIntegration}>Implementation & Integration</Link></li>
              <li><Link to={PATHS.managedServices}>Managed Services</Link></li>
              <li><Link to={PATHS.consultingAdvisory}>Consulting & Advisory</Link></li>
              <li><Link to={PATHS.supportOptimization}>Support & Optimisation</Link></li>
              <li><Link to={PATHS.digitalMarketing}>Digital Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4>SOLUTIONS</h4>
            <ul>
              <li><Link to={PATHS.digitalTransformation}>Digital Transformation</Link></li>
              <li><Link to={PATHS.intelligentAutomation}>Intelligent Automation</Link></li>
              <li><Link to={PATHS.modernApplications}>Modern Applications</Link></li>
              <li><Link to={PATHS.dataAnalyticsAi}>Data Analytics & AI</Link></li>
              <li><Link to={PATHS.apiIntegration}>Integration & API Enablement</Link></li>
            </ul>
          </div>
          <div>
            <h4>PLATFORMS</h4>
            <ul>
              <li><Link to={PATHS.microsoft}>Microsoft Solutions</Link></li>
              <li><Link to={PATHS.zoho}>Zoho Solutions</Link></li>
              <li><Link to={PATHS.odoo}>Odoo Solutions</Link></li>
              <li><Link to={PATHS.shopify}>Shopify Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4>INDUSTRIES</h4>
            <ul>
              <li><Link to={PATHS.healthcare}>Healthcare</Link></li>
              <li><Link to={PATHS.retail}>Retail</Link></li>
              <li><Link to={PATHS.manufacturing}>Manufacturing</Link></li>
              <li><Link to={PATHS.transport}>Transport & Logistics</Link></li>
              <li><Link to={PATHS.ecommerce}>E-Commerce</Link></li>
              <li><Link to={PATHS.finance}>Financial Services</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Infogenx. All rights reserved.</p>
          <p>
            Built for smarter operations, stronger governance, and scalable
            digital transformation.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

