import React from "react";
import ExpansionPanelSummary from "../components/expansionPanels/ExpansionPanelSummary";
import Panel from "../styles/expansionPanels/Panel";
import ExpansionPanelDetails from "../components/expansionPanels/ExpansionPanelDetails";

class ExpansionPanel extends React.Component {
  state = {
    isOpen: false
  };

  handleChange = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    return (
      <Panel active={this.state.isOpen}>
        <ExpansionPanelSummary onClick={this.handleChange}>
          {this.props.name}
        </ExpansionPanelSummary>
        {this.state.isOpen && (
          <ExpansionPanelDetails>{this.props.content}</ExpansionPanelDetails>
        )}
      </Panel>
    );
  }
}

export default ExpansionPanel;
