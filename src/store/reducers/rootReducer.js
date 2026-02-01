import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";
import experiencesReducer from "./experiencesReducer";

const rootReducer = combineReducers({
  skillsReducer,
  experiencesReducer,
});

export default rootReducer;
