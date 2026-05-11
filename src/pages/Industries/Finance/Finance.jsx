import AppDevHero from "../../../sections/Industries/Finance/FinanceHero/FinanceHero";
import AppDevExpertise from "../../../sections/Industries/Finance/FinanceExpertise/FinanceExpertise";
import AppDevApproach from "../../../sections/Industries/Finance/FinanceApproach/FinanceApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Finance/FinanceBusinessImpact/FinanceBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Finance/FinanceImpactCTA/FinanceImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const Finance = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Finance", path: PATHS.finance }
  ];
  return (
    <>
      <SEO
        title="Finance IT Solutions & Fintech Experts | Infogenx"
        description="Streamline your financial operations with our expert IT solutions. We focus on security, regulatory compliance, and process automation for modern finance businesses."
        keywords="finance IT solutions, fintech development, financial process automation, regulatory compliance IT, Infogenx"
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

export default Finance;
