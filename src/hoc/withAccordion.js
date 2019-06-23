import React from "react";
import { connect } from "react-redux";
import { actionPanel } from "../store/modules/accordion";

const withAccordion = ExpansionPanel => {
  return props => (
    <ExpansionPanel
      isOpen={props.isOpen}
      handleChange={props.action}
      {...props}
    />
  );
};
const mapStateToProps = state => ({
  isOpen: state.accordion.activePanel
});

const mapDispatchToProps = {
  action: actionPanel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAccordion);
