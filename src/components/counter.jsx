import { Button } from "bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
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
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // <h1>Zero</h1>
  }
}

export default Counter;
