import React from 'react';

class ErrorBoundary extends React.Component {
  //@ts-ignore
  constructor(props) {
    super(props);
    //@ts-ignore
    this.state = { hasError: false };
  }

  //@ts-ignore
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  //@ts-ignore
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    //@ts-ignore
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
