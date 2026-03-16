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
      index: " ",
      title: "AI-Enabled Application Development",
      description:
        "Purpose-built applications and platform extensions that fit your business - secure, integrated, and ready to scale.",
      video: serviceVideo1,
      background: "#ffd6bf",
    },
    {
      index: "",
      title: "Intelligent Automation for Repetitive Work",
      description:
        "Workflow orchestration that removes bottlenecks, cuts manual steps, and keeps teams moving with fewer errors.",
      video: serviceVideo2,
      background: "#E9C9FF",
    },
    {
      index: "",
      title: "AI-Powered Business Insights",
      description:
        "Embedded analytics that turns raw data into clarity - so you can spot patterns early and make decisions with confidence.",
      video: serviceVideo3,
      background: "#C9D5FF",
    },
    {
      index: "",
      title: "System Integration Solutions",
      description:
        "Connected platforms and clean data flows that eliminate silos and help your business work as one.",
      video: serviceVideo4,
      background: "#C9F9FF",
    },
    {
      index: "",
      title: "Scalable Business Optimisation",
      description:
        "Technology solutions designed to improve performance, strengthen governance, and support long-term business growth.",
      video: serviceVideo5,
      background: "#CBFFC9",
    },
  ];
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const totalCards = services.length;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollInside = -rect.top;
      const totalScroll = section.offsetHeight - window.innerHeight;

      if (scrollInside >= 0 && scrollInside <= totalScroll) {
        const progress = scrollInside / totalScroll;
        const index = Math.min(
          totalCards - 1,
          Math.floor(progress * totalCards),
        );
        setActiveIndex(index);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const service = services[activeIndex];

  return (
    <section
      className="service-section"
      ref={sectionRef}
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="service-sticky">
        {/* <div
          key={activeIndex}
          className="service-card active card-animate"
          style={{ background: service.background }}
        >
          
          <div className="service-content">
            <h2 className="service-title">
              {service.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>

            <p className="service-description">{service.description}</p>

            <button className="service-btn">
              Talk to our Experts <span className="arrow">→</span>
            </button>
          </div>

          
          <div className="service-media-container">
            <div style={{ padding: "0 20px" }}>
              <span className="service-index">{service.index}</span>
            </div>

            <div className="service-media">
              <video
                key={service.video} // 🔥 re-mount video on change
                src={service.video}
                autoPlay
                muted
                loop
                playsInline
                className="service-video"
              />
            </div>
          </div>
        </div> */}
        <div className="service-stack">
          {services.slice(0, activeIndex + 1).map((item, i) => {
            const isActive = i === activeIndex;
            const stackOffset = activeIndex - i;

            return (
              <div
                key={i}
                className={`service-card ${isActive ? "active" : "stacked"}`}
                style={{
                  background: item.background,
                  transform: `
            translateY(-${stackOffset * 35}px)
            
          `,
                  zIndex: 100 - stackOffset,
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

                  {isActive && (
                    <button
                      className="service-btn"
                      onClick={() => navigate("/contact-us")}
                    >
                      Talk to our Experts <span className="arrow">→</span>
                    </button>
                  )}
                </div>

                {/* Right */}
                <div className="service-media-container">
                  {/* <span className="service-index">{item.index}</span> */}
                  <div style={{ padding: "0 20px" }}>
                    <span className="service-index">{service.index}</span>
                  </div>
                  {isActive && (
                    <div className="service-media">
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
                  )}
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
