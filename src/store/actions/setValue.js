import { SET_VALUE } from "store/types";
export const setValue = payload => {
  return { type: SET_VALUE, payload };
};
