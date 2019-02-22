import React, { Component } from "react";
import "./App.css";
import Slottable from "./Layouts/Slottable";

let slots = [
  {
    type: "layout",
    data: {
      layout_type: "2x2"
    },
    slots: {
      slot1: {
        type: "layout",
        data: {
          layout_type: "2x2"
        },
        slots: {
          slot1: {
            type: "block",
            data: {
              layout_type: "Image"
            },
            slots: null
          },
          slot2: {
            type: "block",
            data: {
              block_type: "Image"
            },
            slots: null
          },
          slot3: {
            type: "block",
            data: {
              block_type: "Image"
            },
            slots: null
          },
          slot4: {
            type: "block",
            data: {
              block_type: "Image"
            },
            slots: null
          }
        }
      },
      slot2: {
        type: "block",
        data: {
          block_type: "Image"
        },
        slots: null
      },
      slot3: {
        type: "block",
        data: {
          block_type: "Image"
        },
        slots: null
      },
      slot4: {
        type: "block",
        data: {
          block_type: "Image"
        },
        slots: null
      }
    }
  }
];

class App extends Component {
  render() {
    let display = slots.map(slot => <Slottable slots={slots} />);
    return <div>{display}</div>;
  }
}

export default App;
