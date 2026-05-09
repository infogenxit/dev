import AppDevHero from "../../../sections/Industries/Retail/RetailHero/RetailHero";
import AppDevExpertise from "../../../sections/Industries/Retail/RetailExpertise/RetailExpertise";
import AppDevApproach from "../../../sections/Industries/Retail/RetailApproach/RetailApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Retail/RetailBusinessImpact/RetailBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Retail/RetailImpactCTA/RetailImpactCTA";
import SEO from "../../../components/SEO/SEO";

const Retail = () => {
  return (
    <>
      <SEO
        title="Retail IT Solutions Brisbane | Inventory & POS Experts"
        description="Streamline your retail business with our Brisbane IT solutions. We specialize in inventory automation, POS integration, and omnichannel customer experiences."
        keywords="retail IT solutions Brisbane, inventory management software, POS system integration, retail technology Australia, Infogenx"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default Retail;
