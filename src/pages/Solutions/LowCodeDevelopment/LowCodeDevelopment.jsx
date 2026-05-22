import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import { PATHS } from "../../../route/paths";
import appDevVideo from "../../../assets/videos/app-dev-hero.mp4";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.webp";
import "./LowCodeDevelopment.css";

const LowCodeDevelopment = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow speed for smooth feel
    }
  }, []);

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Low Code Development", path: PATHS.lowCodeDevelopment }
  ];

  const faqs = [
    {
      question: "1. How quickly can you actually deliver?",
      answer: "Depends on the complexity, but most apps are live within 2 to 6 weeks. Simple automations — sometimes days."
    },
    {
      question: "2. Can it connect with the software we already use?",
      answer: "Yes, almost always. Connecting to existing CRMs, ERPs or third-party tools is standard for us."
    },
    {
      question: "3. Do we need a developer to make changes after launch?",
      answer: "For most updates, no. That's one of the genuine advantages of low code — your team can handle a lot of it without calling us every time."
    },
    {
      question: "4. You're in Brisbane — do you work with businesses elsewhere in Australia?",
      answer: "Absolutely. Brisbane is home base but we work with clients nationally."
    },
    {
      question: "5. What's the actual difference between low code and no code?",
      answer: "Low code gives more flexibility for complex logic and custom functionality. No code suits simpler, more repetitive tasks. We'll recommend whichever fits — or a combination of both."
    }
  ];

  const relatedItems = [
    {
      title: "Custom Software Development",
      description: "Build robust software built around real business operations.",
      link: PATHS.customSoftwareDevelopment
    },
    {
      title: "Mobile App Development",
      description: "Build integrated mobile apps for field operations and customer engagement.",
      link: PATHS.mobileAppDevelopmentNew
    },
    {
      title: "Intelligent Automation",
      description: "Orchestrate automated workflows across your newly connected platforms.",
      link: PATHS.intelligentAutomation
    }
  ];

  return (
    <>
      <SEO
        title="Low Code App Development Brisbane | No Code & Automation Solutions"
        description="Build apps faster with no code and low code development in Brisbane. We create cost-effective, scalable solutions with automation to streamline your business processes."
        keywords="low code app development brisbane, low code automation brisbane, no code development brisbane, brisbane no code development"
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="lc-hero">
        <img
          alt="corner accent"
          className="lc-corner-accent"
          src={AboutCornerAccent}
        />
        <div className="lc-container">
          <div className="lc-hero-left">
            <span className="lc-badge">Rapid Development</span>
            <h1>Low Code App Development in Brisbane: Infogenx Digital Solutions</h1>
            <p className="lc-hero-subtitle">Faster Apps. Less Complexity. Real Results.</p>
            <p>
              Most businesses don't have the time — or the budget — to wait six months for a custom app to be built from scratch. And honestly, they shouldn't have to. That's exactly why we focus on low code app development in Brisbane that businesses can get up and running quickly, without compromising on quality or functionality. At Infogenx Digital Solutions, we've helped businesses here and across Australia build apps that actually solve real problems — not just tick a box on a tech roadmap.
            </p>
            <div className="lc-hero-buttons">
              <button
                className="lc-primary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Start Your Project
              </button>
              <button
                className="lc-secondary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>
          <div className="lc-hero-right">
            <div className="lc-video-wrapper">
              <div className="lc-video-bg"></div>
              <video
                src={appDevVideo}
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="lc-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Low Code Section */}
      <section className="lc-intro-section">
        <div className="container">
          <div className="lc-intro-grid">
            <div className="lc-intro-left">
              <span className="lc-label">Definition</span>
              <h2>What Even Is Low Code Development in Brisbane?</h2>
            </div>
            <div className="lc-intro-right">
              <p>
                Think of it this way. Instead of writing every single line of code from the ground up, low code platforms let developers use visual tools, ready-made components, and drag-and-drop logic to build applications much faster.
              </p>
              <p>
                It's not watered-down development. The apps are fully functional, scalable, and can be integrated with your existing systems. You're just not paying for unnecessary complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="lc-build-section">
        <div className="container">
          <div className="lc-section-header">
            <span className="lc-label">Our Capabilities</span>
            <h2>What We Build for Local Businesses At Infogenx?</h2>
            <p className="lc-section-intro">
              At Infogenx, we combine low code automation Brisbane workflows with custom logic to deliver apps that fit your exact needs — not a generic template. Our low code services include:
            </p>
          </div>
          <div className="lc-build-grid">
            
            {/* Card 1 */}
            <div className="lc-build-card">
              <div className="lc-build-icon-wrapper">
                <svg className="lc-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>Business Apps</h3>
              <p>Customer portals, internal dashboards, approval workflows, and more</p>
            </div>

            {/* Card 2 */}
            <div className="lc-build-card">
              <div className="lc-build-icon-wrapper">
                <svg className="lc-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Process Automation</h3>
              <p>Replace manual, repetitive tasks with automated flows that run in the background</p>
            </div>

            {/* Card 3 */}
            <div className="lc-build-card">
              <div className="lc-build-icon-wrapper">
                <svg className="lc-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </div>
              <h3>Data Apps</h3>
              <p>Connect your data sources and turn raw numbers into actionable insights</p>
            </div>

            {/* Card 4 */}
            <div className="lc-build-card">
              <div className="lc-build-icon-wrapper">
                <svg className="lc-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3>Integration Solutions</h3>
              <p>Connect your existing tools — CRMs, ERPs, third-party APIs — without rebuilding from scratch</p>
            </div>

            {/* Card 5 */}
            <div className="lc-build-card">
              <div className="lc-build-icon-wrapper">
                <svg className="lc-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Mobile & Web Apps</h3>
              <p>Responsive apps that work across devices, built at speed</p>
            </div>

          </div>
          <p className="lc-section-outro">
            We work across apps, automation, AI, and data — so your solution doesn't sit in a silo. It works as part of your broader business.
          </p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="lc-comparison-section">
        <div className="container">
          <div className="lc-section-header light">
            <span className="lc-label">Comparison</span>
            <h2>Why Choose Low Code Over Traditional Development?</h2>
            <p className="lc-section-intro">
              Traditional custom development is expensive, slow, and hard to maintain. Low code app development Brisbane solves all three:
            </p>
          </div>
          
          <div className="lc-table-wrapper">
            <table className="lc-comparison-table">
              <thead>
                <tr>
                  <th>Metric / Goal</th>
                  <th>Traditional Dev</th>
                  <th>Low Code Dev</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="lc-metric-name">Delivery Timeline</td>
                  <td className="lc-traditional">Months to deliver</td>
                  <td className="lc-lowcode">Weeks to deliver</td>
                </tr>
                <tr>
                  <td className="lc-metric-name">Development Cost</td>
                  <td className="lc-traditional">High upfront cost</td>
                  <td className="lc-lowcode">Cost-effective builds</td>
                </tr>
                <tr>
                  <td className="lc-metric-name">Flexibility & Scaling</td>
                  <td className="lc-traditional">Hard to change later</td>
                  <td className="lc-lowcode">Flexible and scalable</td>
                </tr>
                <tr>
                  <td className="lc-metric-name">Team Resources</td>
                  <td className="lc-traditional">Requires large dev teams</td>
                  <td className="lc-lowcode">Lean team, fast execution</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="lc-comparison-outro">
            When your business changes — and it will — your app should change with it. Low code makes that easy.
          </p>
        </div>
      </section>

      {/* Traditional vs Low Code vs No Code Details Section */}
      <section className="lc-details-section">
        <div className="container">
          <div className="lc-details-grid">
            <div className="lc-detail-block">
              <h3>Why Not Just Build It the Traditional Way?</h3>
              <p>
                Traditional development absolutely has its place. But for a lot of business applications, it's overkill. You end up waiting months, spending more than you planned, and then realising you need to change something six weeks after launch.
              </p>
              <p>
                With low code app development in Brisbane as our approach, we typically deliver in weeks rather than months. And when your business changes — because it always does — updating the app is straightforward. You're not locked in.
              </p>
            </div>
            
            <div className="lc-detail-block">
              <h3>What About No Code?</h3>
              <p>
                Sometimes, low code is more than you need. For simpler workflows and automations, no code development in Brisbane gets the job done just as well — and faster.
              </p>
              <p>
                We don't push a particular platform or approach for its own sake. We look at what you're trying to achieve and recommend what actually makes sense. Brisbane no code development might be the answer, or it might be a mix of low code and no code working together. Either way, we'll tell you upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Team Section */}
      <section className="lc-team-section">
        <div className="container">
          <div className="lc-team-grid">
            <div className="lc-team-left">
              <span className="lc-label">Brisbane Presence</span>
              <h2>We're a Brisbane Team — That Actually Matters</h2>
              <p>
                There's a real difference between working with a local team versus sending requirements offshore and hoping for the best. We're based at 22 Hertford Street, Brisbane — and we work directly with you through the whole process.
              </p>
              <p>
                We do have delivery capability in India for larger builds, which keeps costs competitive. But the relationship, the scoping, the communication — that's all local. No timezone juggling, no lost-in-translation briefs.
              </p>
              
              <div className="lc-talk-block">
                <p><strong>Want to talk through what you're building?</strong> Reach out to the Infogenx team — we'll give you a straight answer on what's possible with low code app development in Brisbane.</p>
              </div>
            </div>

            <div className="lc-team-right">
              <div className="lc-contact-card">
                <h4>Infogenx Digital Solutions</h4>
                <div className="lc-contact-item">
                  <span className="lc-contact-icon">📍</span>
                  <span>22 Hertford Street, Brisbane QLD 4000</span>
                </div>
                <div className="lc-contact-item">
                  <span className="lc-contact-icon">📞</span>
                  <a href="tel:+61403331910" className="lc-phone-link">+61 403 331 910</a>
                </div>
                <div className="lc-contact-item">
                  <span className="lc-contact-icon">✉️</span>
                  <a href="mailto:contactus@infogenx.com" className="lc-email-link">contactus@infogenx.com</a>
                </div>
                <div className="lc-contact-item">
                  <span className="lc-contact-icon">⏰</span>
                  <span>Mon–Fri | 9:00 AM – 6:00 PM AEST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFaq faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentService={PATHS.lowCodeDevelopment} items={relatedItems} />
    </>
  );
};

export default LowCodeDevelopment;
