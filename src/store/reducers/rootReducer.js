import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";

const rootReducer = combineReducers({
  skillsReducer,
});

export default rootReducer;
