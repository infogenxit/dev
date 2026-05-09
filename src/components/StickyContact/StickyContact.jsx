import React from "react";
import { Link } from "react-router-dom";
import "./StickyContact.css";

const StickyContact = () => {
  return (
    <div className="sticky-mobile-contact">
      <Link to="/contact-us">Contact Us</Link>
      <a href={`tel:${(process.env.REACT_APP_CONTACT_PHONE || '+61 403 331 910').replace(/\s+/g, '')}`}>
        Call Now
      </a>
    </div>
  );
};

export default StickyContact;
