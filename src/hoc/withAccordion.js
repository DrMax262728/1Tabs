import React from "react";
import { actionPanelToggle } from "../store/modules/panels";
import { connect } from "react-redux";
import { compose } from "redux";

const withAccordion = ExpansionPanel => {
  return ({ accordion, actionToggle, index, ...rest }) => {
    const status = accordion[index].status;
    return (
      <ExpansionPanel
        isOpen={status}
        handleChange={() => actionToggle({ index: index })}
        {...rest}
      />
    );
  };
};

const mapStateToProps = state => {
  return {
    accordion: state.panels
  };
};

const mapDispatchToProps = {
  actionToggle: actionPanelToggle
};

const ComposeWithAccordion = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAccordion
);

export default ComposeWithAccordion;
