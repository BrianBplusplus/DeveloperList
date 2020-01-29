import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <Link to={"/"}>Home Page</Link>
        <Link to={"/developers"}>Developers</Link>
        <Link to={"/read/:id"}>Posts</Link>
      </div>
    );
  }
}
