import React, { Component } from "react";
import "./App.css";
import Slottable from "./Layouts/Slottable";
import { faq } from "./Data.js";

class App extends Component {
  render() {
    let display = faq.map(slot => <Slottable slots={slot} />);
    return <div>{display}</div>;
  }
}

export default App;
