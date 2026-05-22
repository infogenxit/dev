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
      question: "1. We're a mid-sized business — is AI even relevant for us?",
      answer: "Very much so. Mid-sized businesses often see the fastest ROI from AI because there's enough volume to automate but processes are still flexible enough to change quickly."
    },
    {
      question: "2. How do we know if our data is good enough to use?",
      answer: "We assess this during scoping. Data quality issues are common and usually fixable — it's rarely a dealbreaker."
    },
    {
      question: "3. What's a realistic timeline for an AI project?",
      answer: "A focused solution — like an AI automation or a predictive report — typically takes 3 to 6 weeks. More complex builds are scoped individually."
    },
    {
      question: "4. Do you support the solution after it's live?",
      answer: "Yes. We offer ongoing support and can continue iterating as your needs evolve."
    },
    {
      question: "5. Can you work with our existing IT team or software vendors?",
      answer: "Absolutely. We collaborate with internal teams and third-party vendors regularly — it's rarely a clean greenfield project and we're used to that."
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
        title="Artificial Intelligence Brisbane | AI Consulting & Automation Solutions"
        description="Looking for artificial intelligence solutions in Brisbane? We provide AI consulting, automation, machine learning, and intelligent business solutions to improve efficiency and growth."
        keywords="brisbane artificial intelligence, artificial intelligence brisbane, machine learning brisbane, ai consulting brisbane, ai developers brisbane"
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
            <h1>Artificial Intelligence in Brisbane: Infogenx Digital Solutions</h1>
            <p className="ai-hero-subtitle">Stop Running on Gut Feel. Start Running on Intelligence.</p>
            <p>
              Every day, your business is generating data. From customer interactions to operational processes to financial transactions — it's all there. But if your team is still making decisions based on instinct, outdated reports, or whatever landed in the inbox this morning, you're leaving real value on the table. Artificial intelligence in Brisbane is no longer something only enterprise companies with massive IT budgets can access. At Infogenx Digital Solutions, we make it practical and accessible for businesses of all sizes — built around what you actually need, not what sounds impressive.
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
              <h3>Document & Data Extraction</h3>
              <p>Invoices, contracts, forms, emails — if your team is manually reading and entering data from any of these, that's time being spent on something AI can handle reliably. We set it up to read, classify and extract automatically, without anyone touching it.</p>
            </div>

            {/* Card 2 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3>AI Chatbots & Assistants</h3>
              <p>Customer queries at 11pm, internal helpdesk requests piling up, leads sitting unanswered over the weekend — an AI assistant handles all of it consistently, around the clock, without adding headcount.</p>
            </div>

            {/* Card 3 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3>Predictive Modelling</h3>
              <p>Most business problems don't appear overnight. We build models that spot the warning signs early — a deal that's unlikely to close, a customer showing churn behaviour, an operational issue quietly building — so you can act before it gets expensive.</p>
            </div>

            {/* Card 4 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                </svg>
              </div>
              <h3>Process Intelligence</h3>
              <p>If something in your workflow is slower than it should be, there's usually a reason — it's just not always obvious from the inside. We use AI-driven analysis to find where time and effort are actually being lost, and show you what's worth fixing first.</p>
            </div>

            {/* Card 5 */}
            <div className="ai-apply-card">
              <div className="ai-apply-icon-wrapper">
                <svg className="ai-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>AI-Enhanced Reporting</h3>
              <p>Static monthly reports tell you what already happened. We move you to dynamic dashboards that surface what actually needs your attention right now — the things that matter, not just the things that are easy to measure.</p>
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
              <h4>Define the problem clearly</h4>
              <p>Before any technology decisions, we understand what's actually broken or inefficient in your business.</p>
            </div>
            
            <div className="ai-step-card">
              <div className="ai-step-num">02</div>
              <h4>Match the right solution</h4>
              <p>Not every problem needs a complex AI model. Sometimes a well-structured automation with smart logic is the better answer. We'll tell you honestly which applies.</p>
            </div>

            <div className="ai-step-card">
              <div className="ai-step-num">03</div>
              <h4>Build lean and iterate</h4>
              <p>We start with a focused scope, deliver something working, then build from there. No six-month waits before you see anything.</p>
            </div>

            <div className="ai-step-card">
              <div className="ai-step-num">04</div>
              <h4>Make it usable</h4>
              <p>The best artificial intelligence in Brisbane solution is one your team adopts. We design for real users, not just technical specs.</p>
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
                  <a href="tel:+61403331910" className="ai-phone-link">+61 403 331 910</a>
                </div>
                <div className="ai-contact-item">
                  <span className="ai-contact-icon">✉️</span>
                  <a href="mailto:contactus@infogenx.com" className="ai-email-link">contactus@infogenx.com</a>
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
