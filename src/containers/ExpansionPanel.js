import React from "react";
import ExpansionPanelSummary from "../components/expansionPanels/ExpansionPanelSummary";
import Panel from "../styles/expansionPanels/Panel";
import ExpansionPanelDetails from "../components/expansionPanels/ExpansionPanelDetails";
import { PanelDetails } from "../styles/expansionPanels/PanelDetails";

class ExpansionPanel extends React.Component {
  state = {
    isOpen: false
  };

  handleChange = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    return (
      <Panel>
        <ExpansionPanelSummary onClick={this.handleChange}>
          Expansion Panel 1
        </ExpansionPanelSummary>
        {this.state.isOpen && (
          <ExpansionPanelDetails>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
            animi dicta impedit inventore nostrum optio pariatur quas quis sint?
            Architecto culpa eos itaque iure laborum magnam quaerat temporibus,
            tenetur.
          </ExpansionPanelDetails>
        )}
      </Panel>
    );
  }
}

export default ExpansionPanel;
