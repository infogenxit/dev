import AppDevHero from "../../../sections/Industries/Transport/TransportHero/TransportHero";
import AppDevExpertise from "../../../sections/Industries/Transport/TransportExpertise/TransportExpertise";
import AppDevApproach from "../../../sections/Industries/Transport/TransportApproach/TransportApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Transport/TransportBusinessImpact/TransportBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Transport/TransportImpactCTA/TransportImpactCTA";
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
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default Transport;
