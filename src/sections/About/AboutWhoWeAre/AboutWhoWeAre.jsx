import "./AboutWhoWeAre.css";
import teamImage from "../../../assets/images/about-team.webp";
const AboutWhoWeAre = () => {
  return (
    <section className="about-who-section">
      <div className="about-who-container">
        {/* Top content */}
        <div className="about-who-top">
          <div className="about-who-left">
            <span className="about-label">Who We Are</span>
            <h2>
              Helping Australian Businesses Simplify Operations and Scale with Smarter Systems.
            </h2>
          </div>
          <div className="about-who-right">
            <h4>
              At Infogenx, we believe that technology should be an invisible engine for growth, not a source of operational friction. We connect workflows, data, and platforms to provide the visibility and efficiency needed for Australian organizations to scale with total confidence.
            </h4>
            <p>
              Since our inception, we have focused on a single mission: empowering enterprises with outcome-driven digital engineering. We specialize in AI-enabled applications, intelligent automation, and decision-grade data analytics across the Microsoft, Zoho, and Odoo ecosystems. Our approach is rooted in technical excellence and a deep understanding of the unique challenges facing the Australian business landscape.
            </p>
            <p>
              By bridging the gap between complex business requirements and elegant technical execution, we transform fragmented processes into cohesive, automated environments that support long-term sustainability and innovation.
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="about-who-image">
          {/* <img src={teamImage} alt="Infogenx Team" /> */}
          <img src={teamImage} alt="Infogenx Team - AI Automation & App Development Experts in Australia" />
        </div>
        {/* Bottom content */}
        <div className="about-who-bottom">
          <div className="about-who-bottom-left">
            <span className="about-label">How We Work</span>
            <h3>
              How We Turn Operational Complexity Into  <span> Scalable Business Performance</span>
            </h3>
          </div>
          <div className="about-who-points">
            <ul>
              <li><strong>Deep Operational Discovery:</strong> We begin by auditing your current workflows, identifying technical debt, and uncovering hidden friction points that are holding you back.</li>
              <li><strong>Pragmatic Strategy & Design:</strong> We design custom digital roadmaps that prioritize high-impact solutions, ensuring every investment is aligned with your ROI targets.</li>
              <li><strong>Scalable Technical Execution:</strong> Our engineers build connected systems that improve data visibility and operational velocity, using the best-fit technology for your industry.</li>
            </ul>
            <p>
              Our methodology is built on transparency, structure, and a relentless focus on delivering outcomes that matter. We don't just build software; we build the technical foundations that allow your business to achieve its most ambitious goals.
            </p>
          </div>
        </div>
        <hr style={{ marginTop: "20px", marginBottom: "20px", border: "0", borderTop: "1px solid #eee" }} />
      </div>
    </section>
  );
};
export default AboutWhoWeAre;


