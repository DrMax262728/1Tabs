import React from "react";
import { connect } from "react-redux";
import { actionPanel } from "../store/modules/accordion";
import { compose } from "redux";

const withAccordion = ExpansionPanel => {
  return props => {
    const { isOpen, actionPanel } = props;
    return (
      <ExpansionPanel
        isOpen={isOpen}
        handleChange={() => actionPanel(!isOpen)}
        {...props}
      />
    );
  };
};
const mapStateToProps = state => ({
  isOpen: state.accordion.activePanel
});

const mapDispatchToProps = {
  actionPanel: actionPanel
};

const composedWithAccordion = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAccordion
);

export default composedWithAccordion;
