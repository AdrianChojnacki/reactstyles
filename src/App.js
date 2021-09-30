import React, { Component } from "react";
import "./App.css";
import Text from "./Text";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Witaj na stronie</h1>
        <Text />
      </div>
    );
  }
}
