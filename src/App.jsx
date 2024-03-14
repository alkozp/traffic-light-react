import "./App.css";
import TrafficLight from "./components/TrafficLight";
console.clear();

function App() {
  return (
    <div>
      <h1>React traffic light</h1>
      <TrafficLight />
      {/* {TrafficLight()} */}
    </div>
  );
}

export default App;
