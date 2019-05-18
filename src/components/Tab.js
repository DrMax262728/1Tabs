import React from "react";

const Tab = ({ label, value, click }) => {
  return <button onClick={() => click(value)}>{label}</button>;
};
export default Tab;
