import React, { useMemo, FC } from "react";
import { geoMercator, geoPath, max, scaleLinear } from "d3";
import Dropdown, { Option } from "react-dropdown";
import ReactTooltip from "react-tooltip";
import { ToolTipContent } from "components/TooltipContent";

import { height, years } from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setYear } from "store/actions/main";
import { yearSelector } from "store/selectors/main";

interface MapProps {
  data: any;
}

const options: Option[] = years.map((year) => ({
  label: year.toString(),
  value: year.toString(),
}));

export const Map: FC<MapProps> = ({ data }) => {
  const dispatch = useDispatch();

  const year = useSelector<RootState, number>(yearSelector);

  const projection = geoMercator().fitSize([height, height], data);
  const path = geoPath().projection(projection);

  const numCrashesInYear: number[] = data.features.map(
    (feature) => feature.properties[year],
  );

  const opacityScale = scaleLinear()
    .domain([0, max(numCrashesInYear)])
    .range([0.3, 1]);

  const onDropdownSelect = ({ value }: Option) => dispatch(setYear(+value));
  const dropdownValue = useMemo(
    () => options.find(({ value }) => +value === year),
    [year],
  );

  return (
    <div className="map">
      <ReactTooltip id="map-tooltip" getContent={ToolTipContent} />
      <div className="filter-year">
        <div className="label">Filter By Year:</div>
        <Dropdown
          options={options}
          onChange={onDropdownSelect}
          value={dropdownValue}
        />
      </div>
      <svg className="map" height={height} width={height}>
        <g>
          {data.features.map((feature) => {
            const crashes = feature.properties[year] || 0;
            return (
              <path
                key={feature.id}
                className="city"
                d={path(feature)}
                opacity={opacityScale(crashes)}
                data-tip={`${feature.properties.name}|${crashes}`}
                data-for="map-tooltip"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
