import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { loadSearchResultMovies } from './action';
import { makeSelectMovies, makeSelectLoading, makeSelectError } from './selector';
import SearchResultPage from './SearchResultPage';

const mapDispatchToProps = (dispatch) => ({
  loadSearchResultMovies: (query) => dispatch(loadSearchResultMovies(query))
});

const mapStateToProps = createStructuredSelector({
  movies: makeSelectMovies(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'search', reducer });
const withSaga = injectSaga({ key: 'search', saga });

export default compose(withReducer, withSaga, withConnect)(SearchResultPage);
export { mapDispatchToProps };
