import { combineReducers } from "redux";
import tabs from "./modules/tabs";
import accordion from "./modules/accordion";

//REDUCERS

const rootReducer = combineReducers({
  tabs,
  accordion
});

export default rootReducer;
