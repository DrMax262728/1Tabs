import React from "react";

const withAccordion = ExpansionPanel => {
  return class extends React.Component {
    state = {
      isOpen: false
    };

    handleChange = () => {
      this.setState(state => ({ isOpen: !state.isOpen }));
    };

    render() {
      return (
        <ExpansionPanel
          isOpen={this.state.isOpen}
          handleChange={this.handleChange}
          {...this.props}
        />
      );
    }
  };
};

export default withAccordion;
