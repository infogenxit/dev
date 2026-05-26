import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import "./GlobalCtaBanner.css";

const GlobalCtaBanner = ({
  title,
  description,
  primaryBtnText = "Start Your Transformation",
  secondaryBtnText = "Talk to an Expert ↗",
  checklist = [
    "Enterprise-Ready Solutions",
    "Cutting-Edge Technology",
    "Outcomes You Can Measure"
  ],
  contactText = (
    <>
      Let us build the future together.<br />
      <strong>Call us now on +61 403339424.</strong>
    </>
  )
}) => {
  const navigate = useNavigate();
  return (
    <Box component="section" className="global-cta-section">
      <Box className="global-cta-container" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
        <Box className="global-cta-l" sx={{ flex: 1, minWidth: 300 }}>
          <Typography variant="h4" component="h2" className="global-cta-title">
            {title}
          </Typography>
          <Typography variant="body1" className="global-cta-description">
            {description}
          </Typography>
          <div className="global-cta-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              {primaryBtnText}
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              {secondaryBtnText}
            </button>
          </div>
        </Box>

        <Box className="global-cta-r" sx={{ flex: '0 0 350px', mt: { xs: 4, sm: 0 } }}>
          {checklist && checklist.length > 0 && (
            <ul className="global-cta-checklist">
              {checklist.map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckIcon className="global-cta-check-icon" sx={{ mr: 1, fontSize: 20, color: '#ff5e14' }} />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <Typography variant="body2" className="global-cta-call-us">
            {contactText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

GlobalCtaBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryBtnText: PropTypes.string,
  secondaryBtnText: PropTypes.string,
  checklist: PropTypes.arrayOf(PropTypes.string),
  contactText: PropTypes.any,
};

GlobalCtaBanner.defaultProps = {
  primaryBtnText: "Start Your Transformation",
  secondaryBtnText: "Talk to an Expert ↗",
  checklist: ["Enterprise-Ready Solutions", "Cutting-Edge Technology", "Outcomes You Can Measure"],
  contactText: (
    <>
      Let us build the future together.<br />
      <strong>Call us now on +61 403339424.</strong>
    </>
  ),
};

export default GlobalCtaBanner;