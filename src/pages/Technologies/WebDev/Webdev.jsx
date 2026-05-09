import Header from "../../../sections/header/Header";
import WebDevHero from "../../../sections/Technologies/WebDev/WebDevHero/WebDevHero";
import WebDevTech from "../../../sections/Technologies/WebDev/WebDevTech/WebDevTech";
import WebDevExpertise from "../../../sections/Technologies/WebDev/WebDevExperties/WebDevExpertise";
import WebDevOutcomes from "../../../sections/Technologies/WebDev/WebDevOutcomes/WebDevOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/WebDev/WebDevImpactCTA/WebDevImpactCTA";
import Footer from "../../../sections/Footer/Footer";
const Webdev = () => {
  return (
    <>
      <Header />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <WebDevOutcomes />
      <WebDevImpactCTA />
      <Footer />
    </>
  );
};

export default Webdev;
