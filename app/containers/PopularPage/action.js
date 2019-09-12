import { LOAD_POPULAR_MOVIES, LOAD_POPULAR_MOVIES_SUCCESS } from './constants';

/**
 * Load popular movies
 *
 * @return {object}    An action object
 */
export function loadPopularMovies() {
  return {
    type: LOAD_POPULAR_MOVIES,
  };
}

/**
 * Dispatched when the popular movies are loaded by the request saga
 *
 * @param  {array} movies The movies data
 *
 * @return {object}      An action object with a type of LOAD_POPULAR_MOVIES_SUCCESS passing the repos
 */
export function popularMoviesLoaded(movies) {
  return {
    type: LOAD_POPULAR_MOVIES_SUCCESS,
    movies,
  };
}

/**
 * Dispatched when loading popular movies fails
 *
 * @param  {object} error The error
 *
 * @return {object}      An action object with a type of LOAD_POPULAR_MOVIES_ERROR passing the error
 */
export function popularMoviesLoadingError(error) {
  return {
    type: LOAD_POPULAR_MOVIES_SUCCESS,
    error,
  };
}
