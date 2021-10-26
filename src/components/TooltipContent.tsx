import React from 'react';
import ReactTooltip from 'react-tooltip';

export const ToolTipContent = (dataTip) => {
  ReactTooltip.rebuild();
  if (!dataTip) {
    return '';
  }
  const [name, crashes] = dataTip.split('|');

  return name ? (
    <p>
      <strong>{name}: </strong>
      {crashes}
    </p>
  ) : null;
};
