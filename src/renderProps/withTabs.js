import { connect } from "react-redux";
import { actionTabs } from "../store/modules/tabs";

const WithTabs = ({ children, activeTab, handleActionTabs }) => {
  return children(activeTab, value => handleActionTabs(value));
};

const mapStateToProps = state => {
  return {
    activeTab: state.tabs.activeTab
  };
};

const mapDispatchToState = {
  handleActionTabs: actionTabs
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(WithTabs);
