import React, { Fragment, useContext } from "react";
import {
  dataPanels,
  dataTable,
  dataTableHeaders,
  themes
} from "../../constants";
import ExpansionPanel from "../../containers/ExpansionPanel";
import SimpleTable from "../simpleTable/SimpleTable";
import { ThemeContext } from "../../containers/SimpleTabs";
import BtnChangeTheme from "../../styles/expansionPanels/BtnChangeTheme";

import { connect } from "react-redux";
import { actionPanelToggle } from "../../store/modules/panels";

const Check = ({ content, accordion, actionToggle }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  switch (content) {
    case "Expansion": {
      return dataPanels.map((item, index) => (
        <ExpansionPanel
          accordion={accordion}
          actionToggle={actionToggle}
          key={item.key}
          index={index}
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
          <BtnChangeTheme
            onClick={() =>
              setTheme(theme === themes.dark ? themes.light : themes.dark)
            }
          >
            Change Theme
          </BtnChangeTheme>
        </Fragment>
      );
    }

    default: {
      return content;
    }
  }
};

const mapStateToProps = state => {
  return {
    accordion: state.panels
  };
};

const mapDispatchToProps = {
  actionToggle: actionPanelToggle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Check);
