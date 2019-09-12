import { LOAD_SEARCH_RESULT_MOVIES, LOAD_SEARCH_RESULT_MOVIES_ERROR, LOAD_SEARCH_RESULT_MOVIES_SUCCESS } from './constants';

const initialState = {
  loading: false,
  error: false,
  movies: [],
};

function searchMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEARCH_RESULT_MOVIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_SEARCH_RESULT_MOVIES_SUCCESS: {
      const { movies } = action;
      return {
        ...state,
        movies,
        loading: false,
      };
    }
    case LOAD_SEARCH_RESULT_MOVIES_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
        loading: false,
      };
    }
    default:
      return state;
  }
}

export default searchMoviesReducer;
