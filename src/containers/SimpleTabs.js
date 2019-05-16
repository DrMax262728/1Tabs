import React from "react";
import Content from "../components/Content";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="tab1" />
          <Tab label="tab2" />
          <Tab label="tab3" />
        </Tabs>
        {value === 0 && <Content>Item One</Content>}
        {value === 1 && <Content>Item Two</Content>}
        {value === 2 && <Content>Item Three</Content>}
      </div>
    );
  }
}

export default SimpleTabs;
