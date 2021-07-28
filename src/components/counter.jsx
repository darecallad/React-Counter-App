import { Button } from "bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // props is the data that give to components
  //   // props is read only cannot change property
  //   // state is data local or private  to components which means other components cannot access that state

  //   imageurl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag123"],
  // };
  //  remove the local state

  //   constructor() {
  //     super();
  //     this.handleIncrement.bind(this);
  //   }   this can put in arrow function like below

  //   OnClick Event
  //  no longer exist when we delete local state
  // handleIncrement = (id) => {
  // pass id event argument
  // make it arrow function

  // this.setState({ value: this.state.value + 1 });
  // use setState from Components class to tell react to update it
  // };
  //   style sheet
  styles = {
    fontSize: 20,
    fontWeight: 500,
    margin: ".5rem .5rem",
  };
  //   render tags list

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>No Tags Here.</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}> {tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    // React.createElement
    return (
      <React.Fragment>
        {/* <img src={this.state.imageurl} alt="" /> */}
        <h4>{this.props.id}</h4>
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Detele
        </button>
        {/* {this.state.tags.length === 0 && "Enter Tags!!"} */}
        {/* true and truth... the render text will display, always the last one */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
    // <h1>Zero</h1>
  }
}

export default Counter;
