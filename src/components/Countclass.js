import React, { Component } from "react";

class Countclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>{this.state.count}</h1>
          <div className="btndiv">
            <button
              className="btn"
              onClick={this.setState({ count: this.state.count + 1 })}
            >
              increment
            </button>
            <button
              className="btn"
              onClick={this.setState({ count: this.state.count - 1 })}
            >
              decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Countclass;
