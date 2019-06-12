import React from "react";
import Content from "../components/tabs/Content";
import Tab from "../components/tabs/Tab";
import { dataTabs } from "../constants";

import Tabs from "../styles/tabs/Tabs";
import TabList from "../styles/tabs/TabsStyled";
import Check from "../components/tabs/Check";
import WithTabs from "../renderProps/withTabs";

const SimpleTabs = () => {
  return (
    <WithTabs>
      {(stateValues, handleChange) => (
        <Tabs>
          <TabList>
            {dataTabs.map(item => (
              <Tab
                label={item.label}
                active={stateValues.value === item.key}
                value={item.key}
                click={handleChange}
                key={item.key}
              />
            ))}
          </TabList>
          {dataTabs.map(
            item =>
              stateValues.value === item.key && (
                <Content key={item.key}>
                  <Check content={item.content} />
                </Content>
              )
          )}
        </Tabs>
      )}
    </WithTabs>
  );
};

export default SimpleTabs;
