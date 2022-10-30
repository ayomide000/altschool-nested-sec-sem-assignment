import React, { Component } from "react";

class ErrorBoundary extends React.Component {
  //   state = {
  //     error: null,
  //   };
  state = {
    errorMessage: "",
  };
  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    // return { error: error };
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }
  logErrorToServices = console.log;
  render() {
    if (this.state.errorMessage) {
      // You can render any custom fallback UI
      return (
        <main>
          <h1>404</h1>
          <div>Page Not Found</div>
          <button className="btn btn-primary">
            <Link to="/">Back to Homepage</Link>
          </button>
        </main>
      );
    }
  }
}
export default ErrorBoundary;
