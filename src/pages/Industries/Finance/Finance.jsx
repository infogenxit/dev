import AppDevHero from "../../../sections/Industries/Finance/FinanceHero/FinanceHero";
import AppDevExpertise from "../../../sections/Industries/Finance/FinanceExpertise/FinanceExpertise";
import AppDevApproach from "../../../sections/Industries/Finance/FinanceApproach/FinanceApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Finance/FinanceBusinessImpact/FinanceBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Finance/FinanceImpactCTA/FinanceImpactCTA";
import SEO from "../../../components/SEO/SEO";
const Finance = () => {
  return (
    <>
      <SEO
        title="Finance IT Solutions Brisbane | Fintech & Compliance Expert"
        description="Streamline your financial operations with our Brisbane IT solutions. We focus on security, ASIC compliance, and process automation for finance businesses."
        keywords="finance IT solutions Brisbane, fintech development, financial process automation, ASIC compliance IT, Infogenx"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default Finance;
