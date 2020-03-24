import React from "react"
import { geoMercator, geoPath } from "d3-geo"
import geoData from "../data/countries.geo"
import "./ReactWorldMap.css"

const CDefaultColor = "#dddddd"

interface IData {
  "country-code": string,
  value: number
}

interface IProps {
  data: IData[],
  title?: string,
  color?: string,
  size?: string // possile values are xs, sm, md, lg, xl
}

interface ISize {
  height: number,
  width: number
}

const CSizes: {[key:string]:ISize} = {
  "xs": {width: 480, height: 360},
  "sm": {width: 576, height: 432},
  "md": {width: 768, height: 576},
  "lg": {width: 992, height: 744},
  "xl": {width: 1200, height: 900}
}

const ReactWorldMap: React.FC<IProps> = (props) => {

  // Setup width and height based on size
  const size = typeof(props.size)!=="undefined" ? props.size : "xs"
  const width = CSizes[size].width + "px"
  const height = CSizes[size].height + "px"
  const scale = CSizes[size].width*0.05

  // Build the country map for direct access
  const countryValueMap: {[key:string]:number} = {}
  props.data.forEach( entry => {
    const key = entry["country-code"].toUpperCase()
    const value = entry.value
    countryValueMap[key] = value
  })


  // Declare a new state variable, which we'll call "count"
  //const [color, setColor] = useState("#dedede");
  //const [countryValueMap, setCountryValueMap] = useState([]);
  const projection = geoMercator().scale(scale).translate([CSizes[size].width / 4.5, CSizes[size].height / 4.5])
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

  // build path for each country
  const countriesPath = geoData.features
    .map((feature, idx) => {
      //const averageValue = computedAverage(props.data.values)
      //const standardDeviation = computedStandardDeviation(props.data.values)
      const color = typeof(countryValueMap[feature.properties.ISO_A2])!="undefined" ? props.color : CDefaultColor
      return <path
        key={"path" + idx}
        d={pathGenerator(feature as GeoJSON.Feature) as string}
        style={{ fill: color, fillOpacity: 1, stroke: "black", strokeWidth: 1, strokeOpacity: 0.1, cursor: "pointer" }}
        className="countries"
      />
    })

  return (
    <div className="mapView">
      <svg className="map" max-width={width} max-height={height}>
        {countriesPath}
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