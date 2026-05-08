import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Industries/Healthcare/HealthcareHero/HealthcareHero";
import AppDevExpertise from "../../../components/Industries/Healthcare/HealthcareExpertise/HealthcareExpertise";
import AppDevApproach from "../../../components/Industries/Healthcare/HealthcareApproach/HealthcareApproach";
import AppDevBusinessImpact from "../../../components/Industries/Healthcare/HealthcareBusinessImpact/HealthcareBusinessImpact";
import AppDevImpactCTA from "../../../components/Industries/Healthcare/HealthcareImpactCTA/HealthcareImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const Healthcare = () => {
  return (
    <>
      {/* 
        PREVIOUS SEO (COMMENTED OUT):
        <SEO
          title="AI Automation & AI Consulting for Healthcare Australia"
          description="Infogenx delivers intelligent automation & AI consulting for Australian healthcare providers – streamline patient care, compliance & analytics. Brisbane-based digital transformation experts."
          keywords="intelligent automation healthcare, digital transformation healthcare Australia, AI-enabled healthcare solutions, automation analytics healthcare, AI in healthcare Australia, patient management automation Australia"
        />
      */}
      <SEO
        title="Healthcare IT Solutions Brisbane | Infogenx"
        description="Secure and compliant healthcare IT solutions in Brisbane. We help medical practices reduce administrative burden and protect patient records through smart technology."
        keywords="healthcare IT solutions Brisbane, medical practice software, healthcare compliance, patient data security, Infogenx"
      />
      {/* <Helmet>
        <title>AI Automation & AI Consulting for Healthcare Australia</title>
        <meta
          name="description"
          content="Infogenx delivers intelligent automation & AI consulting for Australian healthcare providers – streamline patient care, compliance & analytics. Brisbane-based digital transformation experts."
        />
        <meta
          name="keywords"
          content="intelligent automation healthcare, digital transformation healthcare Australia, AI-enabled healthcare solutions, automation analytics healthcare, AI in healthcare Australia, patient management automation Australia"
        />
      </Helmet> */}
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <Footer />
    </>
  );
};

export default Healthcare;
