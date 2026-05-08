import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Industries/Transport/TransportHero/TransportHero";
import AppDevExpertise from "../../../components/Industries/Transport/TransportExpertise/TransportExpertise";
import AppDevApproach from "../../../components/Industries/Transport/TransportApproach/TransportApproach";
import AppDevBusinessImpact from "../../../components/Industries/Transport/TransportBusinessImpact/TransportBusinessImpact";
import AppDevImpactCTA from "../../../components/Industries/Transport/TransportImpactCTA/TransportImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const Transport = () => {
  return (
    <>
      {/* 
        PREVIOUS SEO (COMMENTED OUT):
        <SEO
          title="AI Automation for Logistics | InfogenX Australia"
          description="Optimise transport & logistics with InfogenX's AI solutions in Australia: route optimisation, fleet analytics & intelligent automation for Brisbane & national operations."
          keywords="AI consulting transport logistics, intelligent automation logistics solutions, digital transformation logistics Australia, fleet management AI Australia, route optimisation automation Brisbane"
        />
      */}
      <SEO
        title="Transport & Logistics IT Solutions Brisbane | Infogenx"
        description="Streamline supply chains with transport and logistics IT solutions in Brisbane. We provide route optimization, fleet tracking, and real-time visibility."
        keywords="transport IT solutions Brisbane, logistics technology, fleet management, supply chain optimization, Infogenx"
      />
      {/* <Helmet>
        <title>AI Automation for Logistics | InfogenX Australia</title>
        <meta
          name="description"
          content="Optimise transport & logistics with InfogenX's AI solutions in Australia: route optimisation, fleet analytics & intelligent automation for Brisbane & national operations."
        />
        <meta
          name="keywords"
          content="AI consulting transport logistics, intelligent automation logistics solutions, digital transformation logistics Australia, fleet management AI Australia, route optimisation automation Brisbane"
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

export default Transport;
