import {
  call, put, takeLatest
} from 'redux-saga/effects';
import { API_ENDPOINT, API_KEY } from 'utils/constants';
import request from 'utils/request';
import { popularMoviesLoaded, popularMoviesLoadingError } from './action';

import { LOAD_POPULAR_MOVIES } from './constants';

export function* getPopularMovies() {
  const requestURL = `${API_ENDPOINT}/movie/popular?api_key=${API_KEY}`;

  try {
    const movies = yield call(request, requestURL);
    yield put(popularMoviesLoaded(movies));
  } catch (err) {
    yield put(popularMoviesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* popularMoviesData() {
  yield takeLatest(LOAD_POPULAR_MOVIES, getPopularMovies);
}
