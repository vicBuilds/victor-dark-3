import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-88.3639, 0, 0],
        center: [0, 22.5726],
        scale: 1200,
      }}
      style={{width:'100%', height:'100%'}}
    >
      <Geographies
        geography="/features.json"
        fill='#000000'
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[88.3639, 22.5726]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"Kolkata"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
