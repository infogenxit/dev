import React from "react";
import "./Careers.css";
import SEO from "../../components/SEO/SEO";
import Breadcrumbs from "../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../route/paths";
import NetworkBackground from "../../components/NetworkBackground/NetworkBackground";
import careersHeroBg from "../../assets/images/careers-hero-bg.png";
import AboutCornerAccent from "../../assets/images/about-corner-accent.webp";

const Careers = () => {
  const getWhatsAppLink = () => {
    const baseText = "Hi Infogenx team, I am highly interested in career opportunities and would love to submit my resume for review.";
    return `https://api.whatsapp.com/send?phone=919787806366&text=${encodeURIComponent(baseText)}`;
  };

  return (
    <>
      <SEO
        title="Careers at Infogenx | Join Our Team"
        description="Explore career opportunities at Infogenx. Join our team of developers, designers, and digital experts to build innovative web and software solutions."
        keywords="Infogenx careers, web development jobs, software company jobs, IT jobs, React developer jobs"
      />
      <Breadcrumbs items={[{ name: "Careers", path: PATHS.careers }]} />

      {/* Careers Hero Section - Bespoke background and ultra-neat typography hierarchy */}
      <section
        className="careers-hero-section"
        style={{ backgroundImage: `url(${careersHeroBg})` }}
      >
        <NetworkBackground />
        <img
          alt="Infogenx Australia - AI Automation & App Development Corner Graphic"
          className="about-corner-accent"
          src={AboutCornerAccent}
          fetchpriority="high"
          loading="eager"
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-container">
          <h1 className="about-hero-heading">
            <span>Careers at Infogenx</span>
          </h1>
          
          <p className="about-hero-description" style={{ maxWidth: '850px', fontSize: '20px', lineHeight: '1.7' }}>
            Explore exciting career opportunities with Infogenx.
          </p>

          {/* Premium Glassmorphic Direct Application Badge */}
          <div className="whatsapp-submission-badge" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 94, 20, 0.35)',
            padding: '14px 28px',
            borderRadius: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '25px',
            marginBottom: '35px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            fontFamily: '"Manrope", sans-serif',
            fontSize: '16px',
            color: '#ffffff',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
          }}>
            <span style={{ color: '#ff6a00', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Direct Apply:</span>
            <span style={{ fontWeight: '500', opacity: '0.95' }}>Submit your Resume / CV directly on WhatsApp to</span>
            <strong style={{ color: '#ff5e14', fontSize: '19px', fontWeight: '800', borderBottom: '2px solid #ff5e14', paddingBottom: '2px', marginLeft: '4px' }}>9787806366</strong>
          </div>

          <div className="about-hero-buttons" style={{ marginTop: '0px' }}>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="about-primary-btn"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Submit Resume on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
