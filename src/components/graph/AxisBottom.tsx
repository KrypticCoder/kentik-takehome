import { ScaleLinear } from "d3";
import React, { FC } from "react";

interface AxisBottomProps {
  xScale: ScaleLinear<number, number, never>;
  innerHeight: number;
  innerWidth: number;
}

export const AxisBottom: FC<AxisBottomProps> = ({
  xScale,
  innerHeight,
  innerWidth,
}) => (
  <>
    {xScale.ticks().map((tickValue) => (
      <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
        <line y2={innerHeight} />
        <text y={innerHeight + 5} dy="1em" className="middle">
          {tickValue}
        </text>
      </g>
    ))}
    <g transform={`translate(0, ${innerHeight})`}>
      <line x1={innerWidth} />
    </g>
  </>
);
