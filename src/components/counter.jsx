import { Button } from "bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    // React.createElement
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // <h1>Zero</h1>
  }
}

export default Counter;
