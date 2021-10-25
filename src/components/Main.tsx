import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

import { mainAction } from 'store/actions/main';
import { mainSelector } from 'store/selectors/main';

export const Main = () => {
  const dispatch = useDispatch();

  const attribute = useSelector<RootState, boolean>(mainSelector);

  useEffect(() => {
    dispatch(mainAction(true));
  }, []);

  console.log(attribute);

  return <div className="app">{`Attribute: ${attribute}`}</div>;
};
