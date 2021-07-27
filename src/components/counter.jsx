import { Button } from "bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageurl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 20,
    fontWeight: 500,
    margin: ".5rem .5rem",
  };
  render() {
    // React.createElement
    return (
      <React.Fragment>
        <img src={this.state.imageurl} alt="" />
        <br></br>
        <br></br>
        <span style={this.styles} className="badge badge-primary">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
