import React from "react";
import Content from "../components/Content";
import Tab from "../components/Tab";

import Tabs from "../styles/tabs/Tabs";
import TabList from "../styles/tabs/TabsStyled";

import { data } from "../constants/index";

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
          {data.map(item => (
            <Tab
              label={item.label}
              active={this.state.value === item.name}
              value={item.name}
              click={this.handleChange}
            />
          ))}
        </TabList>
        {data.map(
          item =>
            this.state.value === item.name && <Content>{item.content}</Content>
        )}
      </Tabs>
    );
  }
}

export default SimpleTabs;
