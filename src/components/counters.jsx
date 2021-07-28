import React, { Component } from "react";
import Counter from "../components/counter";
import CounterTest from "../components/countertest";
class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
          {this.props.counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              counter={counter}
              //   value={counter.value}
              //   id={counter.id}
              //   instead to pass each props into counter
              //  we can pass obj itself
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
