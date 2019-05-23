import React from "react";
import Content from "../components/tabs/Content";
import Tab from "../components/tabs/Tab";
import { dataTabs, dataPanels } from "../constants";

import Tabs from "../styles/tabs/Tabs";
import TabList from "../styles/tabs/TabsStyled";
import ExpansionPanel from "./ExpansionPanel";

class SimpleTabs extends React.Component {
  state = {
    value: "first"
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    return (
      <Tabs>
        <TabList>
          {dataTabs.map(item => (
            <Tab
              label={item.label}
              active={this.state.value === item.key}
              value={item.key}
              click={this.handleChange}
            />
          ))}
        </TabList>
        {dataTabs.map(
          item =>
            this.state.value === item.key && (
              <Content key={item.key}>
                {item.content !== "Expansion"
                  ? item.content
                  : dataPanels.map(item => (
                      <ExpansionPanel
                        key={item.key}
                        name={item.name}
                        content={item.content}
                      />
                    ))}
              </Content>
            )
        )}
      </Tabs>
    );
  }
}

export default SimpleTabs;
