import { Suspense, lazy } from "react";
import LoadingScreen from "../components/Common/LoadingScreen/LoadingScreen";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// Pages
export const Home = Loadable(lazy(() => import("../pages/Home/Home")));
export const About = Loadable(lazy(() => import("../pages/About/About")));
export const Products = Loadable(lazy(() => import("../pages/Products/Products")));
export const Contact = Loadable(lazy(() => import("../pages/Contact/Contact")));
export const GetinTouchNew = Loadable(lazy(() => import("../pages/Contact/GetinTouchNew/GetinTouchNew")));
export const GlobalLocations = Loadable(lazy(() => import("../pages/Contact/GlobalLocations/GlobalLocations")));
export const ImplementationIntegration = Loadable(lazy(() => import("../pages/Services/ImplementationIntegration/ImplementationIntegration")));
export const ConsultingAdvisory = Loadable(lazy(() => import("../pages/Services/Consulting&Advisory/Consulting&Advisory")));
export const SupportOptimization = Loadable(lazy(() => import("../pages/Services/SupportOptimization/support-optimization")));
export const ManagedServices = Loadable(lazy(() => import("../pages/Services/ManagedServices/managed-services")));
export const DigitalMarketing = Loadable(lazy(() => import("../pages/Services/DigitalMarketing/DigitalMarketing")));
export const Webdev = Loadable(lazy(() => import("../pages/Technologies/WebDev/Webdev")));
export const MobileAppDevelopment = Loadable(lazy(() => import("../pages/Technologies/MobileApp/MobileApp")));
export const ArtificialIntelligence = Loadable(lazy(() => import("../pages/Technologies/AI/AI")));
export const DataEngineering = Loadable(lazy(() => import("../pages/Technologies/DataEngineering/DataEngineering")));
export const CloudComputing = Loadable(lazy(() => import("../pages/Technologies/CloudComputing/CloudComputing")));
export const Healthcare = Loadable(lazy(() => import("../pages/Industries/Healthcare/Healthcare")));
export const Finance = Loadable(lazy(() => import("../pages/Industries/Finance/Finance")));
export const Retail = Loadable(lazy(() => import("../pages/Industries/Retail/Retail")));
export const RequestQuote = Loadable(lazy(() => import("../pages/RequestQuote/RequestQuote")));
export const ECommerce = Loadable(lazy(() => import("../pages/Industries/ECommerce/ECommerce")));
export const Manufacturing = Loadable(lazy(() => import("../pages/Industries/Manufacturing/Manufacturing")));
export const Transport = Loadable(lazy(() => import("../pages/Industries/Transport/Transport")));
export const Portfolio = Loadable(lazy(() => import("../pages/Portfolio/Portfolio")));
export const ApiIntegration = Loadable(lazy(() => import("../pages/Solutions/ApiIntegration/ApiIntegration")));
export const DataAnalyticsAI = Loadable(lazy(() => import("../pages/Solutions/DataAnalyticsAI/DataAnalyticsAI")));
export const DigitalTransformation = Loadable(lazy(() => import("../pages/Solutions/DigitalTransformation/DigitalTransformation")));
export const IntelligentAutomation = Loadable(lazy(() => import("../pages/Solutions/IntelligentAutomation/IntelligentAutomation")));
export const ModernApplication = Loadable(lazy(() => import("../pages/Solutions/ModernApplication/ModernApplication")));
export const MicrosoftSolution = Loadable(lazy(() => import("../pages/Platforms/MicrosoftSolutions/MicrosoftSolution")));
export const ZohoSolution = Loadable(lazy(() => import("../pages/Platforms/ZohoSolutions/ZohoSolution")));
export const OdooSolution = Loadable(lazy(() => import("../pages/Platforms/OdooSolutions/OdooSolution")));
export const ShopifySolution = Loadable(lazy(() => import("../pages/Platforms/Shopify/Shopify")));
export const CaseStudies = Loadable(lazy(() => import("../pages/Insights/CaseStudies/CaseStudies")));
export const IgxStock = Loadable(lazy(() => import("../pages/Products/IGXStock/IgxStock")));
export const OdooErp = Loadable(lazy(() => import("../pages/Products/OdooErp/OdooErp")));
export const RetailPos = Loadable(lazy(() => import("../pages/Products/RetailPos/RetailPos")));
export const CustomerRelation = Loadable(lazy(() => import("../pages/Products/CustomerRelation/CustomerRelation")));
export const Careers = Loadable(lazy(() => import("../pages/Careers/Careers")));
export const PrivacyPolicy = Loadable(lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy")));
export const TermsConditions = Loadable(lazy(() => import("../pages/TermsConditions/TermsConditions")));
