import React, { Component } from "react";

export default class Developer extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>E-Mail: {this.props.email}</li>
        </ul>
      </div>
    );
  }
}
