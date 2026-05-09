import AppDevHero from "../../../sections/Industries/Transport/TransportHero/TransportHero";
import AppDevExpertise from "../../../sections/Industries/Transport/TransportExpertise/TransportExpertise";
import AppDevApproach from "../../../sections/Industries/Transport/TransportApproach/TransportApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Transport/TransportBusinessImpact/TransportBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Transport/TransportImpactCTA/TransportImpactCTA";
import SEO from "../../../components/SEO/SEO";
const Transport = () => {
  return (
    <>
      <SEO
        title="Logistics IT Solutions Brisbane | Transport & Fleet Management"
        description="Optimise your logistics and transport operations with our Brisbane IT solutions. We provide route optimisation, fleet tracking, and TMS integrations."
        keywords="logistics IT solutions Brisbane, transport management system, fleet tracking Australia, route optimisation, supply chain visibility"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default Transport;
