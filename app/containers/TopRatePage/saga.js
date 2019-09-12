import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { API_ENDPOINT, API_KEY } from 'utils/constants';
import request from 'utils/request';
import { topRateMoviesLoaded, topRateMoviesLoadingError } from './action';

import { LOAD_TOP_RATE_MOVIES } from './constants';

export function* getTopRateMovies() {
  const requestURL = `${API_ENDPOINT}/movie/top_rated?api_key=${API_KEY}`;

  try {
    const response = yield call(request, requestURL);

    if (response) {
      const movies = response.results;
      yield put(topRateMoviesLoaded(movies));
    }
  } catch (err) {
    yield put(topRateMoviesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* popularMoviesData() {
  yield takeLatest(LOAD_TOP_RATE_MOVIES, getTopRateMovies);
}
