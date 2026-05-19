import "./ModernApplicationBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";

const AppDevBusinessImpact = () => {
  const items = [
    {
      title: "National Partner Status",
      desc: "Certified platform knowledge across Microsoft, Zoho, and Odoo — not guesswork.",
      img: Business1
    },
    {
      title: "Brisbane CBD Office",
      desc: "Local availability and face-to-face support for Australian enterprise clients.",
      img: Business2
    },
    {
      title: "Australia & India Delivery",
      desc: "Scalable project resourcing without compromising on engineering quality.",
      img: Business3
    },
    {
      title: "Full-Service Engagement",
      desc: "Consulting, application build, integration, and managed services all under one roof.",
      img: Business4
    },
    {
      title: "Industry-Specific Experience",
      desc: "Deep, real-world knowledge in healthcare, retail, manufacturing, finance, transport and logistics.",
      img: Business1
    }
  ];

  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Why Do Businesses Choose Our Web App Developers in Brisbane?</h2>
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


