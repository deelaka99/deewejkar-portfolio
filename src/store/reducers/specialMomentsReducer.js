import {
  FETCH_SPECIAL_MOMENTS_BEGIN,
  FETCH_SPECIAL_MOMENTS_SUCCESS,
  FETCH_SPECIAL_MOMENTS_FAILURE,
} from "../actions/specialMomentsActions";

const initialState = {
  specialMomentsList: [],
  specialMomentsLoading: false,
  error: null,
};

const specialMomentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPECIAL_MOMENTS_BEGIN:
      return {
        ...state,
        specialMomentsLoading: true,
        error: null,
      };

    case FETCH_SPECIAL_MOMENTS_SUCCESS:
      return {
        ...state,
        specialMomentsLoading: false,
        specialMomentsList: action.payload,
        error: null,
      };

    case FETCH_SPECIAL_MOMENTS_FAILURE:
      return {
        ...state,
        specialMomentsLoading: false,
        error: action.payload.error,
        specialMomentsList: [],
      };
    default:
      return state;
  }
};

export default specialMomentsReducer;
