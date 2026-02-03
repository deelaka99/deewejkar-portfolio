import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";
import experiencesReducer from "./experiencesReducer";
import projectsReducer from "./projectsReducer";
import specialMomentsReducer from "./specialMomentsReducer";

const rootReducer = combineReducers({
  skillsReducer,
  experiencesReducer,
  projectsReducer,
  specialMomentsReducer,
});

export default rootReducer;
