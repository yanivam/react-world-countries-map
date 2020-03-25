import React from "react"
import "./App.css"
import ReactWorldMap from "./ReactWorldMap"

function App() {
  const data =
    [
      {
        "country-code": "us",
        value: 10
      },
      {
        "country-code": "ru",
        value: 20
      },
      {
        "country-code": "ca",
        value: 30
      },
      {
        "country-code": "mx",
        value: 40
      },
      {
        "country-code": "fr",
        value: 50
      }
    ]

  return (
    < div className="App" >
      < div className="Main">
        <ReactWorldMap color="#00ff00" title="My Chart" value-label="Smart people" size="xl" data={data} />
      </div>
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