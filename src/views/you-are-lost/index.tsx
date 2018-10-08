import React, { Component, Fragment } from "react";

interface IState {
  // Your states here
}

interface IProps {
  // Your props here
}

export default class YouAreLost extends Component<IProps, IState> {
  render() {
    return (
      <div>
        You are lost. <a href="/">Send me back</a>
      </div>
    );
  }
}
