import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import { PATHS } from "../../../route/paths";
import appDevVideo from "../../../assets/videos/app-dev-hero.mp4";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.webp";
import "./ArtificialIntelligence.css";

const ArtificialIntelligence = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow speed for smooth feel
    }
  }, []);

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Artificial Intelligence", path: PATHS.artificialIntelligenceNew }
  ];

  const faqs = [
    {
      question: "1. Do we need a lot of data to get started?",
      answer: "Not always. It depends on the problem. We assess this upfront and recommend the right approach for what you actually have — not what an ideal scenario would look like."
    },
    {
      question: "2. How long does a build take?",
      answer: "Proof of concept: six to ten weeks. Full production build: three to six months depending on complexity. We scope clearly from day one so you're never guessing."
    },
    {
      question: "3. Why not just use an off-the-shelf AI tool?",
      answer: "Generic tools give generic results. A custom build is trained on your data, built around your workflows, and owned by you. It outperforms a subscription tool on your specific problem every time."
    },
    {
      question: "4. What if we don't know exactly what we need?",
      answer: "That's fine — most clients don't when they first reach out. The discovery session is specifically designed to figure that out together."
    },
    {
      question: "5. What happens after launch?",
      answer: "We monitor, maintain, and improve. AI isn't a handover job. Models need tuning as your data evolves and we stay on top of that as part of the engagement."
    }
  ];

  const relatedItems = [
    {
      title: "Business Intelligence",
      description: "Turn raw numbers into actionable dashboards and reporting tools.",
      link: PATHS.businessIntelligence
    },
    {
      title: "Intelligent Automation",
      description: "Orchestrate automated workflows across your newly connected platforms.",
      link: PATHS.intelligentAutomation
    },
    {
      title: "API Integration",
      description: "Connect your business ecosystem with seamless API-first solutions.",
      link: PATHS.apiIntegration
    }
  ];

  return (
    <>
      <SEO
        title="Brisbane AI Development | Infogenx"
        description="AI that actually does something for your business. Not just demos and buzzwords. Our Brisbane AI Development services build AI solutions that fit how your business works."
        keywords="artificial intelligence, machine learning, AI solutions, cognitive computing, Infogenx, AI development Brisbane"
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="ai-hero">
        <img
          alt="corner accent"
          className="ai-corner-accent"
          src={AboutCornerAccent}
        />
        <div className="ai-container">
          <div className="ai-hero-left">
            <span className="ai-badge">Artificial Intelligence</span>
            <h1>Brisbane AI Development: Infogenx</h1>
            <p className="ai-hero-subtitle">AI that actually does something for your business. Not just demos and buzzwords.</p>
            <p>
              Most businesses are sitting on data they don't use, processes that take too long, and decisions made on gut feel instead of numbers. That's exactly where good AI development changes the game. At Infogenx, we provide Brisbane AI Development services that build AI solutions that fit how your business works, not how a vendor's product brochure says it should.
            </p>
            <div className="ai-hero-buttons">
              <button
                className="ai-primary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Start Your Project
              </button>
              <button
                className="ai-secondary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>
          <div className="ai-hero-right">
            <div className="ai-video-wrapper">
              <div className="ai-video-bg"></div>
              <video
                src={appDevVideo}
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="ai-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Intro Section */}
      <section className="ai-intro-section">
        <div className="container">
          <div className="ai-intro-grid">
            <div className="ai-intro-left">
              <span className="ai-label">Practical Outcomes</span>
              <h2>Building Brisbane Artificial Intelligence Solutions That Works</h2>
            </div>
            <div className="ai-intro-right">
              <p>
                The market is flooded with AI promises right now. And most businesses we speak to have either been burned by an over-complicated project that went nowhere, or they're still on the sidelines waiting for it to "mature."
              </p>
              <p>
                Here's the truth — Brisbane artificial intelligence solutions are already mature enough to deliver real, measurable outcomes. The key is knowing where to apply them and building them properly from the start. That's exactly what we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Apply AI Section */}
      <section className="ai-apply-section">
        <div className="container">
          <div className="ai-section-header">
            <span className="ai-label">AI Applications</span>
            <h2>Where We Apply AI in Your Business</h2>
            <p className="ai-section-intro">
              We're a team working across Apps, Automation, AI and Data. That means we don't parachute in with a single AI tool and leave. We understand how your data flows, how your systems connect, and how your people work — then we build AI into that picture. Practical AI solutions we deliver:
            </p>
          </div>
          <div className="ai-apply-grid">
            
            {/* Card 1 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3>Custom Machine Learning Models</h3>
              <p>Trained on your data. Built for your problem. Whether it's predicting customer churn, spotting demand shifts, or flagging risk — we build models that give you answers your off-the-shelf tools never could.</p>
            </div>

            {/* Card 2 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3>AI-Powered Applications</h3>
              <p>Smart search, personalisation, recommendation engines, automated decisions — we embed AI directly into your web or mobile product so it works where your customers already are.</p>
            </div>

            {/* Card 3 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3>NLP & Document Intelligence</h3>
              <p>Contracts, invoices, support tickets, customer feedback — we build systems that read and process text at scale, so your team isn't doing it manually.</p>
            </div>

            {/* Card 4 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                </svg>
              </div>
              <h3>Custom AI Chatbots</h3>
              <p>Trained on your products, policies, and tone. Not a generic bot. One that handles real queries without your staff needing to step in every five minutes.</p>
            </div>

            {/* Card 5 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Predictive Analytics</h3>
              <p>Sales forecasts, inventory planning, maintenance schedules — we turn your historical data into forward-looking intelligence that helps you make better calls faster.</p>
            </div>

            {/* Card 6 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3>AI Integrations</h3>
              <p>Already have a CRM, ERP, or internal platform? We connect AI directly into your existing stack. No need to rebuild what's already working.</p>
            </div>

          </div>
        </div>
      </section>

      {/* AI Approach Section (Glow Cards/Steps) */}
      <section className="ai-approach-section">
        <div className="container">
          <div className="ai-section-header light">
            <span className="ai-label">Execution Path</span>
            <h2>The Infogenx Approach to AI Projects</h2>
            <p className="ai-section-intro">
              We've seen what happens when AI projects are scoped poorly — months of work, significant spend, and an outcome nobody uses. Our approach is built to avoid exactly that.
            </p>
          </div>
          
          <div className="ai-steps-grid">
            <div className="ai-step-card">
              <div className="ai-step-num">01</div>
              <h4>Discovery</h4>
              <p>We look at your data, your workflows, and your biggest pain points. We tell you honestly whether AI is the right answer — and if it is, exactly what to build first.</p>
            </div>
            
            <div className="ai-step-card">
              <div className="ai-step-num">02</div>
              <h4>Proof of Concept</h4>
              <p>Before full commitment, we build something small and real. You see it working in your environment. Typical turnaround: six to ten weeks.</p>
            </div>

            <div className="ai-step-card">
              <div className="ai-step-num">03</div>
              <h4>Full Build & Deployment</h4>
              <p>Once validated, we build production-ready. Tested hard. Integrated cleanly. No surprises at launch.</p>
            </div>

            <div className="ai-step-card">
              <div className="ai-step-num">04</div>
              <h4>Ongoing Support</h4>
              <p>AI needs maintenance. Models drift, data changes, business needs shift. We stay involved after go-live — that's not optional for us, it's part of how we work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Presence & Team Section */}
      <section className="ai-team-section">
        <div className="container">
          <div className="ai-team-grid">
            <div className="ai-team-left">
              <span className="ai-label">Brisbane CBD & Global Delivery</span>
              <h2>Brisbane-Based, Nationally Delivered</h2>
              <p>
                We operate from 22 Hertford Street, Brisbane QLD 4000 and work with businesses across Australia. For larger builds, our India delivery team keeps costs competitive — but the scoping, communication and relationship stays local.
              </p>
              <p>
                When you work with Infogenx, you deal directly with the people building your solution. No account managers, no handoffs, no lost context.
              </p>
              
              <div className="ai-talk-block">
                <p><strong>Want to cut through the AI noise and find out what's actually worth building for your business?</strong> Talk to the Infogenx team for adapting artificial intelligence in Brisbane.</p>
              </div>
            </div>

            <div className="ai-team-right">
              <div className="ai-contact-card">
                <h4>Infogenx Digital Solutions</h4>
                <div className="ai-contact-item">
                  <span className="ai-contact-icon">📍</span>
                  <span>22 Hertford Street, Brisbane QLD 4000</span>
                </div>
                <div className="ai-contact-item">
                  <span className="ai-contact-icon">📞</span>
                  <a href="tel:+61403339424" className="ai-phone-link">+61 403 339 424</a>
                </div>
                <div className="ai-contact-item">
                  <span className="ai-contact-icon">✉️</span>
                  <a href="mailto:reachus@infogenx.com" className="ai-email-link">reachus@infogenx.com</a>
                </div>
                <div className="ai-contact-item">
                  <span className="ai-contact-icon">⏰</span>
                  <span>Monday – Friday, 9am to 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFaq faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentService={PATHS.artificialIntelligenceNew} items={relatedItems} />
    </>
  );
};

export default ArtificialIntelligence;
