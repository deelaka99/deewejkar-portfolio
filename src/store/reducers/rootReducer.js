import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";
import experiencesReducer from "./experiencesReducer";
import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
  skillsReducer,
  experiencesReducer,
  projectsReducer,
});

export default rootReducer;
