import "./DataAnalyticsBusinessImpact.css";
import Business1 from "../../../../assets/images/businessimg1.webp";
import Business2 from "../../../../assets/images/businessimg2.webp";
import Business3 from "../../../../assets/images/businessimg3.webp";
import Business4 from "../../../../assets/images/businessimg4.webp";

const AppDevBusinessImpact = () => {
  const items = [
    {
      title: "30+ Years Combined IT Experience",
      desc: "The team behind Infogenx isn't fresh out of uni. The founders and senior leads bring over three decades of hands-on IT and data experience — across Australia and globally. That depth shows in how we scope, how we build, and how we avoid the mistakes that cost businesses time and money.",
      img: Business1
    },
    {
      title: "Board-Level Involvement",
      desc: "On every project, Infogenx leadership stays directly involved — not just in kickoff calls. The people who scope your project are the same people delivering it. That's a deliberate choice, not a promise that disappears after the contract is signed.",
      img: Business2
    },
    {
      title: "Multi-Industry Experience",
      desc: "We've delivered data and analytics solutions across finance, healthcare, retail, manufacturing, hospitality, and professional services. Different industries, same core issue: data that isn't working hard enough for the business.",
      img: Business3
    },
    {
      title: "Cloud & On-Premises Flexibility",
      desc: "Whether your business runs on AWS, Azure, or a mix of on-prem and cloud, we don't ask you to change your setup to suit us. We work in it, around it, and build for where you're actually heading.",
      img: Business4
    },
    {
      title: "100% Bespoke Solutions",
      desc: "Every data environment is different. We don't sell packaged products or templated dashboards with your logo dropped in. Everything we build is scoped and built around your specific data, your team, and your goals.",
      img: Business1
    },
    {
      title: "Genuinely Local (Brisbane)",
      desc: "When you need a conversation, a working session, or someone to walk through a problem with your team in person — we're here operating directly out of Brisbane, Queensland.",
      img: Business2
    }
  ];

  return (
    <section className="business-impact-section">
      <div className="business-impact-container">
        <div className="business-impact-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Why Do Businesses Work With Infogenx Digital Solutions?</h2>
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
