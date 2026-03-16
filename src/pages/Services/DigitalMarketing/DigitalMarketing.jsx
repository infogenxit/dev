import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/DigitalMarketing/DigitalMarketingHero/DigitalMarketingHero";
import AppDevExpertise from "../../../components/Services/DigitalMarketing/DigitalMarketingExpertise/DigitalMarketingExpertise";
import AppDevApproach from "../../../components/Services/DigitalMarketing/DigitalMarketingApproach/DigitalMarketingApproach";
import AppDevBusinessImpact from "../../../components/Services/DigitalMarketing/DigitalMarketingBusinessImpact/DigitalMarketingBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/DigitalMarketing/DigitalMarketingImpactCTA/DigitalMarketingImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const DigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | Infogenx Australia</title>
        <meta
          name="description"
          content="Boost your online presence and drive growth with our comprehensive digital marketing solutions tailored for the Australian market."
        />
        <meta
          name="keywords"
          content="digital marketing Australia, online marketing services"
        />
      </Helmet>
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <Footer />
    </>
  );
};

export default DigitalMarketing;
