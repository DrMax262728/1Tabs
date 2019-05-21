import React from "react";

import Button from "../../styles/tabs/Button";

const Tab = ({ label, value, click, active }) => {
  return (
    <Button active={active} onClick={() => click(value)}>
      {label}
    </Button>
  );
};

export default Tab;
