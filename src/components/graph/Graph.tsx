import React, { FC } from "react";
import { scaleBand, max, scaleLinear } from "d3";
import {
  width,
  height,
  margin,
  years,
  xAxisLabelOffset,
  yAxisLabelOffset,
} from "utils/constants";
import ReactTooltip from "react-tooltip";
import { AxisBottom } from "components/graph/AxisBottom";
import { AxisLeft } from "components/graph/AxisLeft";
import { Marks } from "components/graph/Marks";

interface GraphProps {
  data: any;
}

export const Graph: FC<GraphProps> = ({ data }) => {
  let totalCrashes = { "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0 };
  data.features.forEach((feature) => {
    years.forEach((year) => {
      totalCrashes[year] += feature.properties[year];
    });
  });

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yearsStringArray = years.map((year) => year.toString());

  const yScale = scaleBand()
    .domain(yearsStringArray)
    .range([0, innerHeight])
    .padding(0.2);

  const xScale = scaleLinear()
    .domain([0, max(Object.values(totalCrashes))])
    .range([0, innerWidth]);

  return (
    <div className="graph">
      <ReactTooltip id="graph-tooltip" />
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisLeft yScale={yScale} />
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            innerWidth={innerWidth}
          />
          <text
            className="axis-label vertical"
            y={innerHeight / 2}
            x={yAxisLabelOffset}>
            Year
          </text>
          <text
            className="axis-label"
            textAnchor="middle"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}>
            Total Number of Crashes
          </text>
          <Marks
            yearsStringArray={yearsStringArray}
            totalCrashes={totalCrashes}
            xScale={xScale}
            yScale={yScale}
          />
        </g>
      </svg>
    </div>
  );
};
