import React from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import Slottable from "./Slottable";

export default class TwoByTwo extends React.Component {
  render() {
    let rend = this.props.slots.map(slot => {
      if (this.props.split) {
        return (
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Slottable slots={slot} />
          </Col>
        );
      } else {
        return (
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Slottable slots={slot} />
          </Col>
        );
      }
    });

    return (
      <div height={100} style={{ border: "1px solid black" }}>
        <Row gutter={16} type="flex">
          {rend}
        </Row>
      </div>
    );
  }
}
