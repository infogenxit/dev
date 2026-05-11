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
      title: "Modern Application Development",
      description: "We build scalable, high-performance applications tailored to your business. From customer-facing apps to internal management systems, we develop solutions that grow with you.",
      video: serviceVideo1,
      background: "#ffd6bf",
    },
    {
      index: "02",
      title: "AI & Automation",
      description: "Unlock the power of efficiency. We implement custom AI and automation solutions that eliminate repetitive tasks, reduce human error, and allow your team to focus on high-value activities.",
      video: serviceVideo3,
      background: "#E9C9FF",
    },
    {
      index: "03",
      title: "Business Intelligence",
      description: "Turn data into a competitive advantage. Our business intelligence solutions provide real-time insights, helping you make informed, data-backed decisions that drive profitability and efficiency.",
      video: serviceVideo2,
      background: "#C9D5FF",
    },
    {
      index: "04",
      title: "Digital Transformation & IT Consulting",
      description: "We help you navigate the complexities of digital transformation. Whether you're modernising legacy systems or building a digital-first roadmap, our IT consulting in Brisbane ensures your technology aligns with your long-term business strategy.",
      video: serviceVideo4,
      background: "#C9F9FF",
    },
    {
      index: "05",
      title: "Scalable Business Optimisation",
      description:
        "Technology solutions designed to improve performance, strengthen governance, and support long-term business growth.",
      video: serviceVideo5,
      background: "#CBFFC9",
    },
  ];

  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHovered = useRef(false);

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
        const rect = section.getBoundingClientRect();
        // Only intercept if the section is currently in view/sticky
        if (rect.top <= 5 && rect.bottom >= window.innerHeight - 5) {
          const totalCards = services.length;
          const windowHeight = window.innerHeight;
          const totalScrollable = section.offsetHeight - windowHeight;
          const segmentHeight = totalScrollable / totalCards;

          if (e.deltaY > 0 && activeIndex < totalCards - 1) {
            e.preventDefault();
            const nextIndex = activeIndex + 1;
            const targetScroll = section.offsetTop + (nextIndex * segmentHeight) + (segmentHeight / 2);
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
          } else if (e.deltaY < 0 && activeIndex > 0) {
            e.preventDefault();
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


