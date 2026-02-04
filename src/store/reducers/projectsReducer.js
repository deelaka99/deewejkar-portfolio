import {
  FETCH_PROJECTS_BEGIN,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
} from "../actions/projectsActions";

const initialState = {
  projectList: [],
  projectLoading: false,
  error: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_BEGIN:
      return {
        ...state,
        projectLoading: true,
        error: null,
      };

    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projectLoading: false,
        projectList: action.payload,
        error: null,
      };

    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        projectLoading: false,
        error: action.payload.error,
        projectList: [],
      };
    default:
      return state;
  }
};

export default projectsReducer;
