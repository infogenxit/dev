import AboutHero from "../../sections/About/AboutHero/AboutHero";
import AboutWhoWeAre from "../../sections/About/AboutWhoWeAre/AboutWhoWeAre";
import AboutWhyChoose from "../../sections/About/AboutWhyChoose/AboutWhyChoose";
import AboutMissionVision from "../../sections/About/AboutMissionVision/AboutMissionVision";
import AboutTeam from "../../sections/About/AboutTeam/AboutTeam";
import SEO from "../../components/SEO/SEO";
import Breadcrumbs from "../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../route/paths";

const About = () => {
  return (
    <>
      <SEO
        title="About Infogenx | AI Automation & IT Experts"
        description="Learn how Infogenx empowers businesses with AI applications, intelligent automation, and data analytics across Microsoft, Zoho, and Odoo ecosystems."
        keywords="about Infogenx, AI automation experts, app development company, digital engineering team"
      />
      <Breadcrumbs items={[{ name: "About Us", path: PATHS.about }]} />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyChoose />
      <AboutMissionVision />
      <AboutTeam />
    </>
  );
};

export default About;
