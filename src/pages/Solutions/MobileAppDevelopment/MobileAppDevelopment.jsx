import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import { PATHS } from "../../../route/paths";
import appDevVideo from "../../../assets/videos/app-dev-hero.mp4";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.webp";
import "./MobileAppDevelopment.css";

const MobileAppDevelopment = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow speed for smooth feel
    }
  }, []);

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Mobile App Development", path: PATHS.mobileAppDevelopmentNew }
  ];

  const faqs = [
    {
      question: "1. Do you build both iOS and Android mobile apps?",
      answer: "Yes. We develop for both platforms. Whether you need a native build, a cross-platform solution, or a mobile-responsive web app depends on your use case — we'll recommend the right approach based on your requirements, not what's easiest for us to build."
    },
    {
      question: "2. Can the mobile app connect with our Zoho or Microsoft systems?",
      answer: "Straight answer — yes, and it's one of the main reasons clients come to us. Our mobile application development in Brisbane team holds national partner status on Zoho, Microsoft, and Odoo. These integrations are scoped in from the start, not figured out after the build."
    },
    {
      question: "3. We're a small-to-mid size business — is custom mobile development realistic for us?",
      answer: "It depends on the scope. We work with businesses at different stages and size our engagements accordingly. A focused, well-scoped mobile app development project doesn't have to be a six-figure undertaking. We'll tell you honestly what's feasible in the first conversation."
    },
    {
      question: "4. What industries do you have mobile app experience in?",
      answer: "Healthcare, retail, manufacturing, finance, and transport and logistics — with real apps deployed in each, not just demo builds. If you're in one of these sectors, we already know the operational and compliance landscape."
    }
  ];

  const relatedItems = [
    {
      title: "Custom Software Development",
      description: "Build robust desktop and enterprise software solutions to run critical operations.",
      link: PATHS.customSoftwareDevelopment
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
        title="Mobile App Development Brisbane | iOS, Android & Custom Apps"
        description="Looking for mobile app development in Brisbane? We design and develop custom iOS and Android apps that are scalable, user-friendly, and built to grow your business."
        keywords="mobile application development brisbane, mobile app development in brisbane, mobile app development brisbane, brisbane mobile app development"
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="ma-hero">
        <img
          alt="corner accent"
          className="ma-corner-accent"
          src={AboutCornerAccent}
        />
        <div className="ma-container">
          <div className="ma-hero-left">
            <span className="ma-badge">Mobile Engineering</span>
            <h1>Mobile Application Development in Brisbane: Infogenx Digital Solutions</h1>
            <p>
              Most mobile apps fail not because they look bad — they fail because they sit disconnected from the rest of the business. Infogenx Digital Solutions builds mobile application development in Brisbane that businesses depend on for field operations, customer engagement, and internal productivity — integrated from day one with Microsoft, Zoho, and Odoo platforms so your mobile app is part of your operation, not separate from it.
            </p>
            <div className="ma-hero-buttons">
              <button
                className="ma-primary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Start Your Project
              </button>
              <button
                className="ma-secondary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>
          <div className="ma-hero-right">
            <div className="ma-video-wrapper">
              <div className="ma-video-bg"></div>
              <video
                src={appDevVideo}
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="ma-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="ma-build-section">
        <div className="container">
          <div className="ma-section-header">
            <span className="ma-label">What We Build</span>
            <h2>Mobile Application Development in Brisbane With Business-First Thinking: What We Build</h2>
          </div>
          <div className="ma-build-grid">
            
            {/* Card 1 */}
            <div className="ma-build-card">
              <div className="ma-build-icon-wrapper">
                <svg className="ma-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Customer-Facing Mobile Apps</h3>
              <p>
                Whether you need a branded app for your retail customers or a service platform for your clients, we build something that feels smooth, loads fast, and stays connected to your real data — not a static shell.
              </p>
            </div>

            {/* Card 2 */}
            <div className="ma-build-card">
              <div className="ma-build-icon-wrapper">
                <svg className="ma-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3>ERP & CRM-Integrated Mobile Apps</h3>
              <p>
                This is where our mobile app development in Brisbane work stands apart. As a national partner for Microsoft, Zoho, and Odoo, we build mobile applications that connect natively with Odoo ERP, Zoho CRM, Microsoft Dynamics, and Power Platform — not through fragile workarounds, but through proper, certified integrations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="ma-build-card">
              <div className="ma-build-icon-wrapper">
                <svg className="ma-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3>Retail & POS Mobile Solutions</h3>
              <p>
                For retail businesses needing mobile point-of-sale, inventory lookup, or stock management on handheld devices, we've already built and deployed systems in this space. Purpose-built for Australian retail environments.
              </p>
            </div>

            {/* Card 4 */}
            <div className="ma-build-card">
              <div className="ma-build-icon-wrapper">
                <svg className="ma-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Workflow Automation Apps</h3>
              <p>
                Automation goes in during the build, not as an afterthought. Approvals trigger on their own, data syncs without anyone touching it, and your team gets back the time they were losing to admin.
              </p>
            </div>

            {/* Card 5 */}
            <div className="ma-build-card">
              <div className="ma-build-icon-wrapper">
                <svg className="ma-build-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a2 2 0 114 0v1a2 2 0 01-2 2h-8a2 2 0 01-2-2v-1a2 2 0 012-2h8z" />
                </svg>
              </div>
              <h3>API-Connected Mobile Platforms</h3>
              <p>
                If you're running several systems that don't talk to each other, a well-built mobile app can fix that. We design the API layer so your mobile platform stays in sync with everything connected to it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Build For Section */}
      <section className="ma-industries-section">
        <div className="container">
          <div className="ma-section-header light">
            <span className="ma-label">Proven Expertise</span>
            <h2>Industries We Build Mobile Apps For</h2>
            <p className="ma-section-intro">
              Our Brisbane mobile app development work spans:
            </p>
          </div>

          <div className="ma-industries-grid">
            
            {/* Healthcare */}
            <div className="ma-industry-card">
              <div className="ma-ind-icon-wrapper">
                <svg className="ma-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3>Healthcare</h3>
              <p>Clinical workflows, patient management tools, secure data capture for field and facility staff</p>
            </div>

            {/* Retail */}
            <div className="ma-industry-card">
              <div className="ma-ind-icon-wrapper">
                <svg className="ma-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3>Retail</h3>
              <p>Mobile POS, inventory management apps, customer loyalty platforms</p>
            </div>

            {/* Manufacturing */}
            <div className="ma-industry-card">
              <div className="ma-ind-icon-wrapper">
                <svg className="ma-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                </svg>
              </div>
              <h3>Manufacturing</h3>
              <p>Production floor tools, quality inspection apps, ERP-connected operations platforms</p>
            </div>

            {/* Finance */}
            <div className="ma-industry-card">
              <div className="ma-ind-icon-wrapper">
                <svg className="ma-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                </svg>
              </div>
              <h3>Finance</h3>
              <p>Secure mobile reporting, approval workflows, compliance-ready applications</p>
            </div>

            {/* Transport & Logistics */}
            <div className="ma-industry-card">
              <div className="ma-ind-icon-wrapper">
                <svg className="ma-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1" />
                </svg>
              </div>
              <h3>Transport & Logistics</h3>
              <p>Driver and fleet management apps, real-time tracking, dispatch and delivery tools</p>
            </div>

          </div>

          <p className="ma-section-outro">
            These are sectors we've built for before. The compliance requirements, data structures, and integration demands aren't new to us.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="ma-why-choose-section">
        <div className="container">
          <div className="ma-why-choose-grid">
            <div className="ma-why-left">
              <span className="ma-label">The Infogenx Advantage</span>
              <h2>Why Choose Infogenx Digital Solutions for Mobile App Development?</h2>
              
              <p className="ma-why-intro-p">
                When your mobile app development in Brisbane is handled by a team that already holds platform certifications and has deployed real products in your industry, the risk profile of your project drops significantly.
              </p>

              {/* Contact Details Widget */}
              <div className="ma-contact-widget">
                <h4>Infogenx Digital Solutions</h4>
                <div className="ma-contact-item">
                  <span className="ma-contact-icon">📞</span>
                  <a href="tel:+61403331910" className="ma-phone-link">+61 403 331 910</a>
                </div>
                <div className="ma-contact-item">
                  <span className="ma-contact-icon">✉️</span>
                  <a href="mailto:contactus@infogenx.com" className="ma-email-link">contactus@infogenx.com</a>
                </div>
                <div className="ma-contact-item">
                  <span className="ma-contact-icon">⏰</span>
                  <span>Mon–Fri | 9:00 AM – 6:00 PM AEST</span>
                </div>
              </div>
            </div>

            <div className="ma-why-right">
              <div className="ma-bullets-container">
                <div className="ma-bullet-item">
                  <div className="ma-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Certified national partner across Microsoft, Zoho, and Odoo — not self-declared</p>
                </div>

                <div className="ma-bullet-item">
                  <div className="ma-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>End-to-end service — consulting, design, build, integration, testing, deployment, and support</p>
                </div>

                <div className="ma-bullet-item">
                  <div className="ma-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Own product portfolio already live in market across stock management, ERP, POS, and CRM</p>
                </div>

                <div className="ma-bullet-item">
                  <div className="ma-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Transparent scoping — you know exactly what's being built and when before development starts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFaq faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentService={PATHS.mobileAppDevelopmentNew} items={relatedItems} />
    </>
  );
};

export default MobileAppDevelopment;
