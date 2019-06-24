import { combineReducers } from "redux";
import tabs from "./modules/tabs";
import panels from "./modules/panels";

//REDUCERS

const rootReducer = combineReducers({
  tabs,
  panels
});

export default rootReducer;
