import React, { Component } from "react";
import Counter from "../components/counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.counters.map((counter) => (
            <Counter key={counter.id} value={counter.value} id={counter.id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
