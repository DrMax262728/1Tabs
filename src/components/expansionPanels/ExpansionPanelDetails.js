import React from "react";
import {
  Content,
  PanelDetails,
  Text
} from "../../styles/expansionPanels/PanelDetails";

const ExpansionPanelDetails = ({ children }) => (
  <PanelDetails>
    <Content>
      <Text>{children}</Text>
    </Content>
  </PanelDetails>
);

export default ExpansionPanelDetails;
