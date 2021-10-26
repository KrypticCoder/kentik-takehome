import React from 'react';

import { useData } from 'hooks/useData';
import { width, height } from 'utils/constants';
import { Map } from 'components/Map';

export const Main = () => {
  const data = useData();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <Map data={data} />
    </svg>
  );
};
