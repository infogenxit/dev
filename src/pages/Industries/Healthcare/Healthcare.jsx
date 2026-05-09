import AppDevHero from "../../../sections/Industries/Healthcare/HealthcareHero/HealthcareHero";
import AppDevExpertise from "../../../sections/Industries/Healthcare/HealthcareExpertise/HealthcareExpertise";
import AppDevApproach from "../../../sections/Industries/Healthcare/HealthcareApproach/HealthcareApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Healthcare/HealthcareBusinessImpact/HealthcareBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Healthcare/HealthcareImpactCTA/HealthcareImpactCTA";
import SEO from "../../../components/SEO/SEO";

const Healthcare = () => {
  return (
    <>
      <SEO
        title="Healthcare IT Solutions Brisbane | Patient Management Experts"
        description="Optimize your clinic's operations with our Brisbane healthcare IT solutions. We specialize in patient management systems, compliance, and secure data analytics."
        keywords="healthcare IT solutions Brisbane, patient management software, medical practice automation, healthcare compliance IT, Infogenx"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default Healthcare;
