import { createAction, handleActions } from "redux-actions";
import { dataPanels } from "../../constants";

const SET_ACCORDION = "SET_ACCORDION";

const initialStateAcc = [];

dataPanels.map((el, index) => initialStateAcc.push({ index, status: false }));

console.log(initialStateAcc);

export const actionPanelToggle = createAction(SET_ACCORDION);

export default handleActions(
  {
    [SET_ACCORDION]: (state, action) => {
      return state.map((el, index) =>
        index === action.payload.index ? { ...el, status: !el.status } : el
      );
    }
  },
  initialStateAcc
);
