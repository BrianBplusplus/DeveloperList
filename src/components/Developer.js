import React, { Component } from "react";

export default class Developer extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.email}</li>
      </ul>
    );
  }
}
