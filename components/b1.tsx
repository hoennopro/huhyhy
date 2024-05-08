import React, { Component } from "react";

interface Exercise01State {
  userName: string;
}

class Exercise01 extends Component<{}, Exercise01State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  componentDidMount() {
    this.setState({ userName: "User" });
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.state.userName}!</h1>
      </div>
    );
  }
}

export default Exercise01;
