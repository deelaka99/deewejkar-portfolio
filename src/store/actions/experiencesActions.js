export const FETCH_EXPERIENCE_BEGIN = "FETCH_EXPERIENCE_BEGIN";
export const FETCH_EXPERIENCE_SUCCESS = "FETCH_EXPERIENCE_SUCCESS";
export const FETCH_EXPERIENCE_FAILURE = "FETCH_EXPERIENCE_FAILURE";

export const fetchExperienceBegin = () => ({
  type: FETCH_EXPERIENCE_BEGIN,
});

export const fetchExperienceSuccess = (experience) => ({
  type: FETCH_EXPERIENCE_SUCCESS,
  payload: experience,
});

export const fetchExperienceFailure = (error) => ({
  type: FETCH_EXPERIENCE_FAILURE,
  payload: { error },
});

export const fetchExperience = () => {
  return async (dispatch) => {
    dispatch(fetchExperienceBegin());

    try {
      const response = await fetch(
        `${process.env.GATSBY_BACKEND_URL}/api/experiences?populate=*`,
      );
      const data = await response.json();
      dispatch(fetchExperienceSuccess(data));
    } catch (error) {
      dispatch(fetchExperienceFailure({ error: error.message }));
    }
  };
};
