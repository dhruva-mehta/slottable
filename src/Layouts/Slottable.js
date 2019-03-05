import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Block from "./Block";

export default class Slottable extends React.Component {
  builder(params) {
    let rend = params.slots.slots.map(slot => {
      let data = params.slots.data;
      let marg = data.marginSettings;
      let pad = data.paddingSettings;
      console.log("builder slot", slot);
      return (
        <Col
          xs={24 / data.mobileColumns}
          sm={24 / data.mobileColumns}
          md={24 / data.mobileColumns}
          lg={24 / data.desktopColumns}
          xl={24 / data.desktopColumns}
          margin={(marg.top, marg.right, marg.bottom, marg.left)}
          padding={(pad.top, pad.righst, pad.bottom, pad.left)}
        >
          <Slottable slots={slot} />
        </Col>
      );
    });
    return (
      <div height={100} style={{ border: "1px solid black" }}>
        <Row
          gutter={16}
          justifyContent={params.slots.data.flexSettings.justifyContent}
          alignItems={params.slots.data.flexSettings.alignItems}
        >
          {rend}
        </Row>
      </div>
    );
  }

  typeSwitch(params) {
    console.log("typeSwitch", params);
    switch (params.slots.type) {
      case "LAYOUT":
        return this.builder(params);
      case "BLOCK":
        console.log("Block");
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
