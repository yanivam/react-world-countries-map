import React, { useState } from "react"
import { geoMercator, geoPath } from "d3-geo"
import geoData from "../data/countries.geo"

const ReactWorldMap = () => {
  // Declare a new state variable, which we'll call "count"
  const projection = geoMercator()
  
  const pathGenerator = geoPath().projection(projection)
  
  const countries = geoData.features
      .map((feature, idx) => {
          const fakeData = Math.random()
          return <path
              key={"path" + idx}
              d={pathGenerator(feature as GeoJSON.Feature) as string}
              style={{ fill: "#dedede", fillOpacity: fakeData, stroke: "black", strokeWidth: 2, strokeOpacity: 1, cursor: "pointer" }}
              className="states"
      />})

  return (
    <div className="map">
        <svg width={"100%"} height={"100%"}>
            {countries}
        </svg>
    </div>
  )
}

export default ReactWorldMap