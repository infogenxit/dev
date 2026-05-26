import React from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import { PATHS } from "../../../route/paths";
import customSoftwareHero from "../../../assets/images/custom_software_hero.png";
import AboutCornerAccent from "../../../assets/images/about-corner-accent.webp";
import "./CustomSoftwareDevelopment.css";

const CustomSoftwareDevelopment = () => {
  const navigate = useNavigate();

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Custom Software Development", path: PATHS.customSoftwareDevelopment }
  ];

  const faqs = [
    {
      question: "1. How is custom software development different from buying an off-the-shelf product?",
      answer: "Off-the-shelf software is designed for the average business. Custom software is designed for yours — your processes, your data, your people. Instead of reshaping the way you work to fit a product, you get a product that fits the way you already work."
    },
    {
      question: "2. Can you build custom software that integrates with our existing Microsoft or Odoo setup?",
      answer: "Yes. We hold national partner status on both platforms. Integration with Microsoft 365, Dynamics, Power Platform, Odoo ERP, and Zoho is part of how we scope every custom software development project — from the design stage, not bolted on at the end."
    },
    {
      question: "3. Do you have experience in our industry?",
      answer: "We've delivered software across healthcare, retail, manufacturing, finance, and transport and logistics. If you're in one of these sectors, we're already familiar with the compliance, workflow, and integration demands that come with it."
    },
    {
      question: "4. How long does a custom software project take?",
      answer: "It depends on scope, but we define that clearly upfront. You get a detailed delivery plan before a line of code is written — no vague timelines, no scope creep surprises mid-project."
    },
    {
      question: "5. What happens after the software is delivered?",
      answer: "We provide managed services and ongoing support as standard. Custom built software in Brisbane that businesses rely on needs to stay maintained — we handle updates, performance monitoring, and integration changes so you're not left managing it alone."
    }
  ];

  const relatedItems = [
    {
      title: "Modern Applications",
      description: "Build robust applications designed for seamless integration and performance.",
      link: PATHS.modernApplications
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
        title="Custom Software Development Brisbane | Tailored Business Solutions"
        description="Looking for custom software development in Brisbane? We build tailored, scalable, and secure software solutions designed to meet your unique business needs and improve efficiency."
        keywords="custom software development brisbane, custom software brisbane, odoo erp, zoho crm, microsoft partner, app development brisbane"
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="cs-hero">
        <img
          alt="corner accent"
          className="cs-corner-accent"
          src={AboutCornerAccent}
        />
        <div className="cs-container">
          <div className="cs-hero-left">
            <span className="cs-badge">Custom Software Solutions</span>
            <h1>Custom Software Development Brisbane for Scalable Business Solutions</h1>
            <p>
              Off-the-shelf software solves generic problems. If your business has specific workflows, compliance requirements, or integration needs, generic rarely cuts it. Infogenx Digital Solutions provides custom software development in Brisbane that businesses use to run critical operations — connected natively to Microsoft, Zoho, and Odoo platforms, and designed to work exactly the way your team works.
            </p>
            <div className="cs-hero-buttons">
              <button
                className="cs-primary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Start Your Project
              </button>
              <button
                className="cs-secondary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>
          <div className="cs-hero-right">
            <div className="cs-video-wrapper">
              <div className="cs-video-bg"></div>
              <img
                src={customSoftwareHero}
                alt="Custom Software Development Brisbane"
                className="cs-video"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built Around Real Operations Section */}
      <section className="cs-operations-section">
        <div className="container">
          <div className="cs-section-header">
            <span className="cs-label">Core Capabilities</span>
            <h2>Custom Software in Brisbane Built Around Real Business Operations</h2>
          </div>
          <div className="cs-operations-grid">
            
            {/* Card 1 */}
            <div className="cs-op-card">
              <div className="cs-op-icon-wrapper">
                <svg className="cs-op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3>Business Process Applications</h3>
              <p>
                We develop software that maps directly to how your business operates — approvals, reporting, task management, data capture, whatever the process is. No unnecessary features, no modules you'll never open.
              </p>
            </div>

            {/* Card 2 */}
            <div className="cs-op-card">
              <div className="cs-op-icon-wrapper">
                <svg className="cs-op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>ERP & CRM Custom Development</h3>
              <p>
                Our team for custom software development in Brisbane builds on top of Odoo ERP, Zoho CRM, and Microsoft Dynamics rather than working around them. If the standard configuration doesn't fit, we extend it the right way — cleanly, maintainably, without breaking future updates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="cs-op-card">
              <div className="cs-op-icon-wrapper">
                <svg className="cs-op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3>Stock & Inventory Management Systems</h3>
              <p>
                We've worked with retail and manufacturing businesses across Australia to build stock management platforms that actually hold up in production. You get real-time visibility into what you have, where it is, and what's moving — across multiple locations — and it connects cleanly with whatever ERP or POS system you're already running.
              </p>
            </div>

            {/* Card 4 */}
            <div className="cs-op-card">
              <div className="cs-op-icon-wrapper">
                <svg className="cs-op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Retail POS Systems</h3>
              <p>
                Australian retail has its own rhythm, and off-the-shelf POS software often doesn't quite fit it. We build point-of-sale systems from scratch around the way you actually operate — tied into your inventory, your accounting, and your customer records right from the start.
              </p>
            </div>

            {/* Card 5 */}
            <div className="cs-op-card">
              <div className="cs-op-icon-wrapper">
                <svg className="cs-op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3>API & System Integration</h3>
              <p>
                If two systems in your business don't talk to each other, data gets duplicated, errors creep in, and someone ends up doing manual reconciliation. Our custom built software in Brisbane team fixes that with purpose-built integration layers that keep everything in sync.
              </p>
            </div>

            {/* Card 6 */}
            <div className="cs-op-card">
              <div className="cs-op-icon-wrapper">
                <svg className="cs-op-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Automation & Workflow Tools</h3>
              <p>
                Rather than bolting automation on afterwards, we build it into the software from the ground up. The repetitive stuff — approvals, data transfers, routine tasks — just happens on its own, without anyone needing to push it along.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Deliver For Section (Striking Dark Theme for Wow Factor) */}
      <section className="cs-industries-section">
        <div className="container">
          <div className="cs-section-header light">
            <span className="cs-label">Proven Expertise</span>
            <h2>Industries We Deliver For</h2>
            <p className="cs-section-intro">
              We've built custom software development in Brisbane solutions across:
            </p>
          </div>

          <div className="cs-industries-grid">
            
            {/* Healthcare */}
            <div className="cs-industry-card">
              <div className="cs-ind-icon-wrapper">
                <svg className="cs-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3>Healthcare</h3>
              <p>Patient data platforms, clinical workflow tools, compliance-ready applications</p>
            </div>

            {/* Retail */}
            <div className="cs-industry-card">
              <div className="cs-ind-icon-wrapper">
                <svg className="cs-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3>Retail</h3>
              <p>POS systems, inventory management, customer-facing platforms</p>
            </div>

            {/* Manufacturing */}
            <div className="cs-industry-card">
              <div className="cs-ind-icon-wrapper">
                <svg className="cs-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>Manufacturing</h3>
              <p>Production scheduling, supply chain tools, ERP-integrated operations software</p>
            </div>

            {/* Finance */}
            <div className="cs-industry-card">
              <div className="cs-ind-icon-wrapper">
                <svg className="cs-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Finance</h3>
              <p>Secure reporting platforms, financial workflow automation, audit-ready applications</p>
            </div>

            {/* Transport & Logistics */}
            <div className="cs-industry-card">
              <div className="cs-ind-icon-wrapper">
                <svg className="cs-ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17h5m10 0h-5" />
                </svg>
              </div>
              <h3>Transport & Logistics</h3>
              <p>Fleet and operations management tools built for high-volume, time-sensitive environments</p>
            </div>

          </div>

          <p className="cs-section-outro">
            These aren't industries we've dipped into once. They're sectors we've delivered software in repeatedly, which means we already understand the requirements before the brief is written.
          </p>
        </div>
      </section>

      {/* Why Choose Infogenx Section */}
      <section className="cs-why-choose-section">
        <div className="container">
          <div className="cs-why-choose-grid">
            <div className="cs-why-left">
              <span className="cs-label">The Infogenx Advantage</span>
              <h2>Why Choose Infogenx Digital Solutions for Building Custom Software?</h2>
              
              <p className="cs-why-intro-p">
                When you work with a partner like Infogenx Digital Solutions for custom software development in Brisbane that already holds certified status on the platforms your business uses, the integration work is faster, cleaner, and less likely to cause problems down the line. That's the difference.
              </p>

              {/* Contact Details Card */}
              <div className="cs-contact-widget">
                <h4>Infogenx Digital Solutions</h4>
                <div className="cs-contact-item">
                  <span className="cs-contact-icon">📞</span>
                  <a href="tel:+61403331910" className="cs-phone-link">+61 403 331 910</a>
                </div>
                <div className="cs-contact-item">
                  <span className="cs-contact-icon">⏰</span>
                  <span>Mon–Fri | 9:00 AM – 6:00 PM AEST</span>
                </div>
              </div>
            </div>

            <div className="cs-why-right">
              <div className="cs-bullets-container">
                <div className="cs-bullet-item">
                  <div className="cs-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>National partner for Microsoft, Zoho, and Odoo — platform-certified, not self-declared</p>
                </div>

                <div className="cs-bullet-item">
                  <div className="cs-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Brisbane CBD office — accessible for local clients, with full Australian coverage</p>
                </div>

                <div className="cs-bullet-item">
                  <div className="cs-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Development capability across Australia and India — scalable team, no compromise on quality</p>
                </div>

                <div className="cs-bullet-item">
                  <div className="cs-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Full engagement model — consulting, build, integration, testing, deployment, and managed support</p>
                </div>

                <div className="cs-bullet-item">
                  <div className="cs-bullet-check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Own product suite already in market — Stock Management, Odoo ERP, Retail POS, and CRM systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordions Section */}
      <ServiceFaq faqs={faqs} />

      {/* Related Services Section */}
      <RelatedServices currentService={PATHS.customSoftwareDevelopment} items={relatedItems} />
    </>
  );
};

export default CustomSoftwareDevelopment;
