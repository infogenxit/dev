import "./Careers.css";
import SEO from "../../components/SEO/SEO";
import Breadcrumbs from "../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../route/paths";

const Careers = () => {
  return (
    <div>
      <SEO
        title="Careers at Infogenx | Jobs & Opportunities"
        description="Explore career opportunities at Infogenx. Join our team of developers, designers, and digital experts to build innovative web and software solutions."
        keywords="Infogenx careers, web development jobs, software company jobs, IT jobs, React developer jobs"
      />
      <Breadcrumbs items={[{ name: "Careers", path: PATHS.careers }]} />

      <div className="career-page">
        <h1>Careers at Infogenx</h1>
        <p>Explore exciting career opportunities with Infogenx.</p>

        <p>Send your Resume to this whatsapp no: 9787806366</p>
      </div>
    </div>
  );
};

export default Careers;
