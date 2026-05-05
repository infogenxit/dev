import Header from "../../components/header/Header";
import AboutHero from "../../components/About/AboutHero/AboutHero";
import AboutWhoWeAre from "../../components/About/AboutWhoWeAre/AboutWhoWeAre";
import AboutWhyChoose from "../../components/About/AboutWhyChoose/AboutWhyChoose";
import AboutMissionVision from "../../components/About/AboutMissionVision/AboutMissionVision";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Infogenx | Australian IT Consulting & Engineering Firm
        </title>
        <meta
          name="description"
          content="Learn about Infogenx—our story, leadership, partnerships, and mission to deliver intelligent, outcome-driven digital solutions for businesses."
        />
        <meta
          name="keywords"
          content="about Infogenx, Australian IT consulting company, digital engineering firm"
        />
        <link rel="canonical" href="https://infogenx.com.au/about" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <meta property="og:url" content="https://infogenx.com.au/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Infogenx | Australian IT Consulting & Engineering Firm" />
        <meta property="og:description" content="Learn about Infogenx—our story, leadership, partnerships, and mission to deliver intelligent, outcome-driven digital solutions." />
        <meta property="og:image" content="https://infogenx.com.au/infogenx-og-image.png" />
      </Helmet>
      <Header />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutWhyChoose />
      <AboutMissionVision />
      <Footer />
    </>
  );
};

export default About;
