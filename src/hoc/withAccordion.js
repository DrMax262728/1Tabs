import React from "react";
import { actionPanelToggle } from "../store/modules/panels";
import { useSelector, useDispatch } from "react-redux";

const withAccordion = ExpansionPanel => {
  return props => {
    const accordion = useSelector(state => state.panels);
    const dispatch = useDispatch();
    const actionToggle = args => dispatch(actionPanelToggle(args));
    const { index } = props;
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

export default withAccordion;
