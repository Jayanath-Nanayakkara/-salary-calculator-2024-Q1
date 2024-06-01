import { combineReducers } from "redux";
import salaryReducer from "./actions";

const rootReducer = combineReducers({
  salary: salaryReducer,
});

export default rootReducer;
