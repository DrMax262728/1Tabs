import React from "react";
import { dataPanels } from "../constants";
import ExpansionPanel from "../containers/ExpansionPanel";

const Check = ({ content }) => {
  if (content !== "Expansion") {
    return content;
  } else {
    return dataPanels.map(item => (
      <ExpansionPanel key={item.key} name={item.label} content={content} />
    ));
  }
};

export default Check;
