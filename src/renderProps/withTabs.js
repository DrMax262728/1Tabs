import { useState } from "react";

const WithTabs = ({ children }) => {
  const [value, setValue] = useState("first");
  return children(value, value => setValue(value));
};

export default WithTabs;
