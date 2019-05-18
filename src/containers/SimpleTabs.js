import React from "react";
import Content from "../components/Content";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Tabs>
          <Tab label="tab1" value={0} click={this.handleChange} />
          <Tab label="tab2" value={1} click={this.handleChange} />
          <Tab label="tab3" value={2} click={this.handleChange} />
        </Tabs>
        {value === 0 && <Content>Item One</Content>}
        {value === 1 && <Content>Item Two</Content>}
        {value === 2 && <Content>Item Three</Content>}
      </div>
    );
  }
}

export default SimpleTabs;
