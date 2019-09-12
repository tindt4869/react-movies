import { createSelector } from 'reselect';

const selectPopular = (state) => state.popular;

const makeSelectMovies = () => createSelector(
  selectPopular,
  (popularState) => popularState.movies
);

const makeSelectLoading = () => createSelector(
  selectPopular,
  (popularState) => popularState.loading
);

const makeSelectError = () => createSelector(
  selectPopular,
  (popularState) => popularState.error
);

export {
  selectPopular,
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError,
};
