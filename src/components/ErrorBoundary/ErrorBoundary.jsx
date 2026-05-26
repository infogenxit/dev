import React from "react";
import { Box, Button, Typography } from "@mui/material";

import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log errors to a monitoring service here
    console.error("ErrorBoundary caught an error:", error, info);
  }

  toggleBotVisibility(visible) {
    if (typeof window === "undefined") return;

    if (visible) {
      document.body.classList.remove("error-page-active");
      if (window.$zoho && window.$zoho.salesiq) {
        try {
          window.$zoho.salesiq.floatbutton.visible("show");
        } catch (e) { }
      }
    } else {
      document.body.classList.add("error-page-active");
      if (window.$zoho && window.$zoho.salesiq) {
        try {
          window.$zoho.salesiq.floatbutton.visible("hide");
        } catch (e) { }
      }

      // Fallback direct hide for any existing SalesIQ DOM elements
      const selectors = ["#zsiq_float", ".zsiq_float", "#zsiq_cnt", ".zsq_theme1", "[id*='zsiq']"];
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el) el.style.setProperty("display", "none", "important");
        });
      });
    }
  }

  componentDidMount() {
    if (this.state.hasError) {
      this.toggleBotVisibility(false);
    }
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      this.toggleBotVisibility(false);
    } else {
      this.toggleBotVisibility(true);
    }
  }

  componentWillUnmount() {
    this.toggleBotVisibility(true);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box className="error-boundary-wrapper">
          {/* Animated Background Orbs */}
          <Box className="error-blob error-blob-1"></Box>
          <Box className="error-blob error-blob-2"></Box>

          {/* Glassmorphic Error Card */}
          <Box className="error-boundary-card">
            <Box className="error-icon-container">
              <svg className="error-svg-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H22L12 2Z" fill="url(#bg-grad)" stroke="url(#stroke-grad)" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 9V15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="12" cy="18" r="1.25" fill="#FFFFFF" />
                <defs>
                  <linearGradient id="bg-grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFF066" />
                    <stop offset="40%" stopColor="#FF5E14" />
                    <stop offset="100%" stopColor="#E61C1C" />
                  </linearGradient>
                  <linearGradient id="stroke-grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#FFE5D4" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
            <Typography variant="h1" className="error-title">
              Oops!
            </Typography>

            <Box className="error-details-container">
              <Typography className="error-subtitle">
                Something went wrong. We're sorry for the inconvenience.<br />
                Please try refreshing the page or return home.
              </Typography>
              <Button
                onClick={() => window.location.assign("/")}
                className="error-home-btn"
                disableRipple
              >
                Go to Homepage
              </Button>
            </Box>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
