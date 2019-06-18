import React, { useState } from "react";
import Content from "../components/tabs/Content";
import Tab from "../components/tabs/Tab";
import { dataTabs, themes } from "../constants";

import Tabs from "../styles/tabs/Tabs";
import TabList from "../styles/tabs/TabsStyled";
import Check from "../components/tabs/Check";
import WithTabs from "../renderProps/withTabs";

export const ThemeContext = React.createContext(themes.light);

const SimpleTabs = () => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <WithTabs>
      {(stateValue, handleChange) => (
        <Tabs>
          <TabList>
            {dataTabs.map(item => (
              <Tab
                label={item.label}
                active={stateValue === item.key}
                value={item.key}
                click={handleChange}
                key={item.key}
              />
            ))}
          </TabList>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            {dataTabs.map(
              item =>
                stateValue === item.key && (
                  <Content key={item.key}>
                    <Check content={item.content} />
                  </Content>
                )
            )}
          </ThemeContext.Provider>
        </Tabs>
      )}
    </WithTabs>
  );
};

export default SimpleTabs;
