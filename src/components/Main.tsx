import React, { useMemo, useState } from "react";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import ReactTooltip from "react-tooltip";

import { ToolTipContent } from "components/TooltipContent";
import { useData } from "hooks/useData";
import { width, height, initialYear, years } from "utils/constants";
import { Map } from "components/Map";

export const Main = () => {
  const data = useData();

  const [year, setYear] = useState<number>(initialYear);

  const options: Option[] = useMemo(
    () =>
      years.map((year) => ({ label: year.toString(), value: year.toString() })),
    [years],
  );

  const onChange = ({ value }: Option) => {
    setYear(+value);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <h1 className="title">Car Crashes in Washington DC Districts</h1>
      <ReactTooltip id="properties" getContent={ToolTipContent} />
      <div className="filter-year">
        <div className="label">Filter By Year:</div>
        <Dropdown options={options} onChange={onChange} value={options[0]} />
      </div>
      <svg
        className="map"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}>
        <Map data={data} year={year} />
      </svg>
    </div>
  );
};
