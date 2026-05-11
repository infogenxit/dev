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
        title="Healthcare IT Solutions & Patient Management Experts | Infogenx"
        description="Optimize your medical facility's operations with our comprehensive healthcare IT solutions. We specialize in patient management systems, compliance, and secure data analytics."
        keywords="healthcare IT solutions, patient management software, medical practice automation, healthcare compliance IT, Infogenx"
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
