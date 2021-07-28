import React, { Component } from "react";
import Counter from "../components/counter";
import CounterTest from "../components/countertest";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <React.Fragment>
        <div>
          {/* replace this.props using Destructing Arguments */}
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
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
