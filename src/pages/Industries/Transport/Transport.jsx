import AppDevHero from "../../../sections/Industries/Transport/TransportHero/TransportHero";
import AppDevExpertise from "../../../sections/Industries/Transport/TransportExpertise/TransportExpertise";
import AppDevApproach from "../../../sections/Industries/Transport/TransportApproach/TransportApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Transport/TransportBusinessImpact/TransportBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Transport/TransportImpactCTA/TransportImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const Transport = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Transport", path: PATHS.transport }
  ];
  return (
    <>
      <SEO
        title="Logistics IT Solutions & Transport Management | Infogenx"
        description="Optimize your logistics and transport operations with our expert IT solutions. We provide route optimization, fleet tracking, and TMS integrations for global efficiency."
        keywords="logistics IT solutions, transport management system, fleet tracking, route optimization, supply chain visibility, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default Transport;
