import WebDevHero from "../../../sections/Technologies/DataEngineeringAnalytics/DataEngineeringHero/DataEngineeringHero";
import WebDevTech from "../../../sections/Technologies/DataEngineeringAnalytics/DataEngineeringTech/DataEngineeringTech";
import WebDevExpertise from "../../../sections/Technologies/DataEngineeringAnalytics/DataEngineeringExpertise/DataEngineeringExpertise";
import WebDevOutcomes from "../../../sections/Technologies/DataEngineeringAnalytics/DataEngineeringOutcomes/DataEngineeringOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/DataEngineeringAnalytics/DataEngineeringImpactCTA/DataEngineeringImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const DataEngineering = () => {
  const breadcrumbItems = [
    { name: "Technologies", path: PATHS.home },
    { name: "Data Engineering", path: PATHS.dataEngineering }
  ];
  return (
    <>
      <SEO
        title="Data Engineering & Pipeline Solutions | Infogenx"
        description="Build robust data pipelines and scalable analytics infrastructure. Infogenx specializes in automated data ingestions, cleansing, and consolidation for decision-grade intelligence."
        keywords="data engineering, data pipelines, data warehousing, analytics infrastructure, Infogenx"
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

export default DataEngineering;
