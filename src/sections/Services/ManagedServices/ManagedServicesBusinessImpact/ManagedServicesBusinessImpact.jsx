import "./ManagedServicesBusinessImpact.css";
import Business1 from "../../../../assets/images/business_impact_managed_services.png";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";

const AppDevBusinessImpact = () => {
  const items = [
    {
      title: "We Audit Before We Build",
      desc: "We map your processes first, find where automation delivers real ROI, and flag anything that needs fixing before it gets automated. No guesswork.",
      img: Business1
    },
    {
      title: "100% Vendor-Agnostic",
      desc: "UiPath, Automation Anywhere, Blue Prism, Power Automate — we recommend what fits your environment, budget, and scale. Not what's easiest for us.",
      img: Business2
    },
    {
      title: "Senior Team & Hands-On Delivery",
      desc: "The people scoping your project build it too. No handoffs. No juniors were sent to figure it out. Leadership stays involved start to finish.",
      img: Business3
    },
    {
      title: "Built to Last & Scale",
      desc: "We monitor, optimise, and support your automations as your business grows. And we build systems designed to scale — not just fix today's problem.",
      img: Business4
    }
  ];

  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Why Do Businesses Choose Infogenx for Workflow Automation?</h2>
        </div>
        <div className="business-impact-grid">
          {items.map((item, idx) => (
            <div className="impact-card" key={idx}>
              <div className="impact-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="impact-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppDevBusinessImpact;
