import AppDevHero from "../../../sections/Industries/Manufacturing/ManufacturingHero/ManufacturingHero";
import AppDevExpertise from "../../../sections/Industries/Manufacturing/ManufacturingExpertise/ManufacturingExpertise";
import AppDevApproach from "../../../sections/Industries/Manufacturing/ManufacturingApproach/ManufacturingApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Manufacturing/ManufacturingBusinessImpact/ManufacturingBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Manufacturing/ManufacturingImpactCTA/ManufacturingImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const Manufacturing = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Manufacturing", path: PATHS.manufacturing }
  ];
  return (
    <>
      <SEO
        title="Manufacturing IT Solutions & Factory Automation | Infogenx"
        description="Optimize operations with our expert manufacturing IT solutions. We provide real-time data visibility, system integration, and automation for factory floor efficiency."
        keywords="manufacturing IT solutions, factory automation, supply chain visibility, manufacturing technology, Infogenx"
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

export default Manufacturing;
