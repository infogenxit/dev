import { useEffect, useRef } from "react";
import "./Expertise.css";
import card1 from "../../../assets/images/card1.webp";
import card2 from "../../../assets/images/card2.webp";
import card3 from "../../../assets/images/card3.webp";
const Expertise = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    const cards = Array.from(
      section.querySelectorAll(".expertise-card"),
    ).reverse(); // 🔥 reverse order
    const maxMove = 80;
    const fadeDistance = 600;
    const onScroll = () => {
      // ❌ Disable animation on tablet & mobile
      if (window.innerWidth <= 1024) {
        cards.forEach((card) => {
          card.style.transform = "translateY(0)";
          card.style.opacity = "1";
        });
        return;
      }
      const rect = section.getBoundingClientRect();
      if (rect.top < 0) {
        const scrollPastCenter = -rect.top;
        cards.forEach((card, index) => {
          const delay = index * 120;
          const progress = Math.max(
            0,
            Math.min(1, (scrollPastCenter - delay) / fadeDistance),
          );
          card.style.transform = `translateY(${-progress * maxMove}px)`;
          card.style.opacity = 1 - progress;
        });
      } else {
        cards.forEach((card) => {
          card.style.transform = "translateY(0)";
          card.style.opacity = "1";
        });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="expertise-section" ref={sectionRef}>
      <div className="expertise-container">
        <div className="expertise-content">
          <h2 className="expertise-heading">
            Brisbane-Based IT Consulting, Development, Automation and Intelligence
          </h2>
          <p className="expertise-description">
            Infogenx was founded by IT professionals with more than 30 years of collective IT experience, who have been in enterprise technology environments, have managed enterprise integration and legacy system challenges, and have delivered the projects that others claim are unachievable. We are not a generalist agency. We are a Brisbane-based IT consulting, application development, business intelligence, data analytics, intelligent automation and enterprise cloud solution provider with an appreciation of the needs of Australian businesses.
          </p>
        </div>
        <div className="expertise-cards">
          <div className="expertise-card first-card">
            <h4>Enterprise Integration & Apps</h4>
            <p>
              We build bespoke applications and integrate disparate systems (CRM, ERP) 
              to ensure seamless data flow and a single source of truth for Brisbane businesses.
            </p>
            <img src={card1} alt="Scalable Digital Solutions for Australian Businesses" />
          </div>
          <div className="expertise-card center-card">
            <h4>Cloud & Digital Transformation</h4>
            <p>
              Migrating and managing secure cloud environments while guiding businesses 
              through strategy and implementation to stay ahead of the competition.
            </p>
            <img src={card2} alt="Intelligent Workflow Automation and AI Solutions" />
          </div>
          <div className="expertise-card last-card">
            <h4>AI Automation & Intelligence</h4>
            <p>
              Leveraging AI to eliminate manual tasks and turning data into actionable 
              insights through BI dashboards to drive productivity and growth.
            </p>
            <img src={card3} alt="Actionable Business Intelligence and Data Analytics" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Expertise;


