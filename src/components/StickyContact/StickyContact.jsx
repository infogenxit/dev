import React from "react";
import { Link } from "react-router-dom";
import { RiPhoneFill, RiMailSendLine } from "react-icons/ri";
import "./StickyContact.css";

const StickyContact = () => {
  return (
    <div className="sticky-mobile-contact">
      <Link to="/contact-us" className="sticky-btn-contact">
        <RiMailSendLine /> CONTACT US
      </Link>
      <a href={`tel:${(process.env.REACT_APP_CONTACT_PHONE || '+61 403 331 910').replace(/\s+/g, '')}`} className="sticky-btn-call">
        <RiPhoneFill /> CALL NOW
      </a>
    </div>
  );
};

export default StickyContact;
