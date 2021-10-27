import React, { FC } from "react";
import { ScaleBand } from "d3";

interface MarksProps {
  yearsStringArray: string[];
  totalCrashes: Record<string, number>;
  xScale;
  yScale: ScaleBand<string>;
}

export const Marks: FC<MarksProps> = ({
  yearsStringArray,
  totalCrashes,
  xScale,
  yScale,
}) => (
  <>
    {yearsStringArray.map((year) => (
      <rect
        className="mark"
        key={year}
        x={0}
        y={yScale(year)}
        width={xScale(totalCrashes[year])}
        height={yScale.bandwidth()}
        data-tip={Math.round(xScale(totalCrashes[year]))}
        data-for="graph-tooltip"
      />
    ))}
  </>
);
