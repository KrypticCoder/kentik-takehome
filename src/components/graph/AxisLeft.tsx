import React, { FC } from "react";
import { ScaleBand } from "d3";

import { margin } from "utils/constants";

interface AxisLeftProps {
  yScale: ScaleBand<string>;
}

export const AxisLeft: FC<AxisLeftProps> = ({ yScale }) => (
  <>
    {yScale.domain().map((tickValue) => (
      <g key={tickValue} transform={`translate(-50, ${yScale(tickValue)})`}>
        <text dy="3em">{tickValue}</text>
      </g>
    ))}
  </>
);
