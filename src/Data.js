let twoByTwoData = [
  {
    type: "layout",
    data: {
      layoutType: "2x2",
      isMobileSplit: false
    },
    slots: [
      {
        type: "layout",
        data: {
          layoutType: "2x2",
          isMobileSplit: true
        },
        slots: [
          {
            type: "block",
            data: {
              layoutType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          }
        ]
      },
      {
        type: "block",
        data: {
          blockType: "Image",
          isMobileSplit: false
        },
        slots: null
      },
      {
        type: "block",
        data: {
          blockType: "Image",
          isMobileSplit: false
        },
        slots: null
      },
      {
        type: "layout",
        data: {
          layoutType: "2x2",
          isMobileSplit: true
        },
        slots: [
          {
            type: "block",
            data: {
              layoutType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          }
        ]
      }
    ]
  }
];

let multiData = [
  {
    type: "layout",
    data: {
      layoutType: "2x2",
      isMobileSplit: false
    },
    slots: [
      {
        type: "layout",
        data: {
          layoutType: "SingleColumn",
          isMobileSplit: true
        },
        slots: [
          {
            type: "block",
            data: {
              layoutType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          }
        ]
      },
      {
        type: "block",
        data: {
          blockType: "Image",
          isMobileSplit: false
        },
        slots: null
      },
      {
        type: "block",
        data: {
          blockType: "Image",
          isMobileSplit: false
        },
        slots: null
      },
      {
        type: "layout",
        data: {
          layoutType: "1x4",
          isMobileSplit: true
        },
        slots: [
          {
            type: "block",
            data: {
              layoutType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          },
          {
            type: "block",
            data: {
              blockType: "Image",
              isMobileSplit: false
            },
            slots: null
          }
        ]
      }
    ]
  }
];

let faq = [
  {
    type: "LAYOUT",
    data: {
      desktopColumns: 4,
      mobileColumns: 1,
      flexSettings: {
        direction: "column",
        justifyContent: "flex-start",
        alignItems: "stretch"
      },
      marginSettings: {
        top: "0",
        right: "auto",
        bottom: "auto",
        left: "0"
      },
      paddingSettings: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0"
      }
    },
    slots: [
      {
        type: "LAYOUT",
        data: {
          desktopColumns: 2,
          mobileColumns: 2,
          flexSettings: {
            direction: "column",
            justifyContent: "flex-start",
            alignItems: "stretch"
          },
          marginSettings: {
            top: "0",
            right: "auto",
            bottom: "auto",
            left: "0"
          },
          paddingSettings: {
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
          }
        },
        slots: [
          {
            type: "BLOCK",
            data: {
              blockType: "FAQ",
              blockProps: {
                title: "Frequently Asked Questions",
                activeBgColor: null,
                activeHeaderTextColor: null,
                faqs: [
                  {
                    id: 1,
                    question:
                      "How do I? How do I? How do I? How do I? How do I? ",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 2,
                    question: "Refunds",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 3,
                    question: "Exchanges",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 4,
                    question: "Return Policy",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  }
                ]
              }
            }
          },
          {
            type: "BLOCK",
            data: {
              blockType: "BEFORE_AFTER_SLIDER",
              blockProps: {
                before:
                  "https://www.presetsbyceleste.com/assets/jungle_before.jpg",
                after:
                  "https://www.presetsbyceleste.com/assets/jungle_after.jpg"
              }
            }
          }
        ]
      },
      {
        type: "LAYOUT",
        data: {
          desktopColumns: 2,
          mobileColumns: 1,
          flexSettings: {
            direction: "column",
            justifyContent: "flex-start",
            alignItems: "stretch"
          },
          marginSettings: {
            top: "0",
            right: "auto",
            bottom: "auto",
            left: "0"
          },
          paddingSettings: {
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
          }
        },
        slots: [
          {
            type: "BLOCK",
            data: {
              blockType: "FAQ",
              blockProps: {
                title: "Frequently Asked Questions",
                activeBgColor: null,
                activeHeaderTextColor: null,
                faqs: [
                  {
                    id: 1,
                    question:
                      "How do I? How do I? How do I? How do I? How do I? ",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 2,
                    question: "Refunds",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 3,
                    question: "Exchanges",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 4,
                    question: "Return Policy",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  }
                ]
              }
            }
          },
          {
            type: "BLOCK",
            data: {
              blockType: "BEFORE_AFTER_SLIDER",
              blockProps: {
                before:
                  "https://www.presetsbyceleste.com/assets/jungle_before.jpg",
                after:
                  "https://www.presetsbyceleste.com/assets/jungle_after.jpg"
              }
            }
          }
        ]
      },
      {
        type: "LAYOUT",
        data: {
          desktopColumns: 2,
          mobileColumns: 1,
          flexSettings: {
            direction: "column",
            justifyContent: "flex-start",
            alignItems: "stretch"
          },
          marginSettings: {
            top: "0",
            right: "auto",
            bottom: "auto",
            left: "0"
          },
          paddingSettings: {
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
          }
        },
        slots: [
          {
            type: "BLOCK",
            data: {
              blockType: "FAQ",
              blockProps: {
                title: "Frequently Asked Questions",
                activeBgColor: null,
                activeHeaderTextColor: null,
                faqs: [
                  {
                    id: 1,
                    question:
                      "How do I? How do I? How do I? How do I? How do I? ",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 2,
                    question: "Refunds",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 3,
                    question: "Exchanges",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 4,
                    question: "Return Policy",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  }
                ]
              }
            }
          },
          {
            type: "BLOCK",
            data: {
              blockType: "BEFORE_AFTER_SLIDER",
              blockProps: {
                before:
                  "https://www.presetsbyceleste.com/assets/jungle_before.jpg",
                after:
                  "https://www.presetsbyceleste.com/assets/jungle_after.jpg"
              }
            }
          }
        ]
      },
      {
        type: "LAYOUT",
        data: {
          desktopColumns: 2,
          mobileColumns: 1,
          flexSettings: {
            direction: "column",
            justifyContent: "flex-start",
            alignItems: "stretch"
          },
          marginSettings: {
            top: "0",
            right: "auto",
            bottom: "auto",
            left: "0"
          },
          paddingSettings: {
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
          }
        },
        slots: [
          {
            type: "BLOCK",
            data: {
              blockType: "FAQ",
              blockProps: {
                title: "Frequently Asked Questions",
                activeBgColor: null,
                activeHeaderTextColor: null,
                faqs: [
                  {
                    id: 1,
                    question:
                      "How do I? How do I? How do I? How do I? How do I? ",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 2,
                    question: "Refunds",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 3,
                    question: "Exchanges",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  },
                  {
                    id: 4,
                    question: "Return Policy",
                    answer:
                      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
                  }
                ]
              }
            }
          },
          {
            type: "BLOCK",
            data: {
              blockType: "BEFORE_AFTER_SLIDER",
              blockProps: {
                before:
                  "https://www.presetsbyceleste.com/assets/jungle_before.jpg",
                after:
                  "https://www.presetsbyceleste.com/assets/jungle_after.jpg"
              }
            }
          }
        ]
      }
    ]
  }
];

export { twoByTwoData, multiData, faq };
