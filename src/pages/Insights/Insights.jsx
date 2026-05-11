import SEO from "../../components/SEO/SEO";
import Breadcrumbs from "../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../route/paths";

const Insights = () => {
  return (
    <>
      <SEO 
        title="Insights & AI Case Studies | Infogenx"
        description="Explore the latest insights on AI automation, digital transformation, and technical case studies from Infogenx."
      />
      <Breadcrumbs items={[{ name: "Insights", path: PATHS.insights }]} />
      <div style={{ padding: "160px 54px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", color: "#00123C" }}>This page will be available soon...</h1>
        <p style={{ color: "#666", fontSize: "18px" }}>We are crafting high-value technical insights and AI transformation case studies.</p>
      </div>
    </>
  );
};

export default Insights;
