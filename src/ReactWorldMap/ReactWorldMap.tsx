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
  width: number,
  viewBox: string
}

const CSizes: {[key:string]:ISize} = {
  "xs": {width: 146, height: 132, viewBox: "0 -200 960 760"}, //screen size: 480x360
  "sm": {width: 240, height: 200, viewBox: "0 -200 960 760"}, //screen size: 576x432
  "md": {width: 336, height: 280, viewBox: "0 -200 960 760"}, //screen size: 768x576
  "lg": {width: 480, height: 400, viewBox: "0 -200 960 760"}, //screen size: 992x744
  "xl": {width: 720, height: 600, viewBox: "0 -200 960 760"}, //screen size: 1200x900
}

const ReactWorldMap: React.FC<IProps> = (props) => {

  // Setup width and height based on size
  const size = typeof(props.size)!=="undefined" ? props.size : "xs"
  const width = CSizes[size].width
  const height = CSizes[size].height
  const viewBox = CSizes[size].viewBox

  // Build the country map for direct access
  const countryValueMap: {[key:string]:number} = {}
  let max:number = -Infinity
  let min:number = Infinity
  props.data.forEach( entry => {
    const key = entry["country-code"].toUpperCase()
    const value = entry.value
    min = (min > value) ? value : min
    max = (max < value) ? value : max
    countryValueMap[key] = value
  })

  const projection = geoMercator()
  const pathGenerator = geoPath().projection(projection)
  /*var showTooltip = false
  var clickedCountryName = ""
  var clickedCountryValue = 0*/


  // build path for each country
  const countriesPath = geoData.features
    .map((feature, idx) => {
      let color:string = CDefaultColor
      let opacityLevel = 0.1
      if(typeof(countryValueMap[feature.properties.ISO_A2])!="undefined") {
        color = props.color ? props.color : CDefaultColor
        opacityLevel += (0.9 * (countryValueMap[feature.properties.ISO_A2] - min) / (max - min))
      }
      const path = <path
        key={"path" + idx}
        d={pathGenerator(feature as GeoJSON.Feature) as string}
        style={{ fill: color, fillOpacity: opacityLevel, stroke: "black", strokeWidth: 1, strokeOpacity: 0.1, cursor: "pointer" }}
      /> 
      return path
    })

  return (
    <div className="mapView">
      <svg className="map" height={height+"px"} width={width+"px"} viewBox={viewBox}>
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