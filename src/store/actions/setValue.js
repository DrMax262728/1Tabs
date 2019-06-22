import { SET_VALUE } from "../types";
export const setValue = payload => {
  return { type: SET_VALUE, payload };
};
