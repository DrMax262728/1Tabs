import { connect } from "react-redux";
import { setValue } from "../store/actions";

const WithTabs = props => {
  return props.children(props.storeValue, value => props.setValue(value));
};

const mapStateToProps = store => {
  console.log(store);
  return {
    storeValue: store.value
  };
};

const mapDispatchToState = {
  setValue
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(WithTabs);
