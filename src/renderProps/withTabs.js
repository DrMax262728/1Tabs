import { useDispatch, useSelector } from "react-redux";
import { actionTabs } from "../store/modules/tabs";

const WithTabs = ({ children }) => {
  const activeTab = useSelector(state => state.tabs.activeTab);
  const dispatch = useDispatch();
  const handleActiveTabs = args => dispatch(actionTabs(args));

  return children(activeTab, value => handleActiveTabs(value));
};

export default WithTabs;
