import "./TrafficLight.css";
import { useState } from "react";

let currentState = 0;
let timerState;
let ukForward = true;
const colors = ["red", "orange", "green"];

export default function TrafficLight() {
  const [color, setColor] = useState("red");
  const [style, setStyle] = useState("greek");
  const [ukOrange, setUkOrange] = useState(false);
  const [timer, setTimer] = useState("stopped");

  function nextState() {
    //gr style
    if (style === "greek") {
      const nextState = currentState + 1;
      if (nextState < colors.length) {
        currentState = nextState;
      } else {
        currentState = 0;
      }
    } else {
      //uk style
      let nextState;
      if (ukForward) {
        nextState = currentState + 1;
      } else {
        nextState = currentState - 1;
      }

      if (nextState < 0) {
        ukForward = true;
        nextState = 1;
      } else if (nextState >= colors.length) {
        ukForward = false;
        nextState = currentState - 1;
      }
      currentState = nextState;
    }

    console.log("currentState: ", colors[currentState], currentState);
    setColor(colors[currentState]);

    if (
      colors[currentState] === "orange" &&
      style === "uk" &&
      ukForward === true
    ) {
      setUkOrange(true);
    } else {
      setUkOrange(false);
    }
  }

  function autoState() {
    if (timerState) {
      clearInterval(timerState);
      timerState = null;
      setTimer("stopped");
    } else {
      timerState = setInterval(nextState, 3000);
      setTimer("started");
    }
  }

  return (
    <div>
      <p>
        Current color: {color} [{currentState}]
      </p>
      <p>Current style: {style}</p>
      <p>Timer: {timer}</p>
      <div
        id="red"
        className={
          "sign " +
          (color === "red" ? "active" : "") +
          (ukOrange ? " active" : "")
        }
      ></div>
      <div
        id="orange"
        className={"sign " + (color === "orange" ? "active" : "")}
      ></div>
      <div
        id="green"
        className={"sign " + (color === "green" ? "active" : "")}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "10rem",
          gap: "1rem",
        }}
      >
        <button onClick={nextState}>Next State</button>
        <button onClick={autoState}>Start/Stop timer 3sec</button>
        <select onChange={(e) => setStyle(e.target.value)}>
          <option value="greek">Greek style</option>
          <option value="uk">UK style</option>
        </select>
      </div>
    </div>
  );
}
