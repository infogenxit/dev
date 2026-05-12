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
        title="Brisbane Healthcare IT Solutions | Medical Practice Systems | Infogenx"
        description="Infogenx provides expert Brisbane healthcare IT solutions, from EHR and hospital management to clinic automation and compliance. We help medical providers focus on care."
        keywords="healthcare IT solutions Brisbane, medical practice IT Brisbane, EHR systems Brisbane, hospital management software, healthcare compliance Australia, Infogenx"
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
