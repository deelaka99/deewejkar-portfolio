import {
  FETCH_SKILLS_BEGIN,
  FETCH_SKILLS_SUCCESS,
  FETCH_SKILLS_FAILURE,
} from "../actions/skillsActions";

const initialState = {
  skillList: [],
  skillLoading: false,
  error: null,
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SKILLS_BEGIN:
      return {
        ...state,
        skillLoading: true,
        error: null,
      };

    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        skillLoading: false,
        skillList: action.payload,
        error: null,
      };

    case FETCH_SKILLS_FAILURE:
      return {
        ...state,
        skillLoading: false,
        error: action.payload.error,
        skillList: [],
      };
    default:
      return state;
  }
};

export default skillsReducer;
