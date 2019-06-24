import { connect } from "react-redux";
import { actionTabs } from "../store/modules/tabs";

const WithTabs = ({ children, activeTab, handleActiveTabs }) => {
  return children(activeTab, value => handleActiveTabs(value));
};

const mapStateToProps = state => {
  return {
    activeTab: state.tabs.activeTab
  };
};

const mapDispatchToState = {
  handleActiveTabs: actionTabs
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(WithTabs);
