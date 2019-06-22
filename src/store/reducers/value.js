import { SET_VALUE } from "../types";

export default (state = "first", action) => {
  switch (action.type) {
    case SET_VALUE: {
      return action.payload;
    }
    default:
      return state;
  }
};
