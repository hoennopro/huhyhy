import React, { Component } from "react";

class MyComponent extends Component {
  componentDidMount() {
    document.title = "Tiêu đề mới";
  }

  render() {
    return (
      <div>
        <h1>My Component</h1>
        {}
      </div>
    );
  }
}

export default MyComponent;
