import { createAction, handleActions } from "redux-actions";

const SET_ACCORDION = "SET_ACCORDION";
const initialStateAcc = { activePanel: false };

export const actionPanel = createAction(SET_ACCORDION);

export default handleActions(
  {
    [SET_ACCORDION]: state => ({
      ...state,
      activePanel: !state.activePanel
    })
  },
  initialStateAcc
);
