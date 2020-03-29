import React from "react"
import { geoMercator, geoPath } from "d3-geo"
import geoData from "./countries.geo"
import "./ReactWorldCountriesMap.css"
import { Tooltip } from "react-svg-tooltip";

const CDefaultColor = "#dddddd"

interface IData {
  country: string,
  value: number
}

interface IProps {
  data: IData[],
  title?: string,
  "value-prefix"?: string,
  "value-suffix"?: string,
  color?: string,
  tooltipBgColor?: string,
  tooltipTextColor?: string,
  size?: string // possile values are sm, md, lg
}

const CSizes: { [key: string]: number } = {
  "sm": 240,
  "md": 336,
  "lg": 480,
}

const CViewBox = "0 -200 960 760"
const CHeightRatio = 5/6

export const ReactWorldCountriesMap: React.FC<IProps> = (props) => {

  // Inits
  const size = typeof (props.size) !== "undefined" ? props.size : "xs"
  const width = CSizes[size]
  const height = CSizes[size] * CHeightRatio
  const valuePrefix = (typeof(props["value-prefix"])==="undefined") ? "" : props["value-prefix"]
  const valueSuffix = (typeof(props["value-suffix"])==="undefined") ? "" : props["value-suffix"]
  const tooltipBgColor = (typeof(props.tooltipBgColor)==="undefined") ? "black" : props.tooltipBgColor
  const tooltipTextColor = (typeof(props.tooltipTextColor)==="undefined") ? "white" : props.tooltipTextColor
  const title = (typeof(props.title)==="undefined") ? "" : <p>{props.title}</p>

  const containerRef = React.createRef<SVGSVGElement>();

  // Calc min/max values and build country map for direct access
  const countryValueMap: { [key: string]: number } = {}
  let max: number = -Infinity
  let min: number = Infinity
  props.data.forEach(entry => {
    const key = entry["country"].toUpperCase()
    const value = entry.value
    min = (min > value) ? value : min
    max = (max < value) ? value : max
    countryValueMap[key] = value
  })

  // Build path for each country
  const projection = geoMercator()
  const pathGenerator = geoPath().projection(projection)

  const countriesPath = geoData.features
    .map((feature, idx) => {
      const triggerRef = React.createRef<SVGPathElement>();
      const isHighlight = typeof (countryValueMap[feature.properties.ISO_A2]) != "undefined"
      let color: string = CDefaultColor
      let opacityLevel = 0.1

      // Things to do if country is in data
      if (isHighlight) {
        color = props.color ? props.color : CDefaultColor
        opacityLevel += (0.9 * (countryValueMap[feature.properties.ISO_A2] - min) / (max - min))
      }
      
      const tooltipStart = 30
      const tooltip = (!isHighlight) ? "" :
        <Tooltip triggerRef={triggerRef} containerRef={containerRef} >
          <rect
            x={tooltipStart}
            y={tooltipStart}
            width={320}
            height={80}
            rx={5}
            ry={5}
            fill={tooltipBgColor}
          />
          <text x={tooltipStart * 2} y={tooltipStart * 2} fontSize={24} fill={tooltipTextColor}>
            <tspan>{feature.properties.NAME}</tspan>
            <tspan x={60} dy="1em">{valuePrefix}{countryValueMap[feature.properties.ISO_A2].toLocaleString()} {valueSuffix}</tspan>
          </text>
        </Tooltip>

      // Build a path for a country
      const path = (
        <g key={feature.properties.NAME}>
          <path
            key={"path" + idx}
            ref={triggerRef}
            d={pathGenerator(feature as GeoJSON.Feature) as string}
            style={{ fill: color, fillOpacity: opacityLevel, stroke: "black", strokeWidth: 1, strokeOpacity: 0.1, cursor: "pointer" }}
          />
          {tooltip}
        </g>
      )
      return path
    })

  // Render the SVG
  return (
    <div className="mapView">
      {title}
      <svg ref={containerRef} className="map" height={height + "px"} width={width + "px"} viewBox={CViewBox}>
        {countriesPath}
      </svg>
    </div>
  )
}
