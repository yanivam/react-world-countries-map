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
  "xs": {width: 400, height: 160}, //screen size: 480x360
  "sm": {width: 400, height: 160}, //screen size: 576x432
  "md": {width: 500, height: 200}, //screen size: 768x576
  "lg": {width: 600, height: 240}, //screen size: 992x744
  "xl": {width: 1000, height: 400} //screen size: 1200x900
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// TODO: use viewBox
// https://css-tricks.com/scale-svg/
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const ReactWorldMap: React.FC<IProps> = (props) => {

  // Setup width and height based on size
  const size = typeof(props.size)!=="undefined" ? props.size : "xs"
  const width = CSizes[size].width
  const height = CSizes[size].height

  // Build the country map for direct access
  const countryValueMap: {[key:string]:number} = {}
  props.data.forEach( entry => {
    const key = entry["country-code"].toUpperCase()
    const value = entry.value
    countryValueMap[key] = value
  })

  const projection = geoMercator()
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

  const viewBox = "0 0 " + width + " " + height

  return (
    <div className="mapView">
      <svg className="map" width={"100%"} height={"100%"} viewBox={viewBox}>
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