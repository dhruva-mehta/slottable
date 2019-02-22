import React from "react";
import "antd/dist/antd.css";
import TwoByTwo from "./2x2Layout";
import Block from "./Block";

export default class Slottable extends React.Component {
  layoutTypeSwitch(params) {
    switch (params.data.layout_type) {
      case "2x2":
        return <TwoByTwo slots={params.slots} />;
      default:
        return "error";
    }
  }

  typeSwitch(params) {
    switch (params[0].type) {
      case "layout":
        console.log("step 1");
        this.layoutTypeSwitch(params);
        break;
      default:
        return "error";
    }
  }

  render() {
    console.log(this.props);
    return this.typeSwitch(this.props);
  }
}
