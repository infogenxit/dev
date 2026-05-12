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
        title="Ai Consulting Brisbane | Trusted Experts & Agency"
        description="Scale your company with leading Ai Consulting Brisbane services in Brisbane. Our team delivers high-quality Business Automation Brisbane. Get started today!"
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
