import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch = (error, info) => {
    this.setState({error: info.componentStack});
  }

  render() {
    if (this.state.error) {
      return <h1>{this.state.error.toString()}</h1>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
