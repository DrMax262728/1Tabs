const SET_ACCORDION = "SET_ACCORDION";
const initialStateAcc = { activePanel: false };

export const actionPanel = panel => ({ type: SET_ACCORDION, payload: panel });

const panel = (state = initialStateAcc, action) => {
  switch (action.type) {
    case SET_ACCORDION: {
      return {
        ...state,
        activePanel: action.payload
      };
    }
    default:
      return state;
  }
};

export default panel;
