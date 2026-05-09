import "./Careers.css";
import Header from "../../sections/header/Header";
import Footer from "../../sections/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO/SEO";
const Careers = () => {
  return (
    <div>
      <SEO
        title="Careers at Infogenx | Jobs & Opportunities at Infogenx"
        description="Explore career opportunities at Infogenx. Join our team of developers, designers, and digital experts to build innovative web and software solutions."
        keywords="Infogenx careers, web development jobs, software company jobs, IT jobs India, React developer jobs"
      />
      {/* <Helmet>
        <title>Careers at Infogenx | Jobs & Opportunities at Infogenx</title>
        <meta
          name="description"
          content="Explore career opportunities at Infogenx. Join our team of developers, designers, and digital experts to build innovative web and software solutions."
        />
        <meta
          name="keywords"
          content="Infogenx careers, web development jobs, software company jobs, IT jobs India, React developer jobs"
        />
      </Helmet> */}
      <Header />
      <div className="career-page">
        <h1>Careers at Infogenx</h1>
        <p>Explore exciting career opportunities with Infogenx.</p>

        <p>Send your Resume to this whatsapp no: 9787806366</p>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
