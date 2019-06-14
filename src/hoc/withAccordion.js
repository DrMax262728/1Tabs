import React, { useState } from "react";

const withAccordion = ExpansionPanel => {
  return props => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <ExpansionPanel
        isOpen={isOpen}
        handleChange={() => setIsOpen(!isOpen)}
        {...props}
      />
    );
  };
};

export default withAccordion;
