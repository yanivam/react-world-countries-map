import React from "react"
import { geoMercator, geoPath } from "d3-geo"
import geoData from "../data/countries.geo"
import "./ReactWorldMap.css"

interface IData {
  "country-code": string;
  value: number;
}

interface IProps {
  data: IData[];
  title?: string;
  color?: string;
  "value-title": string;
  size?: string; // possile values are xs, sm, md, lg, xl
}

const ReactWorldMap:React.FC<IProps> = (props) => {

  // Declare a new state variable, which we'll call "count"
  //const [color, setColor] = useState("#dedede");
  //const [countryValueMap, setCountryValueMap] = useState([]);
  const projection = geoMercator()
  .scale(75)
  const pathGenerator = geoPath().projection(projection)
  /*var showTooltip = false
  var clickedCountryName = ""
  var clickedCountryValue = 0*/

  /*const computedAverage = (data: IData[]) => {
    var sum = data.reduce((sum, value) => {
      return sum + value;
    }, 0);
  
    return avg = sum / data.length;
  }*/

  const countryWithValue = (iso: string) => {
    for(let countryObject of props.data) {
        if(iso.toLowerCase() === countryObject["country-code"].toLowerCase()) {
           return true
        }
    }
    return false
  }
  
  const countries = geoData.features
      .map((feature, idx) => {
          //const averageValue = computedAverage(props.data.values)
          //const standardDeviation = computedStandardDeviation(props.data.values)
          const color = countryWithValue(feature.properties.ISO_A2) ? props.color : "#dddddd"
          return <path
              key={"path" + idx}
              d={pathGenerator(feature as GeoJSON.Feature) as string}
              style={{ fill: color, fillOpacity: 1, stroke: "black", strokeWidth: 1, strokeOpacity: 0.1, cursor: "pointer" }}
              className="countries"
      />})

  return (
    <div className="mapView">
        <svg className="map" width={"100%"} height={"100%"}>
        {countries}
        </svg>
    </div>
  )
  /*
  <g id="highlighter" className="highlighter" onClick={toggleTooltip()} >
    {countries}
  </g>
  <div className={showTooltip ? "show" : "hide"}>
    <p>Country name: {clickedCountryName}</p>
    <p>Value: {clickedCountryValue}</p>
  </div>*/
}

export default ReactWorldMap