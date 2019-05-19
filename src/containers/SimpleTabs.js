import React from "react";
import Content from "../components/Content";
import Tab from "../components/Tab";

import Tabs from "../styles/tabs/Tabs";
import TabList from "../styles/tabs/TabsStyled";

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    let data = [
      {
        active: value === 0,
        label: "tab1",
        id: 0,
        content: "Item One"
      },
      {
        active: value === 1,
        label: "tab2",
        id: 1,
        content: "Item Two"
      },
      {
        active: value === 2,
        label: "tab3",
        id: 2,
        content: "Item Three"
      }
    ];
    return (
      <Tabs>
        <TabList>
          {data.map(item => (
            <Tab
              label={item.label}
              active={item.active}
              value={item.id}
              click={this.handleChange}
            />
          ))}
        </TabList>
        {data.map(
          item => value === item.id && <Content>{item.content}</Content>
        )}
      </Tabs>
    );
  }
}

export default SimpleTabs;
