import React from "react";
import { connect } from "react-redux";
import { actionPanelToggle } from "../store/modules/panels";
import { compose } from "redux";

const withAccordion = ExpansionPanel => {
  return props => {
    const { index, accordion, actionToggle } = props;
    const status = accordion[index].status;
    return (
      <ExpansionPanel
        isOpen={status}
        handleChange={() => actionToggle({ index })}
        {...props}
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

const composedWithAccordion = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAccordion
);

export default composedWithAccordion;
