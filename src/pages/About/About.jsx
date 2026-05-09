import AboutHero from "../../sections/About/AboutHero/AboutHero";
import AboutWhoWeAre from "../../sections/About/AboutWhoWeAre/AboutWhoWeAre";
import AboutWhyChoose from "../../sections/About/AboutWhyChoose/AboutWhyChoose";
import AboutMissionVision from "../../sections/About/AboutMissionVision/AboutMissionVision";
import AboutTeam from "../../sections/About/AboutTeam/AboutTeam";

import SEO from "../../components/SEO/SEO";
const About = () => {
  return (
    <>
      <SEO
        title="About Infogenx | AI Automation & IT Experts"
        description="Learn how Infogenx empowers businesses with AI applications, intelligent automation, and data analytics across Microsoft, Zoho, and Odoo ecosystems."
        keywords="about Infogenx, AI automation experts Australia, app development company Brisbane, digital engineering team"
      />

      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyChoose />
      <AboutMissionVision />
      <AboutTeam />
    </>
  );
};

export default About;
