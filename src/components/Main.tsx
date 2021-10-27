import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import { useData } from "hooks/useData";
import { Map } from "components/Map";
import { Graph } from "components/graph/Graph";

export const Main = () => {
  const data = useData();

  const [tabIndex, setTabIndex] = useState<number>(0);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log("data", data);

  return (
    <div className="main">
      <h1 className="title">Car Crashes in Washington DC Districts</h1>
      <Tabs selectedIndex={tabIndex} onSelect={setTabIndex}>
        <TabList>
          <Tab>Map</Tab>
          <Tab>Graph</Tab>
        </TabList>
        <TabPanel>
          <Map data={data} />
        </TabPanel>
        <TabPanel>
          <Graph data={data} />
        </TabPanel>
      </Tabs>
    </div>
  );
};
