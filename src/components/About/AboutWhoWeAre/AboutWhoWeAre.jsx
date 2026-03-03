import "./AboutWhoWeAre.css";
import teamImage from "../../../assets/images/about-team.png";

const AboutWhoWeAre = () => {
  return (
    <section className="about-who-section">
      <div className="about-who-container">
        {/* Top content */}
        <div className="about-who-top">
          {/* Left */}
          <div className="about-who-left">
            <span className="about-label">Who We Are</span>
            <h2>
              Helping Australian Businesses <br /> 
              Simplify Operations and <br />
              Scale with Smarter Systems.
            </h2>
          </div>

          {/* Right */}
          <div className="about-who-right">
            <h4>
             We connect workflows, data, and platforms to reduce friction, 
              improve visibility, and support confident growth.

            </h4>

            <p>
              We specialise in AI-enabled applications, intelligent automation,
              and data-led solutions across platforms such as Microsoft, Zoho, and Odoo.
              Our focus is on solving real business problems with secure, scalable, and growth-built technology.

            </p>
          </div>
        </div>

        {/* Image */}
        <div className="about-who-image">
          <img src={teamImage} alt="Infogenx Team" />
        </div>

        {/* Bottom content */}
        <div className="about-who-bottom">
          {/* Left */}
          <div className="about-who-bottom-left">
            <span className="about-label">How We Work</span>
            <h3>
              How We Turn Operational Complexity Into  <span> Scalable Business Performance</span>
            </h3>
          </div>

          {/* Right */}
          <div className="about-who-points">
            <ul>
              <li>- Understand current workflows, gaps, and operational friction points </li>
              <li>- Design practical solutions aligned with real business needs</li>
              <li>- Deliver connected systems that improve visibility and efficiency</li>
            </ul>

            <p>
              Every project is approached with clarity, structure, and 
              a strong focus on outcomes that matter in day-to-day operations.

            </p>
          </div>
        </div>

        <hr style={{ "margin-top": "100px", border: "1px solid #ddd" }} />
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
