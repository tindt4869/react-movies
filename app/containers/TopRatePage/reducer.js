import { LOAD_TOP_RATE_MOVIES, LOAD_TOP_RATE_MOVIES_ERROR, LOAD_TOP_RATE_MOVIES_SUCCESS } from './constants';

const initialState = {
  loading: false,
  error: false,
  movies: [],
};

function topRateMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TOP_RATE_MOVIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_TOP_RATE_MOVIES_SUCCESS: {
      const { movies } = action;
      return {
        ...state,
        movies,
        loading: false,
      };
    }
    case LOAD_TOP_RATE_MOVIES_ERROR: {
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

export default topRateMoviesReducer;
