import { useEffect, useState, useRef } from "react";
import "./Testimonials.css";
import cornerAssent from "../../../assets/images/corner-accent.webp";
const testimonials = [
  {
    text: "Infogenx helped us streamline approvals, reduce delays, and improve visibility across teams. The result was a smoother workflow and far less manual follow-up.",
    company: "Operations Manager, Melbourne",
    name: "Sarah Mitchell",
    location: "Australia",
  },
  {
    text: "Their team connected our systems in a practical way and removed unnecessary friction. Day-to-day operations now feel more aligned, efficient, and easier to manage.",
    company: "Head of Technology, Sydney",
    name: "James Walker",
    location: "Australia",
  },
  {
    text: "Infogenx improved our reporting process significantly. We now have cleaner data, quicker access to insights, and much more confidence in the numbers we use.",
    company: "Finance Lead, Brisbane",
    name: "Priya Nair",
    location: "Australia",
  },
  {
    text: "They automated repetitive processes that were slowing our team down. We saved time, reduced errors, and created more space for higher-value operational work.",
    company: "General Manager, Perth",
    name: "Daniel Roberts",
    location: "Australia",
  },
  {
    text: "Infogenx built a scalable solution that matched our business requirements well. It feels secure, integrated, and much better suited to support long-term growth.",
    company: "Business Transformation Lead, Adelaide",
    name: "Emma Collins",
    location: "Australia",
  },
  {
    text: "They helped us modernise key workflows without overcomplicating the system. The new setup improved governance, reduced manual effort, and made scaling much easier.",
    company: "Director of Operations, Canberra",
    name: "Michael Tan",
    location: "Australia",
  },
];
// const Testimonials = () => {
//   const [index, setIndex] = useState(1);
//   const [animate, setAnimate] = useState(true);
//   const trackRef = useRef(null);
//   const slides = [
//     testimonials[testimonials.length - 1],
//     ...testimonials,
//     testimonials[0],
//   ];
//   const CARD_WIDTH = 450;
//   const GAP = 40;
//   const MOVE_X = CARD_WIDTH + GAP;
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => prev + 1);
//     }, 3500);
//     return () => clearInterval(timer);
//   }, []);
//   useEffect(() => {
//     if (index === slides.length - 1) {
//       setTimeout(() => {
//         setAnimate(false);
//         setIndex(1);
//       }, 800);
//     }
//     if (index === 0) {
//       setTimeout(() => {
//         setAnimate(false);
//         setIndex(slides.length - 1);
//       }, 800);
//     }
//   }, [index, slides.length]);
//   useEffect(() => {
//     if (!animate) {
//       requestAnimationFrame(() => setAnimate(true));
//     }
//   }, [animate]);
//   return (
//     <section className="testimonials-section">
//       <h2 className="testimonials-title">Trusted by Our Clients</h2>
//       <p className="testimonials-subtitle">
//         Delivering measurable results across industries.
//       </p>
//       <div className="testimonial-slider">
//         <div
//           ref={trackRef}
//           className={`testimonial-track ${animate ? "animate" : ""}`}
//           style={{
//             transform: `translateX(-${index * MOVE_X}px)`,
//           }}
//         >
//           {slides.map((item, i) => (
//             <div className="testimonial-card" key={i}>
//               <img src={cornerAssent} className="corner-accent" alt="Decorative corner accent" />
//               <div className="testimonial-content">
//                 <span className="quote">“</span>
//                 <p className="testimonial-text">{item.text}</p>
//               </div>
//               <div className="testimonial-footer">
//                 <img src={item.logo} alt={item.company} />
//                 <div>
//                   <strong>{item.company}</strong>
//                   <span>
//                     {item.name}, {item.location}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="testimonial-dots">
//         {testimonials.map((_, i) => (
//           <span
//             key={i}
//             className={index - 1 === i ? "dot active" : "dot"}
//             onClick={() => setIndex(i + 1)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
const Testimonials = () => {
  const [index, setIndex] = useState(3);
  const [animate, setAnimate] = useState(true);
  const [moveX, setMoveX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const trackRef = useRef(null);
  const slides = [
    testimonials[testimonials.length - 3],
    testimonials[testimonials.length - 2],
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
    testimonials[1],
    testimonials[2],
  ];
  /* 👉 CALCULATE CARD WIDTH AND CONTAINER WIDTH DYNAMICALLY */
  useEffect(() => {
    const updateDimensions = () => {
      if (!trackRef.current) return;
      const card = trackRef.current.querySelector(".testimonial-card");
      if (!card) return;
      const gap = window.innerWidth <= 768 ? 20 : 40;
      setMoveX(card.offsetWidth + gap);
      setContainerWidth(trackRef.current.parentElement.offsetWidth);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  /* INFINITE LOOP FIX */
  useEffect(() => {
    if (index === testimonials.length + 3) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(3);
      }, 800);
    }
    if (index === 2) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(testimonials.length + 2);
      }, 800);
    }
  }, [index, testimonials.length]);
  /* RE-ENABLE ANIMATION */
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  const cardWidth = moveX ? moveX - (window.innerWidth <= 768 ? 20 : 40) : 0;
  const centeringOffset = moveX ? (containerWidth - cardWidth) / 2 : 0;
  const translateX = moveX ? index * moveX - centeringOffset : 0;

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Our Success Stories</h2>
        <p className="testimonials-subtitle">
          Delivering measurable results across industries.
        </p>
      </div>
      <div className="testimonial-slider">
        <div
          ref={trackRef}
          className={`testimonial-track ${animate ? "animate" : ""}`}
          style={{
            transform: `translateX(-${translateX}px)`,
          }}
        >
          {slides.map((item, i) => (
            <div className={`testimonial-card ${i === index ? "active" : ""}`} key={i}>
              <img
                src={cornerAssent}
                className="corner-accent"
                alt="Decorative corner accent"
              />
              <div className="testimonial-content">
                <span className="quote">"</span>
                <p className="testimonial-text">{item.text}</p>
              </div>
              <div className="testimonial-footer">
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* DOTS */}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => {
          const isActive = ((index - 3 + testimonials.length) % testimonials.length) === i;
          return (
            <span
              key={i}
              className={isActive ? "dot active" : "dot"}
              onClick={() => setIndex(i + 3)}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Testimonials;


