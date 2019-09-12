import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import MoviesList from 'components/MoviesList';
import InputSearch from 'containers/InputSearch';

export default class PopularPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { loadPopularMovies } = this.props;
    loadPopularMovies();
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
            <h2>Popular Movies</h2>
            <MoviesList {...moviesListProps} />
          </section>
        </div>
      </article>
    );
  }
}

PopularPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadPopularMovies: PropTypes.func,
};
