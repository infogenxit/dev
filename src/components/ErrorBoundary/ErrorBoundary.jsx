import React from "react";

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

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper">
          {/* Animated Background Orbs */}
          <div className="error-blob error-blob-1"></div>
          <div className="error-blob error-blob-2"></div>
          
          {/* Glassmorphic Error Card */}
          <div className="error-boundary-card">
            <span className="error-icon" role="img" aria-label="warning">⚠️</span>
            <h1 className="error-title">Oops!</h1>
            <p className="error-subtitle">
              Something went wrong. We're sorry for the inconvenience.<br/>
              Please try refreshing the page or return home.
            </p>
            <button
              onClick={() => window.location.assign("/")}
              className="error-home-btn"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
