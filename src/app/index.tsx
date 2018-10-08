import React, { Component, Fragment } from "react";
import { timingSafeEqual } from "crypto";

interface IState {
  // Your states here
}

interface IProps {
  name: string; // required
  number?: number; // optional
}

export default class View2 extends Component<IProps, IState> {
  render() {
    return (
      <div>
        This is app rendered! Hello, {this.props.name}. Your optional prop:{" "}
        {this.props.number}
      </div>
    );
  }
}
