import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import { PATHS } from "../../../route/paths";
import appDevVideo from "../../../assets/videos/app-dev-hero.mp4";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.webp";
import "./BusinessIntelligence.css";

const BusinessIntelligence = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow speed for smooth feel
    }
  }, []);

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Business Intelligence", path: PATHS.businessIntelligence }
  ];

  const faqs = [
    {
      question: "1. What tools do you use for BI projects?",
      answer: "We work across leading BI platforms and match the right tool to your setup, data sources, and team capability — not just what we prefer to use."
    },
    {
      question: "2. Our data is a mess. Can you still help?",
      answer: "Yes — and honestly, that's pretty common. Data cleaning and structuring is part of the work, not an obstacle to it."
    },
    {
      question: "3. How long does a BI project take?",
      answer: "A focused dashboard or reporting solution can be delivered in 2 to 4 weeks. Larger data warehouse builds take longer — we scope that upfront so there are no surprises."
    },
    {
      question: "4. Do we need an in-house data team to maintain it?",
      answer: "Not necessarily. We build solutions with your team's capability in mind. If you need something your people can manage without ongoing support, we'll build it that way."
    },
    {
      question: "5. We already have some reporting in place. Can you build on that?",
      answer: "Absolutely. We work with what you have, improve what's not working, and fill the gaps — no need to start from scratch unless that's the right call."
    }
  ];

  const relatedItems = [
    {
      title: "Custom Software Development",
      description: "Build robust software built around real business operations.",
      link: PATHS.customSoftwareDevelopment
    },
    {
      title: "Low Code Development",
      description: "Build rapid applications, automations and portals.",
      link: PATHS.lowCodeDevelopment
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
        title="Business Intelligence Brisbane | BI Consulting & Data Analytics"
        description="Looking for business intelligence in Brisbane? We provide BI consulting, Power BI dashboards, and data analytics solutions to help businesses make smarter, data-driven decisions."
        keywords="brisbane business intelligence, data analytics brisbane, power bi brisbane, data warehouse brisbane, dashboards brisbane"
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="bi-hero">
        <img
          alt="corner accent"
          className="bi-corner-accent"
          src={AboutCornerAccent}
        />
        <div className="bi-container">
          <div className="bi-hero-left">
            <span className="bi-badge">Data & Analytics</span>
            <h1>Brisbane Business Intelligence: Infogenx Digital Solutions</h1>
            <p className="bi-hero-subtitle">Your Data Is Talking. Are You Listening?</p>
            <p>
              Most businesses are sitting on more data than they know what to do with. Sales numbers, customer behaviour, operational metrics, finance reports — it's all there. The problem isn't a lack of data. It's that it's scattered across different systems, hard to read, and even harder to act on. That's where Brisbane business intelligence comes in. At Infogenx Digital Solutions, we help businesses turn that scattered data into something genuinely useful — clear dashboards, reliable reports, and insights you can actually base decisions on.
            </p>
            <div className="bi-hero-buttons">
              <button
                className="bi-primary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Start Your Project
              </button>
              <button
                className="bi-secondary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>
          <div className="bi-hero-right">
            <div className="bi-video-wrapper">
              <div className="bi-video-bg"></div>
              <video
                src={appDevVideo}
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="bi-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is BI Section */}
      <section className="bi-intro-section">
        <div className="container">
          <div className="bi-intro-grid">
            <div className="bi-intro-left">
              <span className="bi-label">What is BI?</span>
              <h2>What We Mean by Brisbane Business Intelligence?</h2>
            </div>
            <div className="bi-intro-right">
              <p>
                BI isn't just about pretty charts. It's about giving the right people the right information at the right time — so your team stops guessing and starts moving with confidence.
              </p>
              <p>
                We build BI solutions that connect to your existing data sources, clean and structure the data properly, and present it in a way that makes sense to the people using it. Whether that's an executive dashboard, a sales performance tracker, or an operational reporting system — we build it to fit how your business actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help Businesses With Section */}
      <section className="bi-help-section">
        <div className="container">
          <div className="bi-section-header">
            <span className="bi-label">Core Services</span>
            <h2>What We Help Businesses With?</h2>
            <p className="bi-section-intro">
              As a Brisbane business intelligence team, we work across the full BI stack:
            </p>
          </div>
          <div className="bi-help-grid">
            
            {/* Card 1 */}
            <div className="bi-help-card">
              <div className="bi-help-icon-wrapper">
                <svg className="bi-help-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </div>
              <h3>Dashboards and Reporting</h3>
              <p>Live, visual dashboards that show you exactly what's happening in your business — right now, not at the end of the month when it's too late to act on it.</p>
            </div>

            {/* Card 2 */}
            <div className="bi-help-card">
              <div className="bi-help-icon-wrapper">
                <svg className="bi-help-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3>Data Integration</h3>
              <p>Most businesses are sitting on useful data spread across five different systems. We pull it all — CRMs, ERPs, spreadsheets, databases — into one clean source you can actually trust.</p>
            </div>

            {/* Card 3 */}
            <div className="bi-help-card">
              <div className="bi-help-icon-wrapper">
                <svg className="bi-help-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                </svg>
              </div>
              <h3>KPI Tracking</h3>
              <p>We help you define what success actually looks like for your business, then make sure you're tracking it consistently — not just when someone remembers to run a report.</p>
            </div>

            {/* Card 4 */}
            <div className="bi-help-card">
              <div className="bi-help-icon-wrapper">
                <svg className="bi-help-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>Self-Service BI</h3>
              <p>Your team shouldn't have to raise a ticket every time they need a number. We give them the tools to find answers themselves, without needing IT or a developer in the loop.</p>
            </div>

            {/* Card 5 */}
            <div className="bi-help-card">
              <div className="bi-help-icon-wrapper">
                <svg className="bi-help-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3>Data Warehousing</h3>
              <p>Good decisions need good history. We organise and store your data properly so it stays useful well beyond this quarter — and actually means something when you go looking for it.</p>
            </div>

          </div>
          <p className="bi-section-outro">
            We're part of the Infogenx Apps, Automation, AI and Data practice — which means your BI solution doesn't sit in isolation. It connects with the broader way your business runs.
          </p>
        </div>
      </section>

      {/* Why Choose Us / Approach Section (Dark Theme) */}
      <section className="bi-why-section">
        <div className="container">
          <div className="bi-section-header light">
            <span className="bi-label">Our Philosophy</span>
            <h2>Why Do Enterprises Come to Us For Their Business Intelligence Needs?</h2>
          </div>
          
          <div className="bi-why-grid">
            <div className="bi-why-block">
              <p>
                There's no shortage of BI consultants. But a lot of them either over-engineer the solution, push a platform that doesn't suit you, or disappear after delivery.
              </p>
              <p>
                We take a different approach. We start with the business problem — what decisions do you need to make, and what information do you actually need to make them? Then we build around that. Not the other way around.
              </p>
            </div>
            <div className="bi-why-block">
              <p>
                Being a local Brisbane business intelligence team means we can sit down with you, understand your operations properly, and stay involved.
              </p>
              <p>
                We also have a delivery team in India, which keeps the cost of larger builds competitive without compromising on quality or communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Makers & Local presence Section */}
      <section className="bi-team-section">
        <div className="container">
          <div className="bi-team-grid">
            <div className="bi-team-left">
              <span className="bi-label">Built for Humans</span>
              <h2>Built for Decision-Makers, Not Just Data Teams</h2>
              <p>
                The best BI setup is one your people actually use. We design with the end user in mind — whether that's a CEO checking performance on a Monday morning or an ops manager who needs granular detail across multiple locations.
              </p>
              <p>
                If your team currently relies on manual spreadsheets, copied-and-pasted reports, or just gut feel — there's a better way. Brisbane business intelligence done right puts the right numbers in front of the right people, automatically.
              </p>
              
              <div className="bi-talk-block">
                <p><strong>Ready to actually use your data?</strong> Get in touch with the Infogenx team today.</p>
              </div>
            </div>

            <div className="bi-team-right">
              <div className="bi-contact-card">
                <h4>Infogenx Digital Solutions</h4>
                <div className="bi-contact-item">
                  <span className="bi-contact-icon">📍</span>
                  <span>22 Hertford Street, Brisbane QLD 4000</span>
                </div>
                <div className="bi-contact-item">
                  <span className="bi-contact-icon">📞</span>
                  <a href="tel:+61403331910" className="bi-phone-link">+61 403 331 910</a>
                </div>
                <div className="bi-contact-item">
                  <span className="bi-contact-icon">✉️</span>
                  <a href="mailto:contactus@infogenx.com" className="bi-email-link">contactus@infogenx.com</a>
                </div>
                <div className="bi-contact-item">
                  <span className="bi-contact-icon">⏰</span>
                  <span>Monday to Friday, 9am to 6pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFaq faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentService={PATHS.businessIntelligence} items={relatedItems} />
    </>
  );
};

export default BusinessIntelligence;
