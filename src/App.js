import React, { Component } from 'react';
import './App.css';
import TrafficLight from "./components/TrafficLight";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <TrafficLight initialValue={0} className={"traffic-light1"} direction={"East"} />
        <div>
          <TrafficLight initialValue={1} className={"traffic-light2"} direction={"North"} />
          <TrafficLight initialValue={2} className={"traffic-light3"} direction={"South"} />
        </div>
        <div>
          <TrafficLight initialValue={3} className={"traffic-light4"} direction={"West"} />
        </div>
      </div>
    )
  }
}

export default App;
