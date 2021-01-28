const API = {};

const GET_WORKS = 'works/GET_WORKS';
const GET_WORKS_SUCCESS = 'works/GET_WORKS_SUCCESS';
const GET_WORKS_FAILURE = 'works/GET_WORKS_FAILURE';

const initialState = {
  data: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKS:
      return {
        ...state,
        loading: true,
      };
    case GET_WORKS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: {},
      };
    case GET_WORKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

const loading = () => ({ type: GET_WORKS });
const success = payload => ({ type: GET_WORKS_SUCCESS, payload });
const failure = error => ({ type: GET_WORKS_FAILURE, error });

export const getWorks = () => async dispatch => {
  dispatch(loading());
  try {
    const response = await API.getWorks();
    dispatch(success(response.data));
  } catch (error) {
    dispatch(failure({ error: error.response.data }));
  }
};
