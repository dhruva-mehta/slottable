import React from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import Slottable from "./Slottable";

export default class TwoByTwo extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Slottable slots={this.props.slot1} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Slottable slots={this.props.slot2} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Slottable slots={this.slots.slot3} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Slottable slots={this.slots.slot4} />
          </Col>
        </Row>
      </div>
    );
  }
}
