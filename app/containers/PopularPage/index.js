import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { loadPopularMovies } from './action';
import PopularPage from './PopularPage';

const mapDispatchToProps = (dispatch) => ({
  loadPopularMovies: () => dispatch(loadPopularMovies())
});

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'popular', reducer });
const withSaga = injectSaga({ key: 'popular', saga });

export default compose(withReducer, withSaga, withConnect)(PopularPage);
export { mapDispatchToProps };
