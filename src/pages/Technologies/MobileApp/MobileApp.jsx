import WebDevHero from "../../../sections/Technologies/MobileApp/MobileAppHero/MobileAppHero";
import WebDevTech from "../../../sections/Technologies/MobileApp/MobileAppTech/MobileAppTech";
import WebDevExpertise from "../../../sections/Technologies/MobileApp/MobileAppExperties/MobileAppExpertise";
import WebDevOutcomes from "../../../sections/Technologies/MobileApp/MobileAppOutcomes/MobileAppOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/MobileApp/MobileAppImpactCTA/MobileAppImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const MobileApp = () => {
  const breadcrumbItems = [
    { name: "Technologies", path: PATHS.home },
    { name: "Mobile App Development", path: PATHS.mobileAppDevelopment }
  ];
  return (
    <>
      <SEO
        title="Mobile App Development Brisbane | Trusted Experts"
        description="Unlock business growth with expert Mobile App Development Brisbane in Brisbane. We specialize in Custom Software and innovative digital strategies."
        keywords="mobile app development, iOS apps, Android apps, React Native, Flutter, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <WebDevOutcomes />
      <WebDevImpactCTA />
    </>
  );
};

export default MobileApp;
