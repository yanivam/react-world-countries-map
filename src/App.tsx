import React from "react"
import "./App.css"
import ReactWorldMap from "./ReactWorldMap"

function App() {
  const data =
    [
      {
        "country-code": "us",
        value: 360
      },
      {
        "country-code": "ru",
        value: 200
      },
      {
        "country-code": "il",
        value: 230
      }
    ]

  return (
    < div className="App" >
      <header className="App-header">
        <h1>size=xl</h1>
        <ReactWorldMap color="#ff0000" title="My Chart" size="xl" data={data} />
      </header>
    </div>
  );
}

export default App;

/* 
        <br/>
        <h1>size=lg</h1>
        <ReactWorldMap color="#ff0000" title="My Chart" size="lg" data={data} />
        <br/>
        <h1>size=md</h1>
        <ReactWorldMap color="#ff0000" title="My Chart" size="md" data={data} />
        <br/>
        <h1>size=sm</h1>
        <ReactWorldMap color="#ff0000" title="My Chart" size="sm" data={data} />
        <br/>
        <h1>size=xs</h1>
        <ReactWorldMap color="#ff0000" title="My Chart" size="xs" data={data} />
        <br/>
*/