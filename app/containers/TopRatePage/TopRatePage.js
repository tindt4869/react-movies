import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import MoviesList from 'components/MoviesList';
import InputSearch from 'containers/InputSearch';

export default class TopRatePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { loadTopRateMovies } = this.props;
    loadTopRateMovies();
  }

  render() {
    const { loading, error, movies } = this.props;
    const moviesListProps = {
      loading,
      error,
      movies,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <InputSearch/>
        <div className="home-page">
          <section className="centered">
            <h2>Top Rate Movies</h2>
            <MoviesList {...moviesListProps} />
          </section>
        </div>
      </article>
    );
  }
}

TopRatePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadTopRateMovies: PropTypes.func,
};
