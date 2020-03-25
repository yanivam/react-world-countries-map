import React from "react"
import "./App.css"
import ReactWorldMap from "./ReactWorldMap"

function App() {
  const data =
    [
      {"country-code": "cn", value: 1389618778}, // china
      {"country-code": "id", value: 1311559204}, // india
      {"country-code": "us", value: 331883986},  // united states
      {"country-code": "in", value: 264935824},  // indonesia
      {"country-code": "pk", value: 210797836},  // pakistan
      {"country-code": "br", value: 210301591},  // brazil
      {"country-code": "ng", value: 208679114},  // nigeria
      {"country-code": "bd", value: 161062905},  // bangladesh
      {"country-code": "ru", value: 141944641},  // russia
      {"country-code": "mx", value: 127318112}   // mexico
    ]

  return (
    < div className="App" >
      < div className="Main">
        <ReactWorldMap color="#00ff00" title="Top 10 Populous Countries" value-suffix="people" size="md" data={data} />
      </div>
    </div>
  );
}

export default App;
