import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        {}
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
