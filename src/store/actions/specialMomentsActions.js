export const FETCH_SPECIAL_MOMENTS_BEGIN = "FETCH_SPECIAL_MOMENTS_BEGIN";
export const FETCH_SPECIAL_MOMENTS_SUCCESS = "FETCH_SPECIAL_MOMENTS_SUCCESS";
export const FETCH_SPECIAL_MOMENTS_FAILURE = "FETCH_SPECIAL_MOMENTS_FAILURE";

export const fetchSpecialMomentsBegin = () => ({
  type: FETCH_SPECIAL_MOMENTS_BEGIN,
});

export const fetchSpecialMomentsSuccess = (specialMoments) => ({
  type: FETCH_SPECIAL_MOMENTS_SUCCESS,
  payload: specialMoments,
});

export const fetchSpecialMomentsFailure = (error) => ({
  type: FETCH_SPECIAL_MOMENTS_FAILURE,
  payload: { error },
});

export const fetchSpecialMoments = () => {
  return async (dispatch) => {
    dispatch(fetchSpecialMomentsBegin());

    try {
      const response = await fetch(
        `${process.env.GATSBY_BACKEND_URL}/api/special-moments?populate=*`,
      );
      const data = await response.json();
      dispatch(fetchSpecialMomentsSuccess(data));
    } catch (error) {
      dispatch(fetchSpecialMomentsFailure({ error: error.message }));
    }
  };
};
