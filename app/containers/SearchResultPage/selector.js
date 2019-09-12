import { createSelector } from 'reselect';

const selectSearchResult = (state) => state.search;

const makeSelectMovies = () => createSelector(
  selectSearchResult,
  (popularState) => popularState.movies
);

const makeSelectLoading = () => createSelector(
  selectSearchResult,
  (popularState) => popularState.loading
);

const makeSelectError = () => createSelector(
  selectSearchResult,
  (popularState) => popularState.error
);

export {
  selectSearchResult,
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError,
};
