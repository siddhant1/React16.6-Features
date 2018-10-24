import React, { Component } from "react";
import Context from "./Context";

class GrandChild extends Component {
  static contextType = Context;
  render() {
    return <div>{this.context}</div>;
  }
}

export default GrandChild;
