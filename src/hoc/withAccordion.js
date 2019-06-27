import React from "react";

const withAccordion = ExpansionPanel => {
  return props => {
    const status = props.accordion[props.index].status;
    return (
      <ExpansionPanel
        isOpen={status}
        handleChange={() => props.actionToggle({ index: props.index })}
        {...props}
      />
    );
  };
};

export default withAccordion;
