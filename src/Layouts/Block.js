import React from "react";

export default class Block extends React.Component {
  render() {
    return (
      <div height={100} style={{ border: "1px solid black" }}>
        “If you know the enemy and know yourself, you need not fear the result
        of a hundred battles. If you know yourself but not the enemy, for every
        victory gained you will also suffer a defeat. If you know neither the
        enemy nor yourself, you will succumb in every battle.”
      </div>
    );
  }
}
