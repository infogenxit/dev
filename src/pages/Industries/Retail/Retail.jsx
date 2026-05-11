import AppDevHero from "../../../sections/Industries/Retail/RetailHero/RetailHero";
import AppDevExpertise from "../../../sections/Industries/Retail/RetailExpertise/RetailExpertise";
import AppDevApproach from "../../../sections/Industries/Retail/RetailApproach/RetailApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Retail/RetailBusinessImpact/RetailBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Retail/RetailImpactCTA/RetailImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const Retail = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Retail", path: PATHS.retail }
  ];
  return (
    <>
      <SEO
        title="Retail IT Solutions & Inventory Management Experts | Infogenx"
        description="Streamline your retail business with our expert IT solutions. We specialize in inventory automation, POS integration, and omnichannel customer experiences."
        keywords="retail IT solutions, inventory management software, POS system integration, retail technology, Infogenx"
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

export default Retail;
