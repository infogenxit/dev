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
      title: "Application Development",
      description: "Our approach to application development in Brisbane is about more than just code. We build robust, scalable web and mobile applications that are designed to solve real business challenges—from legacy system modernisations to complex data environments.",
      video: serviceVideo1,
      background: "#ffd6bf",
    },
    {
      index: "02",
      title: "AI Automation",
      description: "If your team is wasting hours on manual data entry, repetitive reporting or disconnected workflows, you don't need more staff. You need automation. We deliver AI automation in Brisbane that allows businesses to eliminate manual tasks, improve accuracy and give you a return on investment within 6-12 months.",
      video: serviceVideo3,
      background: "#E9C9FF",
    },
    {
      index: "03",
      title: "Business Intelligence",
      description: "Data is only valuable when it is actionable. Our service for business intelligence in Brisbane converts data into information via dashboards, reporting and analytics to support better, quicker decisions for business growth.",
      video: serviceVideo2,
      background: "#C9D5FF",
    },
    {
      index: "04",
      title: "Digital Transformation",
      description: "Digital transformation is not about adopting a new tool; it's about evolving your organization to function in a digital-first world. We work with organisations to modernise their business systems and processes with a strategic business transformation plan aligned to business outcomes.",
      video: serviceVideo4,
      background: "#C9F9FF",
    },
    {
      index: "05",
      title: "Cloud Solutions",
      description: "The cloud is not just a place to store files; it's a foundation for growth. We help businesses navigate the complexities of cloud solutions in Brisbane, from initial strategy and migration to ongoing optimization and management.",
      video: serviceVideo5,
      background: "#CBFFC9",
    },
    {
      index: "06",
      title: "Enterprise Automation",
      description: "Enterprise automation is about connecting the big systems that run your business. We automate business processes across enterprise systems such as ERP and CRM to increase efficiency and eliminate bottlenecks.",
      video: serviceVideo1, // Reusing video or adding new if available
      background: "#FFC9D5",
    },
    {
      index: "07",
      title: "Enterprise Integration",
      description: "Our enterprise integration services integrate your systems, apps and data sources—allowing information to move between systems, avoiding duplication, improving data integrity and removing the need for manual data reconciliation.",
      video: serviceVideo3, // Reusing video
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


