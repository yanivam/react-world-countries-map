import React from "react"
import { geoMercator, geoPath } from "d3-geo"
import geoData from "../data/countries.geo"
import "./ReactWorldMap.css"
import { Tooltip } from "react-svg-tooltip";

const CDefaultColor = "#dddddd"

interface IData {
  "country-code": string,
  value: number
}

interface IProps {
  data: IData[],
  title?: string,
  "value-label"?: string,
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

  const containerRef = React.createRef<SVGSVGElement>();

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

  // build path for each country
  const countriesPath = geoData.features
    .map((feature, idx) => {
      let color:string = CDefaultColor
      let opacityLevel = 0.1
      if(typeof(countryValueMap[feature.properties.ISO_A2])!="undefined") {
        color = props.color ? props.color : CDefaultColor
        opacityLevel += (0.9 * (countryValueMap[feature.properties.ISO_A2] - min) / (max - min))
      }
      const triggerRef = React.createRef<SVGPathElement>();
      const path = (
        <g key={feature.properties.NAME}>
          <path
            key={"path" + idx}
            ref={triggerRef}
            d={pathGenerator(feature as GeoJSON.Feature) as string}
            style={{ fill: color, fillOpacity: opacityLevel, stroke: "black", strokeWidth: 1, strokeOpacity: 0.1, cursor: "pointer" }}
          />
          <Tooltip triggerRef={triggerRef} containerRef={containerRef}>
          <rect
            x={10}
            y={10}
            width={300}
            height={50}
            rx={0.5}
            ry={0.5}
            fill="black"
          />
          <text x={25} y={25} fontSize={12} fill="white">
            <tspan>Country name: {feature.properties.NAME}</tspan>
            <tspan x={22} dy="1em">
            {props["value-label"] ? props["value-label"]: "Value"}: {countryValueMap[feature.properties.ISO_A2] ? countryValueMap[feature.properties.ISO_A2] : 0}
            </tspan>
          </text>
          </Tooltip>
        </g>
      )
      return path
    })

  return (
    <div className="mapView">
      <svg ref={containerRef} className="map" height={height+"px"} width={width+"px"} viewBox={viewBox}>
        {countriesPath}
      </svg>
    </div>
  )
}

export default ReactWorldMap