import React from "react";

class WithTabs extends React.Component {
  state = {
    value: "first"
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const children = this.props.children;
    return children(this.state, this.handleChange);
  }
}

export default WithTabs;
