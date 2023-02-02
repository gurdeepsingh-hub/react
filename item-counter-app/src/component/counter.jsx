import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  // for applying styles to more than one elements
  //   styles = {
  //     fontSize: 15,
  //     fontWeight: "bold",
  //   };
  render() {
    return (
      <React.Fragment>
        <span
          style={{ fontSize: 15, fontWeight: "bolder" }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  incrementFunc() {
    this.state.count += 1;
  }
}

export default Counter;