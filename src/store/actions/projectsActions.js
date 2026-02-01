export const FETCH_PROJECTS_BEGIN = "FETCH_PROJECTS_BEGIN";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";

export const fetchProjectsBegin = () => ({
  type: FETCH_PROJECTS_BEGIN,
});

export const fetchProjectsSuccess = (projects) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: projects,
});

export const fetchProjectsFailure = (error) => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: { error },
});

export const fetchProjects = () => {
  return async (dispatch) => {
    dispatch(fetchProjectsBegin());

    try {
      const response = await fetch(
        `${process.env.GATSBY_BACKEND_URL}/api/projects?populate[skills][populate][icon]=true&populate[image]=true&populate[featured_image]=true`,
      );
      const data = await response.json();
      dispatch(fetchProjectsSuccess(data));
    } catch (error) {
      dispatch(fetchProjectsFailure({ error: error.message }));
    }
  };
};
