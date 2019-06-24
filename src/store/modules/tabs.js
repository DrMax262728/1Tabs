import { createAction, handleActions } from "redux-actions";

// CONSTANTS
const SET_TABS = "SET_TABS";
const initialStateTabs = { activeTab: "first" };

//ACTIONS
export const actionTabs = createAction(SET_TABS);

//REDUCERS

export default handleActions(
  {
    [SET_TABS]: (state, action) => ({
      ...state,
      activeTab: state.activeTab === action.payload ? null : action.payload
    })
  },
  initialStateTabs
);
