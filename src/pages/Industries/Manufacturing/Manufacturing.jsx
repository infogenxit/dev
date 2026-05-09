import AppDevHero from "../../../sections/Industries/Manufacturing/ManufacturingHero/ManufacturingHero";
import AppDevExpertise from "../../../sections/Industries/Manufacturing/ManufacturingExpertise/ManufacturingExpertise";
import AppDevApproach from "../../../sections/Industries/Manufacturing/ManufacturingApproach/ManufacturingApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Manufacturing/ManufacturingBusinessImpact/ManufacturingBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Manufacturing/ManufacturingImpactCTA/ManufacturingImpactCTA";
import SEO from "../../../components/SEO/SEO";
const Manufacturing = () => {
  return (
    <>
      <SEO
        title="Manufacturing IT Solutions Brisbane | Infogenx"
        description="Optimize operations with manufacturing IT solutions in Brisbane. We provide real-time data visibility and system integration for factory floor efficiency."
        keywords="manufacturing IT solutions Brisbane, factory automation, supply chain visibility, manufacturing technology Australia, Infogenx"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default Manufacturing;
