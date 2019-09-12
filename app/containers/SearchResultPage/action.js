import { LOAD_SEARCH_RESULT_MOVIES, LOAD_SEARCH_RESULT_MOVIES_SUCCESS } from './constants';

/**
 * Load search result movies
 *
 * @param  {string} query The string to get data
 *
 * @return {object}    An action object
 */
export function loadSearchResultMovies(query) {
  return {
    type: LOAD_SEARCH_RESULT_MOVIES,
    query,
  };
}

/**
 * Dispatched when the top rate movies are loaded by the request saga
 *
 * @param  {array} movies The movies data
 *
 * @return {object}      An action object with a type of LOAD_TOP_RATE_MOVIES_SUCCESS passing the repos
 */
export function searchedMoviesLoaded(movies) {
  return {
    type: LOAD_SEARCH_RESULT_MOVIES_SUCCESS,
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
export function searchedMoviesLoadingError(error) {
  return {
    type: LOAD_SEARCH_RESULT_MOVIES_SUCCESS,
    error,
  };
}
