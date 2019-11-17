import React from "react";
import ReactDOM from "react-dom";

import Octave from "./components/Octave";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Piano</h1>
      <h2>The interactive keyboard piece of my app</h2>
      <Octave width="700"/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
