import React from "react"
import "./App.css"
import ReactWorldMap from "./ReactWorldMap"

function App() {
  const data1 =
    [
      { "country-code": "cn", value: 1389618778 }, // china
      { "country-code": "in", value: 1311559204 }, // india
      { "country-code": "us", value: 331883986 },  // united states
      { "country-code": "id", value: 264935824 },  // indonesia
      { "country-code": "pk", value: 210797836 },  // pakistan
      { "country-code": "br", value: 210301591 },  // brazil
      { "country-code": "ng", value: 208679114 },  // nigeria
      { "country-code": "bd", value: 161062905 },  // bangladesh
      { "country-code": "ru", value: 141944641 },  // russia
      { "country-code": "mx", value: 127318112 }   // mexico
    ]

  const data2 =
    [
      { "country-code": "cn", value: 9770.8 }, // china
      { "country-code": "in", value: 2010.0 }, // india
      { "country-code": "us", value: 62794.6 },  // united states
      { "country-code": "id", value: 3893.6 },  // indonesia
      { "country-code": "pk", value: 1482.4 },  // pakistan
      { "country-code": "br", value: 8920.8 },  // brazil
      { "country-code": "ng", value: 2028.2 },  // nigeria
      { "country-code": "bd", value: 1698.3 },  // bangladesh
      { "country-code": "ru", value: 11288.9 },  // russia
      { "country-code": "mx", value: 9673.4 }   // mexico
    ]

  return (
    < div className="App" >
      < div className="Main">
        <table>
          <tbody>
            <tr>
              <td>
                <ReactWorldMap color="red" title="Top 10 Populous Countries" value-suffix="people" size="lg" data={data1} />
              </td>
              <td>
                <ReactWorldMap color="green" title="Top 10 GDP per Capita" value-prefix="$" size="lg" data={data2} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
