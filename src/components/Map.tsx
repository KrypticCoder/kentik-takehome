import React, { useState } from 'react';
import { geoMercator, geoPath, max, scaleLinear } from 'd3';
import { width, height, initialYear } from 'utils/constants';

export const Map = ({ data }) => {
  const [year, setYear] = useState<number>(initialYear);

  const projection = geoMercator().fitSize([width, height], data);
  const path = geoPath().projection(projection);

  const numCrashesInYear: number[] = data.features.map(
    (feature) => feature.properties[year],
  );

  const opacityScale = scaleLinear()
    .domain([0, max(numCrashesInYear)])
    .range([0.3, 1]);

  console.log('data', data);
  console.log('max', max(numCrashesInYear));

  console.log('opacity', opacityScale(1));

  const onMouseEnter = (properties) => {
    console.log('properties', properties[year]);
  };

  return (
    <g className="map">
      {data.features.map((feature) => (
        <path
          className="city"
          d={path(feature)}
          opacity={opacityScale(feature.properties[year])}
          onMouseEnter={() => onMouseEnter(feature.properties)}>
          <text text-anchor="middle">
            <div>{feature.properties.name}</div>
            <div>{feature.properties[year]}</div>
          </text>
        </path>
      ))}
      {}
    </g>
  );
};
