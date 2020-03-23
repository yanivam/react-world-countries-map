import React, { useState } from "react"
import { geoMercator, geoPath } from "d3-geo"
import geoData from "../data/countries.geo"

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
  const [color, setColor] = useState("#dedede");
  const [countryValueMap, setCountryValueMap] = useState([]);
  const projection = geoMercator()
  
  const pathGenerator = geoPath().projection(projection)
  var showTooltip = false
  var clickedCountryName = ""
  var clickedCountryValue = 0
  
  const countries = geoData.features
      .map((feature, idx) => {
          const averageValue = computedAverage(countryValueMap)
          const standardDeviation = computedStandardDeviation(countryValueMap)
          const opacityLevel = countryValueMap.contains(feature.properties.ADM0_A3) ? computedPercentage(countryValueMap[feature.properties.ADM0_A3], averageValue, standardDeviation) : 0
          return <path
              key={"path" + idx}
              d={pathGenerator(feature as GeoJSON.Feature) as string}
              style={{ fill: color, fillOpacity: opacityLevel, stroke: "black", strokeWidth: 2, strokeOpacity: 1, cursor: "pointer" }}
              className="states"
      />})

  return (
    <div className="map">
        <svg width={"100%"} height={"100%"}>
            <g id="highlighter" className="highlighter" onClick={toggleTooltip(showTooltip)} >
              {countries}
            </g>
            <div className={showTooltip ? "show" : "hide"}>
              <p>Country name: {clickedCountryName}</p>
              <p>Value: {clickedCountryValue}</p>
            </div>
        </svg>
    </div>
  )
}

export default ReactWorldMap