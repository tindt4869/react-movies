import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { loadTopRateMovies } from './action';
import { makeSelectMovies, makeSelectLoading, makeSelectError } from './selector';
import TopRatePage from './TopRatePage';

const mapDispatchToProps = (dispatch) => ({
  loadTopRateMovies: () => dispatch(loadTopRateMovies())
});

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'topRate', reducer });
const withSaga = injectSaga({ key: 'topRate', saga });

export default compose(withReducer, withSaga, withConnect)(TopRatePage);
export { mapDispatchToProps };
