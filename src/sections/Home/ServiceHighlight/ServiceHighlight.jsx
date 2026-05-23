import "./ServiceHighlight.css";
import { useEffect, useRef, useState } from "react";
import serviceVideo1 from "../../../assets/videos/consulting-advisory.mp4";
import serviceVideo2 from "../../../assets/videos/app-dev-hero.mp4";
import serviceVideo3 from "../../../assets/videos/Automate Intelligently.mp4";
import serviceVideo4 from "../../../assets/videos/data-analytics-ai.mp4";
import serviceVideo5 from "../../../assets/videos/digital-transformation.mp4";
import serviceVideo6 from "../../../assets/videos/managed-services.mp4";
import serviceVideo7 from "../../../assets/videos/implementation-intgration.mp4";
import { useNavigate } from "react-router-dom";

const ServiceHighlight = () => {
  const navigate = useNavigate();
  const services = [
    {
      index: "01",
      title: "IT Consulting",
      description: "It all begins with strategy. Our IT consulting is focused on understanding your current IT infrastructure, what's missing, and a workable strategy for growth, one that works for your business - not a one-size-fits-all approach.",
      video: serviceVideo1,
      background: "#dbe4ff",
    },
    {
      index: "02",
      title: "Application Development",
      description: "We develop custom web, mobile and enterprise applications designed to meet your processes. Our application development services are quick, without compromising on scalability or quality.",
      video: serviceVideo2,
      background: "#ffc9ab",
    },
    {
      index: "03",
      title: "AI Automation",
      description: "We deploy smart business automation to automate tasks, improve accuracy and boost productivity with artificial intelligence (AI), robotic process automation (RPA) and process automation.",
      video: serviceVideo3,
      background: "#d6a6ff",
    },
    {
      index: "04",
      title: "Business Intelligence",
      description: "Data is only valuable when it is actionable. Our service for business intelligence converts data into information via dashboards, reporting and analytics to support better, quicker decisions for business growth.",
      video: serviceVideo4,
      background: "#aebfff",
    },
    {
      index: "05",
      title: "Digital Transformation",
      description: "Digital transformation is not about adopting a new tool; it's about evolving your organization to function in a digital-first world. We work with organisations to modernise their business systems and processes with a strategic business transformation plan aligned to business outcomes.",
      video: serviceVideo5,
      background: "#a6eeff",
    },
    {
      index: "06",
      title: "Cloud Solutions",
      description: "Our cloud solutions include strategy, migration and management for Amazon Web Services (AWS), Microsoft Azure and Google Cloud to optimise scalability and cost.",
      video: serviceVideo6,
      background: "#a6fcad",
    },
    {
      index: "07",
      title: "Enterprise Integration",
      description: "Our enterprise integration services integrate your systems, apps and data sources—allowing information to move between systems, avoiding duplication, improving data integrity and removing the need for manual data reconciliation.",
      video: serviceVideo7,
      background: "#bcfca4",
    },
  ];

  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const stickyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const stepSize = windowHeight * 0.55; // 55vh per card transition
      const totalScrollable = (services.length - 1) * stepSize;
      
      // Dynamically set section height so it ends exactly when we want it to unpin
      section.style.height = `${sticky.offsetHeight + totalScrollable}px`;

      const rect = section.getBoundingClientRect();
      const scrollInside = -rect.top;

      if (scrollInside <= 0) {
        setActiveIndex(0);
      } else if (scrollInside >= totalScrollable) {
        setActiveIndex(services.length - 1);
      } else {
        const progress = scrollInside / totalScrollable;
        const index = Math.round(progress * (services.length - 1));
        setActiveIndex(Math.min(services.length - 1, Math.max(0, index)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // Initial call after a slight delay to ensure DOM is fully rendered
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [services.length]);

  return (
    <section
      className="service-section"
      ref={sectionRef}
    >
      <div className="service-sticky" ref={stickyRef}>
        <div className="service-header-container">
          <span className="section-label">Focused On Your Business Goals</span>
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Our services portfolio has evolved to meet the current and emerging needs of businesses, not what someone once wrote about, but what actually works and delivers results across the technology life cycle.
          </p>
        </div>
        <div className="service-stack">
          {services.map((item, i) => {
            const isActive = i === activeIndex;
            const isStacked = i < activeIndex;
            const isFuture = i > activeIndex;
            const stackOffset = activeIndex - i;

            return (
              <div
                key={i}
                className={`service-card ${isActive ? "active" : isStacked ? "stacked" : "future"}`}
                style={{
                  background: item.background,
                  transform: isActive
                    ? "translateY(0) scale(1)"
                    : isStacked
                      ? `scale(${1 - stackOffset * 0.05}) translateY(-${stackOffset * 20}px)` /* Minimal upward movement, mostly scaling back */
                      : "translateY(100vh)",
                  opacity: isFuture ? 0 : 1,
                  zIndex: i + 10,
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
                  pointerEvents: isActive ? "all" : "none",
                }}
              >
                <div className="service-content">
                  <h2 className="service-title">
                    {item.title.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h2>

                  <p className="service-description">{item.description}</p>

                  <button
                    className="secondary-btn"
                    style={{
                      opacity: isActive ? 1 : 0,
                      visibility: isActive ? "visible" : "hidden",
                      transition: "opacity 0.3s ease"
                    }}
                    onClick={() => navigate("/contact-us")}
                  >
                    Talk to our Experts <span className="arrow">→</span>
                  </button>
                </div>

                <div className="service-media-container">
                  <div className="service-media" style={{ opacity: isActive ? 1 : 0.4 }}>
                    <video
                      key={item.video}
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="service-video"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;

