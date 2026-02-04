import {
  FETCH_EXPERIENCE_BEGIN,
  FETCH_EXPERIENCE_SUCCESS,
  FETCH_EXPERIENCE_FAILURE,
} from "../actions/experiencesActions";

const initialState = {
  experienceList: [],
  experienceLoading: false,
  error: null,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCE_BEGIN:
      return {
        ...state,
        experienceLoading: true,
        error: null,
      };

    case FETCH_EXPERIENCE_SUCCESS:
      return {
        ...state,
        experienceLoading: false,
        experienceList: action.payload,
        error: null,
      };

    case FETCH_EXPERIENCE_FAILURE:
      return {
        ...state,
        experienceLoading: false,
        error: action.payload.error,
        experienceList: [],
      };
    default:
      return state;
  }
};

export default experiencesReducer;
