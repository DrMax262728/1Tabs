import React, { Fragment, useContext, useState } from "react";
import {
  dataPanels,
  dataTable,
  dataTableHeaders,
  themes
} from "../../constants";
import ExpansionPanel from "../../containers/ExpansionPanel";
import SimpleTable from "../simpleTable/SimpleTable";
import { ThemeContext } from "../../containers/SimpleTabs";

const Check = ({ content }) => {
  const { theme, setTheme } = useContext(ThemeContext);
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
      return (
        <Fragment>
          <SimpleTable
            data={dataTable}
            columns={dataTableHeaders}
            prefix={"users"}
          />
          <button
            onClick={() =>
              setTheme(theme === themes.dark ? themes.light : themes.dark)
            }
          >
            Change
          </button>
        </Fragment>
      );
    }

    default: {
      return content;
    }
  }
};

export default Check;
