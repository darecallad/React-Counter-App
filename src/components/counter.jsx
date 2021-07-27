import { Button } from "bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageurl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag123"],
  };

  //   style sheet
  styles = {
    fontSize: 20,
    fontWeight: 500,
    margin: ".5rem .5rem",
  };
  //   render tags list

  renderTags() {
    if (this.state.tags.length === 0) return <p>No Tags Here.</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }

  //   OnClick Event
  handleIncrement() {
    console.log("Increment Clicked");
  }

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
        <button
          onClick={this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Enter Tags!!"}
        {/* true and truth... the render text will display, always the last one */}
        {this.renderTags()}
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
