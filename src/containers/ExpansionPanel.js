import React, { useContext } from "react";
import ExpansionPanelSummary from "../components/expansionPanels/ExpansionPanelSummary";
import Panel from "../styles/expansionPanels/Panel";
import ExpansionPanelDetails from "../components/expansionPanels/ExpansionPanelDetails";
import withAccordion from "../hoc/withAccordion";
import { ThemeContext } from "./SimpleTabs";

const ExpansionPanel = ({ name, content, isOpen, handleChange, ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Panel style={theme} active={isOpen}>
      <ExpansionPanelSummary onClick={handleChange}>
        {name}
      </ExpansionPanelSummary>
      {isOpen && <ExpansionPanelDetails>{content}</ExpansionPanelDetails>}
    </Panel>
  );
};

export default withAccordion(ExpansionPanel);
