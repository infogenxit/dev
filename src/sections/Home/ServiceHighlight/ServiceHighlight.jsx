import "./ServiceHighlight.css";
import { useEffect, useRef, useState } from "react";
import serviceVideo1 from "../../../assets/videos/homestackvideo/Digital_Data_Processing.mp4";
import serviceVideo2 from "../../../assets/videos/homestackvideo/AI-Powered Business Insights.mp4";
import serviceVideo3 from "../../../assets/videos/homestackvideo/Intelligent Automation for Repetitive Work.mp4";
import serviceVideo4 from "../../../assets/videos/homestackvideo/AI-Enabled Application Development.mp4"; // your video
import serviceVideo5 from "../../../assets/videos/homestackvideo/System Integration Solutions.mp4"; // your video
import { useNavigate } from "react-router-dom";

const ServiceHighlight = () => {
  const navigate = useNavigate();
  const services = [
    {
      index: "01",
      title: "IT Consulting",
      description: "It all begins with strategy. Our IT consulting in Brisbane is focused on understanding your current IT infrastructure, what's missing, and a workable strategy for growth, one that works for your business - not a one-size-fits-all approach.",
      video: serviceVideo1,
      background: "#f0f4ff",
    },
    {
      index: "02",
      title: "Application Development",
      description: "We develop custom web, mobile and enterprise applications designed to meet your processes. Our application development services are quick, without compromising on scalability or quality.",
      video: serviceVideo4,
      background: "#ffd6bf",
    },
    {
      index: "03",
      title: "Cloud Solutions",
      description: "Our cloud solutions in Brisbane include strategy, migration and management for Amazon Web Services (AWS), Microsoft Azure and Google Cloud to optimise scalability and cost.",
      video: serviceVideo5,
      background: "#CBFFC9",
    },
    {
      index: "04",
      title: "AI Automation in Brisbane",
      description: "We deploy smart business automation to automate tasks, improve accuracy and boost productivity with artificial intelligence (AI), robotic process automation (RPA) and process automation.",
      video: serviceVideo3,
      background: "#E9C9FF",
    },
    {
      index: "05",
      title: "Business Intelligence",
      description: "Our service for business intelligence in Brisbane converts data into information via dashboards, reporting and analytics to support better, quicker decisions.",
      video: serviceVideo2,
      background: "#C9D5FF",
    },
    {
      index: "06",
      title: "Digital Transformation",
      description: "We work with organisations to modernise their business systems and processes with a strategic business transformation plan aligned to business outcomes.",
      video: serviceVideo4,
      background: "#C9F9FF",
    },
    {
      index: "07",
      title: "Enterprise Automation",
      description: "We automate business processes across enterprise systems such as ERP and CRM to increase efficiency and eliminate bottlenecks.",
      video: serviceVideo1,
      background: "#FFC9D5",
    },
    {
      index: "08",
      title: "Enterprise Integration",
      description: "Our enterprise integration services integrate your systems, apps and data sources - allowing information to move between systems, avoiding duplication, improving data integrity and removing the need for manual data reconciliation.",
      video: serviceVideo3,
      background: "#D5FFC9",
    },
  ];

  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHovered = useRef(false);
  const lastScrollTime = useRef(0);


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollInside = -rect.top;
      const windowHeight = window.innerHeight;
      const totalScrollable = section.offsetHeight - windowHeight;

      if (scrollInside <= 0) {
        setActiveIndex(0);
      } else if (scrollInside >= totalScrollable) {
        setActiveIndex(services.length - 1);
      } else {
        const progress = scrollInside / totalScrollable;
        const index = Math.floor(progress * services.length);
        setActiveIndex(Math.min(services.length - 1, Math.max(0, index)));
      }
    };

    const handleWheel = (e) => {
      if (isHovered.current) {
        const now = Date.now();
        if (now - lastScrollTime.current < 1000) return; // Increased throttle to 1s for deliberate control

        const rect = section.getBoundingClientRect();
        // Only intercept if the section is currently in view/sticky
        if (rect.top <= 5 && rect.bottom >= window.innerHeight - 5) {
          const totalCards = services.length;
          const windowHeight = window.innerHeight;
          const totalScrollable = section.offsetHeight - windowHeight;
          const segmentHeight = totalScrollable / totalCards;

          if (e.deltaY > 0 && activeIndex < totalCards - 1) {
            e.preventDefault();
            lastScrollTime.current = now;
            const nextIndex = activeIndex + 1;
            const targetScroll = section.offsetTop + (nextIndex * segmentHeight) + (segmentHeight / 2);
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
          } else if (e.deltaY < 0 && activeIndex > 0) {
            e.preventDefault();
            lastScrollTime.current = now;
            const prevIndex = activeIndex - 1;
            const targetScroll = section.offsetTop + (prevIndex * segmentHeight) + (segmentHeight / 2);
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
          }
        }
      }
    };


    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [services.length, activeIndex]);

  return (
    <section
      className="service-section"
      ref={sectionRef}
      style={{ height: `${services.length * 150}vh` }}
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <div className="service-header-static" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px 40px', textAlign: 'center' }}>
        <span className="section-label" style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(0,18,60,0.05)', color: '#00123c', borderRadius: '30px', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Our Services Portfolio</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#00123c', lineHeight: '1.2', marginBottom: '20px' }}>What We Do: Focused On Your Business Goals</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Our services portfolio has evolved to meet the current and emerging needs of businesses, not what someone once wrote about, but what actually works and delivers results across the technology life cycle.
        </p>
      </div>
      <div className="service-sticky">
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
                      ? `translateY(-${stackOffset * 40}px) scale(${1 - stackOffset * 0.05})` 
                      : "translateY(100vh)",
                  opacity: isFuture ? 0 : 1,
                  zIndex: i + 10,
                  transition: "transform 1.2s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.8s ease",
                  pointerEvents: isActive ? "all" : "none",
                }}
              >
                {/* Left */}
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
                    className="service-btn"
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

                {/* Right */}
                <div className="service-media-container">
                  <div style={{ padding: "0 20px" }}>
                    <span className="service-index">{item.index}</span>
                  </div>
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


