import { createSelector } from 'reselect';

const selectTopRate = (state) => state.topRate;

const makeSelectMovies = () => createSelector(
  selectTopRate,
  (popularState) => popularState.movies
);

const makeSelectLoading = () => createSelector(
  selectTopRate,
  (popularState) => popularState.loading
);

const makeSelectError = () => createSelector(
  selectTopRate,
  (popularState) => popularState.error
);

export {
  selectTopRate,
  makeSelectMovies,
  makeSelectLoading,
  makeSelectError,
};
