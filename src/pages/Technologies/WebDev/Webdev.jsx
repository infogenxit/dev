import WebDevHero from "../../../sections/Technologies/WebDev/WebDevHero/WebDevHero";
import WebDevTech from "../../../sections/Technologies/WebDev/WebDevTech/WebDevTech";
import WebDevExpertise from "../../../sections/Technologies/WebDev/WebDevExperties/WebDevExpertise";
import WebDevOutcomes from "../../../sections/Technologies/WebDev/WebDevOutcomes/WebDevOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/WebDev/WebDevImpactCTA/WebDevImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const Webdev = () => {
  const breadcrumbItems = [
    { name: "Technologies", path: PATHS.home },
    { name: "Web Development", path: PATHS.webDevelopment }
  ];
  return (
    <>
      <SEO
        title="Web Development Brisbane | Trusted Experts & Agency"
        description="Scale your company with leading Web Development Brisbane services in Brisbane. Our team delivers high-quality Web Development Brisbane. Get started today!"
        keywords="web development, custom websites, React development, full-stack engineering, Infogenx"
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

export default Webdev;
