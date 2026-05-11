import WebDevHero from "../../../sections/Technologies/AI/AIHero/AIHero";
import WebDevTech from "../../../sections/Technologies/AI/AITech/AITech";
import WebDevExpertise from "../../../sections/Technologies/AI/AIExperties/AIExpertise";
import WebDevOutcomes from "../../../sections/Technologies/AI/AIOutcomes/AIOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/AI/AIImpactCTA/AIImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const AI = () => {
  const breadcrumbItems = [
    { name: "Technologies", path: PATHS.home },
    { name: "Artificial Intelligence", path: PATHS.artificialIntelligence }
  ];
  return (
    <>
      <SEO
        title="Artificial Intelligence & Machine Learning Solutions | Infogenx"
        description="Leverage the power of AI and Machine Learning to transform your business. Infogenx builds intelligent systems that automate decisions and drive outcome-driven growth."
        keywords="artificial intelligence, machine learning, AI solutions, cognitive computing, Infogenx"
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

export default AI;
