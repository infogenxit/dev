import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationHero/IntelligentAutomationHero";
import AppDevExpertise from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationExpertise/IntelligentAutomationExpertise";
import AppDevApproach from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationApproach/IntelligentAutomationApproach";
import AppDevBusinessImpact from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationBusinessImpact/IntelligentAutomationBusinessImpact";
import AppDevImpactCTA from "../../../components/Solutions/IntelligentAutomation/IntelligentAutomationImpactCTA/IntelligentAutomationImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const IntelligentAutomation = () => {
  return (
    <>
      <SEO
        title="Intelligent Automation & Workflow Solutions | Infogenx Australia"
        description="Reduce manual work and improve efficiency with Infogenx’s AI-driven intelligent automation and workflow solutions for modern Australian enterprises."
        keywords="intelligent automation Australia, workflow automation, AI-driven automation"
      />
      {/* <Helmet>
        <title>
          Intelligent Automation & Workflow Solutions | Infogenx Australia
        </title>
        <meta
          name="description"
          content="Reduce manual work and improve efficiency with Infogenx’s AI-driven intelligent automation and workflow solutions for modern Australian enterprises. "
        />
        <meta
          name="keywords"
          content="intelligent automation Australia, workflow automation, AI-driven automation"
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

export default IntelligentAutomation;
