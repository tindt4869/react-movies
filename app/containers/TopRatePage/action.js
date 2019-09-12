import { LOAD_TOP_RATE_MOVIES, LOAD_TOP_RATE_MOVIES_ERROR, LOAD_TOP_RATE_MOVIES_SUCCESS } from './constants';

/**
 * Load top rate movies
 *
 * @return {object}    An action object
 */
export function loadTopRateMovies() {
  return {
    type: LOAD_TOP_RATE_MOVIES,
  };
}

/**
 * Dispatched when the top rate movies are loaded by the request saga
 *
 * @param  {array} movies The movies data
 *
 * @return {object}      An action object with a type of LOAD_TOP_RATE_MOVIES_SUCCESS passing the repos
 */
export function topRateMoviesLoaded(movies) {
  return {
    type: LOAD_TOP_RATE_MOVIES_SUCCESS,
    movies,
  };
}

/**
 * Dispatched when loading top rate movies fails
 *
 * @param  {object} error The error
 *
 * @return {object}      An action object with a type of LOAD_TOP_RATE_MOVIES_ERROR passing the error
 */
export function topRateMoviesLoadingError(error) {
  return {
    type: LOAD_TOP_RATE_MOVIES_ERROR,
    error,
  };
}
