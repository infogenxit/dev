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
        title="Web Development Services | High-Performance Custom Websites | Infogenx"
        description="Infogenx provides expert web development services to build fast, secure, and scalable websites. We focus on modern technologies and user-centric design for measurable business impact."
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
