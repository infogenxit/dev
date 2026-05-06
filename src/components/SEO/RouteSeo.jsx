import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://infogenx.com.au";
const DEFAULT_OG_IMAGE = `${SITE_URL}/infogenx-title-icon.png`;
const DEFAULT_DESCRIPTION =
  "Infogenx delivers apps, automation, AI, and data solutions for modern businesses in Australia.";

const canonicalPathByRoute = {
  "/contact-us/get-in-touch": "/contact-us",
};

const RouteSeo = () => {
  const location = useLocation();
  const normalizedPathname =
    location.pathname.length > 1 && location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;
  const canonicalPath =
    canonicalPathByRoute[normalizedPathname] ?? normalizedPathname;
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const robotsContent =
    location.pathname === "/contact-us/get-in-touch"
      ? "noindex, follow"
      : "index, follow";

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robotsContent} />
      <meta property="og:site_name" content="Infogenx" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
    </Helmet>
  );
};

export default RouteSeo;
