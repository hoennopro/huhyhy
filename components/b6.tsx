import React, { Component } from "react";

class MyComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.message !== nextProps.message;
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedMessage: "Hello, World!",
    };
  }

  updateMessage = () => {
    this.setState({ updatedMessage: "Hello, Universe!" });
  };

  render() {
    return (
      <div>
        <button onClick={this.updateMessage}>Update Message</button>
        {}
        <MyComponent message={this.state.updatedMessage} />
      </div>
    );
  }
}

export default App;
