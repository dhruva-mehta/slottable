import React from "react";
import "antd/dist/antd.css";
import TwoByTwo from "./2x2Layout";
import SingleColumn from "./SingleColumnLayout";
import OneByFour from "./1x4Layout";
import OneByThree from "./1x3Layout";
import OneByTwo from "./1x2Layout";

import Block from "./Block";

export default class Slottable extends React.Component {
  layoutTypeSwitch(params) {
    switch (params.slots.data.layoutType) {
      case "2x2":
        return (
          <TwoByTwo
            slots={params.slots.slots}
            split={params.slots.data.isMobileSplit}
          />
        );
      case "SingleColumn":
        return (
          <SingleColumn
            slots={params.slots.slots}
            split={params.slots.data.isMobileSplit}
          />
        );
      case "1x4":
        return (
          <OneByFour
            slots={params.slots.slots}
            split={params.slots.data.isMobileSplit}
          />
        );
      case "1x3":
        return (
          <OneByThree
            slots={params.slots.slots}
            split={params.slots.data.isMobileSplit}
          />
        );
      case "1x2":
        return (
          <OneByTwo
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
