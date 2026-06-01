import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import { PATHS } from "../../../route/paths";
import appDevVideo from "../../../assets/videos/app-dev-hero.mp4";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.webp";
import "./MachineLearning.css";

const MachineLearning = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow speed for smooth feel
    }
  }, []);

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Machine Learning", path: PATHS.machineLearning }
  ];

  const faqs = [
    {
      question: "1. How much data do we need before machine learning is worth it?",
      answer: "It depends on the model type and the problem. Some approaches work well with a few thousand records. Others need more. We review your data in the discovery session and tell you clearly what is workable and what is not."
    },
    {
      question: "2. How is machine learning different from standard reporting and analytics?",
      answer: "Reporting tells you what happened. Machine learning tells you what is likely to happen next and why. It finds patterns in data that no human analyst would spot manually, and it gets sharper over time as more data flows through."
    },
    {
      question: "3. How long does a Brisbane machine learning project take?",
      answer: "A scoped proof of concept typically takes six to ten weeks. A full production system takes three to six months depending on complexity. We set clear timelines from the start and stick to them."
    },
    {
      question: "4. Will the model keep working as our business changes?",
      answer: "Only if it is maintained properly. We offer ongoing model monitoring and retraining as part of our post launch support. Without that, accuracy drifts. With it, performance holds and often improves."
    },
    {
      question: "5. Do we need our own data infrastructure before getting started?",
      answer: "Not necessarily. We work with what you have and help you structure it correctly if needed. If there are infrastructure gaps that would limit what we can build, we flag those early so nothing surprises you later."
    }
  ];

  const relatedItems = [
    {
      title: "Artificial Intelligence",
      description: "Build custom intelligent agents, chatbots, and advanced cognitive automation.",
      link: PATHS.artificialIntelligenceNew
    },
    {
      title: "Intelligent Automation",
      description: "Orchestrate automated workflows across your newly connected platforms.",
      link: PATHS.intelligentAutomation
    },
    {
      title: "Business Intelligence",
      description: "Turn raw numbers into actionable dashboards and reporting tools.",
      link: PATHS.businessIntelligence
    }
  ];

  return (
    <>
      <SEO
        title="Machine Learning in Brisbane | Infogenx"
        description="Your data already has the answers. You just need the right system to read them. Infogenx builds models and systems grounded in your actual business needs."
        keywords="machine learning brisbane, machine learning solutions, predictive models, computer vision, natural language processing, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="ml-hero">
        <img
          alt="corner accent"
          className="ml-corner-accent"
          src={AboutCornerAccent}
        />
        <div className="ml-container">
          <div className="ml-hero-left">
            <span className="ml-badge">Machine Learning</span>
            <h1>Machine Learning in Brisbane: Infogenx</h1>
            <p className="ml-hero-subtitle">Your data already has the answers. You just need the right system to read them.</p>
            <p>
              Every day your business generates data. Sales numbers, customer behaviour, operational patterns, financial movements. Most of it sits unused. A well built machine learning solution changes that. It turns raw data into decisions, predictions, and real competitive advantage. Infogenx is a trusted IT company that provides services related to machine learning in Brisbane that builds models and systems grounded in your actual business needs. Not theoretical. Not experimental. Built to perform in the real world.
            </p>
            <div className="ml-hero-buttons">
              <button
                className="ml-primary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Start Your Project
              </button>
              <button
                className="ml-secondary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>
          <div className="ml-hero-right">
            <div className="ml-video-wrapper">
              <div className="ml-video-bg"></div>
              <video
                src={appDevVideo}
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="ml-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ML Intro Section */}
      <section className="ml-intro-section">
        <div className="container">
          <div className="ml-intro-grid">
            <div className="ml-intro-left">
              <span className="ml-label">Data Intelligence</span>
              <h2>Turning Raw Data Into Real Competitive Advantage</h2>
            </div>
            <div className="ml-intro-right">
              <p>
                Machine learning isn't just about code; it's about translating business context into mathematics that can find patterns and forecast outcomes. Most organizations collect vast amounts of data but lack the dedicated systems to extract its true value.
              </p>
              <p>
                Infogenx builds custom models tailored directly to your operational workflows, ensuring that the outputs of your machine learning systems translate directly into better decisions, higher efficiency, and automated workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="ml-apply-section">
        <div className="container">
          <div className="ml-section-header">
            <span className="ml-label">Machine Learning Capabilities</span>
            <h2>What We Build As A Machine Learning Company in Brisbane</h2>
            <p className="ml-section-intro">
              We cover the full spectrum of modern machine learning techniques, from predictive analytics to computer vision, designed to integrate seamlessly into your existing platforms.
            </p>
          </div>
          <div className="ml-apply-grid">
            
            {/* Card 1 */}
            <div className="ml-apply-card">
              <div className="ml-apply-icon-wrapper">
                <svg className="ml-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3>Predictive Models</h3>
              <p>Know what is likely to happen before it does. Customer churn, stock demand, payment defaults, equipment failure. We build models that forecast outcomes so you can act early instead of reacting late.</p>
            </div>

            {/* Card 2 */}
            <div className="ml-apply-card">
              <div className="ml-apply-icon-wrapper">
                <svg className="ml-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                </svg>
              </div>
              <h3>Classification Systems</h3>
              <p>Automatically sort, tag, and categorise data at scale. Customer segments, support tickets, transaction types, risk levels. Work that used to take your team hours gets handled in seconds with our solutions of machine learning in Brisbane.</p>
            </div>

            {/* Card 3 */}
            <div className="ml-apply-card">
              <div className="ml-apply-icon-wrapper">
                <svg className="ml-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3>Recommendation Engines</h3>
              <p>Show customers more of what they actually want. We build recommendation systems that improve conversion, increase average order value, and keep users engaged longer.</p>
            </div>

            {/* Card 4 */}
            <div className="ml-apply-card">
              <div className="ml-apply-icon-wrapper">
                <svg className="ml-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Anomaly Detection</h3>
              <p>Catch problems before they become expensive. Fraud patterns, system failures, quality control issues, unusual financial activity. Our models flag outliers the moment they appear.</p>
            </div>

            {/* Card 5 */}
            <div className="ml-apply-card">
              <div className="ml-apply-icon-wrapper">
                <svg className="ml-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3>Natural Language Processing</h3>
              <p>Makes sense of unstructured text. Contracts, reviews, emails, support queries. We build NLP models that extract meaning, sentiment, and actionable information from language at scale.</p>
            </div>

            {/* Card 6 */}
            <div className="ml-apply-card">
              <div className="ml-apply-icon-wrapper">
                <svg className="ml-apply-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3>Computer Vision</h3>
              <p>Give your systems the ability to interpret images and video. Quality inspection on production lines, identity verification, visual search, real time monitoring. We build vision models that are accurate, fast, and production ready.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="ml-approach-section">
        <div className="container">
          <div className="ml-section-header light">
            <span className="ml-label">Our Workflow</span>
            <h2>Our Workflow Process</h2>
            <p className="ml-section-intro">
              Building a model is only half the battle. We focus on structured processes that guarantee safety, predictability, and deployment success.
            </p>
          </div>
          
          <div className="ml-steps-grid">
            <div className="ml-step-card">
              <div className="ml-step-num">01</div>
              <h4>Discovery First</h4>
              <p>We spend time understanding your data, your workflows, and the specific problem you are trying to solve. No assumptions. No generic templates.</p>
            </div>
            
            <div className="ml-step-card">
              <div className="ml-step-num">02</div>
              <h4>Proof of Concept</h4>
              <p>Before any large commitment, we validate the approach with a focused pilot. You see it working on your real data before anything scales.</p>
            </div>

            <div className="ml-step-card">
              <div className="ml-step-num">03</div>
              <h4>Production Build</h4>
              <p>Clean code. Proper testing. Integrated into your existing systems. We do not cut corners on reliability because a model that behaves unpredictably in production is worse than no model at all.</p>
            </div>

            <div className="ml-step-card">
              <div className="ml-step-num">04</div>
              <h4>Ongoing Maintenance</h4>
              <p>Models degrade over time as data changes. We monitor performance after launch and retrain or adjust as your business evolves. Long term, not just at handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Presence & Team Section */}
      <section className="ml-team-section">
        <div className="container">
          <div className="ml-team-grid">
            <div className="ml-team-left">
              <span className="ml-label">Brisbane CBD & Global Delivery</span>
              <h2>Why Choose Infogenx as Your Machine Learning Company in Brisbane?</h2>
              <p>
                We are based in Brisbane. We understand the local market, the compliance requirements, and the pace at which Queensland businesses need to move.
              </p>
              <p>
                Our team handles the full scope in house. Data preparation, model development, infrastructure, deployment, and integration. You are not managing three different vendors to get one outcome.
              </p>
              <p>
                We give you honest advice upfront. If machine learning is not the right fit for what you are trying to solve, we will tell you that before you spend anything.
              </p>
              
              <div className="ml-talk-block">
                <p><strong>Ready to explore how Machine Learning can optimize your business operations?</strong> Talk to our Brisbane team to schedule your free consultation.</p>
              </div>
            </div>

            <div className="ml-team-right">
              <div className="ml-contact-card">
                <h4>Infogenx Digital Solutions</h4>
                <div className="ml-contact-item">
                  <span className="ml-contact-icon">📍</span>
                  <span>22 Hertford Street, Brisbane QLD 4000</span>
                </div>
                <div className="ml-contact-item">
                  <span className="ml-contact-icon">📞</span>
                  <a href="tel:+61403339424" className="ml-phone-link">+61 403 339 424</a>
                </div>
                <div className="ml-contact-item">
                  <span className="ml-contact-icon">✉️</span>
                  <a href="mailto:reachus@infogenx.com" className="ml-email-link">reachus@infogenx.com</a>
                </div>
                <div className="ml-contact-item">
                  <span className="ml-contact-icon">⏰</span>
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
      <RelatedServices currentService={PATHS.machineLearning} items={relatedItems} />
    </>
  );
};

export default MachineLearning;
