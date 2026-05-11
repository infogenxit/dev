import React from "react";
import GetinTouch from "./GetinTouchNew/GetinTouchNew";
import Breadcrumbs from "../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../route/paths";
import SEO from "../../components/SEO/SEO";

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Infogenx | Get AI & IT Solutions Today"
        description="Contact Infogenx to discuss your project and discover how AI, automation, and software solutions can help your business grow."
        keywords="contact Infogenx, IT consultation, software services inquiry, AI solutions contact"
      />
      <Breadcrumbs items={[{ name: "Contact Us", path: PATHS.contactUs }]} />
      <GetinTouch />
    </>
  );
};

export default Contact;
