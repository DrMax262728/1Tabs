import React from "react";
import Content from "../components/Content";
import Tabs from "../components/Tabs";

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(value);
    return (
      <div>
        <Tabs value={value} onChange={this.handleChange} />
        {value === 0 && <Content>Item One</Content>}
        {value === 1 && <Content>Item Two</Content>}
      </div>
    );
  }
}

export default SimpleTabs;
