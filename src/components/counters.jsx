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

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
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
