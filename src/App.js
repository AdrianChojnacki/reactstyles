import React, { Component } from "react";

export default class App extends Component {
  state = {
    active: false,
  };

  render() {
    // const styles = {
    //   btn_off: {
    //     display: "block",
    //     width: 200,
    //     margin: "20px auto",
    //     padding: "10px 20px",
    //     backgroundColor: "white",
    //     border: "2px solid black",
    //     fontFamily: "arial",
    //     fontSize: 30,
    //     cursor: "pointer",
    //   },

    //   btn_on: {
    //     display: "block",
    //     width: 200,
    //     margin: "20px auto",
    //     padding: "10px 20px",
    //     backgroundColor: "cadetblue",
    //     border: "2px solid black",
    //     fontFamily: "arial",
    //     color: "white",
    //     fontSize: 30,
    //     cursor: "pointer",
    //   },
    // };

    let btn = {
      display: "block",
      width: 200,
      margin: "20px auto",
      padding: "10px 20px",
      backgroundColor: "white",
      border: "2px solid black",
      fontFamily: "arial",
      fontSize: 30,
      cursor: "pointer",
    };

    if (this.state.active) {
      btn.backgroundColor = "cadetblue";
      btn.color = "white";
    }

    return (
      <div>
        <button style={btn} onClick={() => this.setState({ active: !this.state.active })}>
          {this.state.active ? "Wyłącz" : "Włącz"}
        </button>
      </div>
    );
  }
}
