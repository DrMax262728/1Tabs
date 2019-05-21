import React from "react";
import {
  PanelSummary,
  Header,
  AngleDown
} from "../../styles/expansionPanels/PanelSummary";

const ExpansionPanelSummary = ({ children, onClick }) => (
  <PanelSummary onClick={onClick}>
    <Header>
      <p>{children}</p>
    </Header>
    <AngleDown>
      <i className="fas fa-angle-down" />
    </AngleDown>
  </PanelSummary>
);

export default ExpansionPanelSummary;
