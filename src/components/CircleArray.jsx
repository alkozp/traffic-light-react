import React from "react";
import { useState } from "react";
import "./CircleArray.css";

export default function CircleArray() {
  const [state, setState] = useState(0);
  const colors = [
    "red",
    "orange",
    "green",
    "yellowgreen",
    "yellow",
    "blue",
    "purple",
  ];
  //   let colorIndex = 0;

  function nextColor() {
    setState((state + 1) % colors.length);
    // colorIndex = state % colors.length;
  }

  function Element() {
    const colorsList = colors.map((color, index) => {
      if (index === state) {
        return (
          <div
            id={"el" + (index + 1)}
            className="element active"
            key={index}
            style={{ backgroundColor: color }}
          >
            {index + 1}
          </div>
        );
      } else {
        return (
          <div id={"el" + (index + 1)} className="element" key={index}>
            {index + 1}
          </div>
        );
      }
    });

    return <>{colorsList}</>;
  }

  return (
    <>
      <div className="circle-array">
        <p>Circular array</p>
        <Element />
        <button onClick={nextColor}>Start</button>
      </div>
    </>
  );
}
