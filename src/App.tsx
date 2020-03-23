import React from "react"
import "./App.css"
import ReactWorldMap from "./ReactWorldMap"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactWorldMap color="#ff0000" title="My chart" data=[{"country-code":"us", value:360}]/>
      </header>
    </div>
  );
}

export default App;
