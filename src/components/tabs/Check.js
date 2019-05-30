import React from "react";
import { dataPanels } from "../../constants";
import ExpansionPanel from "../../containers/ExpansionPanel";
import SimpleTable from "../simpleTable/SimpleTable";

const Check = ({ content }) => {
  switch (content) {
    case "Expansion": {
      return dataPanels.map(item => (
        <ExpansionPanel
          key={item.key}
          name={item.label}
          content={item.content}
        />
      ));
    }

    case "SimpleTable": {
      return <SimpleTable />;
    }

    default: {
      return content;
    }
  }
};

export default Check;
