// CONSTANTS
const SET_TABS = "SET_TABS";
const initialStateTabs = { activeTab: "first" };

//ACTIONS
export const actionTabs = tab => ({ type: SET_TABS, payload: tab });

//REDUCERS
const tabs = (state = initialStateTabs, action) => {
  switch (action.type) {
    case SET_TABS: {
      return {
        ...state,
        activeTab: state.activeTab === action.payload ? null : action.payload
      };
    }
    default:
      return state;
  }
};

export default tabs;
