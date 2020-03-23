import React from "react"
import "./App.css"
import ReactWorldMap from "./ReactWorldMap"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactWorldMap color="#ff0000" value-title="My Chart" data=
        {
          [
            {
              "country-code":"us", 
              value:360
            },
            {
              "country-code":"ru", 
              value:200
            },
            {
              "country-code":"il", 
              value:230
            }
          ]
        }
        />
      </header>
    </div>
  );
}

export default App;
