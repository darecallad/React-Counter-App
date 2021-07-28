import React, { Component } from "react";
import Counter from "../components/counter";
import CounterTest from "../components/countertest";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button
            onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
          {this.state.counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
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
