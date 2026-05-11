import WebDevHero from "../../../sections/Technologies/CloudComputing/CloudComputingHero/CloudComputingHero";
import WebDevTech from "../../../sections/Technologies/CloudComputing/CloudComputingTech/CloudComputingTech";
import WebDevExpertise from "../../../sections/Technologies/CloudComputing/CloudComputingExperties/CloudComputingExpertise";
import WebDevOutcomes from "../../../sections/Technologies/CloudComputing/CloudComputingOutcomes/CloudComputingOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/CloudComputing/CloudComputingImpactCTA/CloudComputingImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const CloudComputing = () => {
  const breadcrumbItems = [
    { name: "Technologies", path: PATHS.home },
    { name: "Cloud Computing", path: PATHS.cloudComputing }
  ];
  return (
    <>
      <SEO
        title="Cloud Computing & Infrastructure Solutions | Infogenx"
        description="Scale your business with secure cloud migrations, managed infrastructure, and serverless architectures. Infogenx provides high-performance cloud solutions tailored for scalability."
        keywords="cloud computing, cloud migration, AWS, Azure, cloud infrastructure, Infogenx"
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

export default CloudComputing;
