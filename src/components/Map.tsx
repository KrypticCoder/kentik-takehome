import React, { FC } from "react";
import { geoMercator, geoPath, max, scaleLinear } from "d3";
import { width, height } from "utils/constants";

interface MapProps {
  data: any;
  year: number;
}

export const Map: FC<MapProps> = ({ data, year }) => {
  const projection = geoMercator().fitSize([width, height], data);
  const path = geoPath().projection(projection);

  const numCrashesInYear: number[] = data.features.map(
    (feature) => feature.properties[year],
  );

  const opacityScale = scaleLinear()
    .domain([0, max(numCrashesInYear)])
    .range([0.3, 1]);

  return (
    <g>
      {data.features.map((feature) => {
        const crashes = feature.properties[year] || 0;
        return (
          <path
            className="city"
            d={path(feature)}
            opacity={opacityScale(crashes)}
            data-tip={`${feature.properties.name}|${crashes}`}
            data-for="properties"
          />
        );
      })}
    </g>
  );
};
