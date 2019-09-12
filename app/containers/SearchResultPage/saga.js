import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { API_ENDPOINT, API_KEY } from 'utils/constants';
import request from 'utils/request';
import { searchedMoviesLoaded, searchedMoviesLoadingError } from './action';

import { LOAD_SEARCH_RESULT_MOVIES } from './constants';

export function* getTopRateMovies(action) {
  const { query } = action;
  const requestURL = `${API_ENDPOINT}/search/movie?api_key=${API_KEY}&query=${query}`;

  try {
    const response = yield call(request, requestURL);

    if (response) {
      const movies = response.results;
      yield put(searchedMoviesLoaded(movies));
    }
  } catch (err) {
    yield put(searchedMoviesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* popularMoviesData() {
  yield takeLatest(LOAD_SEARCH_RESULT_MOVIES, getTopRateMovies);
}
