import { LOAD_POPULAR_MOVIES, LOAD_POPULAR_MOVIES_ERROR, LOAD_POPULAR_MOVIES_SUCCESS } from './constants';

const initialState = {
  loading: false,
  error: false,
  movies: [],
};

function popularMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POPULAR_MOVIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_POPULAR_MOVIES_SUCCESS: {
      const { movies } = action;
      return {
        ...state,
        movies,
        loading: false,
      };
    }
    case LOAD_POPULAR_MOVIES_ERROR: {
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

export default popularMoviesReducer;
