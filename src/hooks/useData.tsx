import { useEffect, useState } from 'react';
import { json } from 'd3';

const jsonUrl =
  'https://gist.githubusercontent.com/KrypticCoder/ae5b0f10c0c80c638ba7954cd5c12a70/raw/ec3feec9488f858919d9448bf8cefffe247c7b29/dc_car_crashes_2010-2014.json';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then(setData);
  }, []);

  return data;
};
