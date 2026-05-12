import AppDevHero from "../../../sections/Industries/Healthcare/HealthcareHero/HealthcareHero";
import AppDevExpertise from "../../../sections/Industries/Healthcare/HealthcareExpertise/HealthcareExpertise";
import AppDevApproach from "../../../sections/Industries/Healthcare/HealthcareApproach/HealthcareApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Healthcare/HealthcareBusinessImpact/HealthcareBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Healthcare/HealthcareImpactCTA/HealthcareImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const Healthcare = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Healthcare", path: PATHS.healthcare }
  ];
  return (
    <>
      <SEO
        title="Brisbane Healthcare It Solutions | Trusted Experts"
        description="Unlock business growth with expert Brisbane Healthcare It Solutions in Brisbane. We specialize in Custom Software and innovative digital strategies."
        keywords="healthcare IT solutions Brisbane, medical practice IT Brisbane, Custom Software Brisbane, Infogenx"
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

export default Healthcare;
