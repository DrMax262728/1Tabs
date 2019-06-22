import { SET_VALUE } from "../actions";

export default (state = "first", action) => {
  switch (action.type) {
    case SET_VALUE: {
      return action.payload;
    }
    default:
      return state;
  }
};
