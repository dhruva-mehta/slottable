import React from "react";
import "antd/dist/antd.css";
import TwoByTwo from "./2x2Layout";
import Block from "./Block";

export default class Slottable extends React.Component {
  layoutTypeSwitch(params) {
    switch (params.slots.data.layout_type) {
      case "2x2":
        return (
          <TwoByTwo
            slots={params.slots.slots}
            split={params.slots.data.isMobileSplit}
          />
        );
      default:
        return null;
    }
  }

  typeSwitch(params) {
    switch (params.slots.type) {
      case "layout":
        return this.layoutTypeSwitch(params);
      case "block":
        return <Block />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div style={{ border: "1px solid purple", padding: "20px" }}>
        {this.typeSwitch(this.props)}
      </div>
    );
  }
}
