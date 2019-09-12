import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import MoviesList from 'components/MoviesList';

export default class SearchResultPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { query } = this.props.match.params;
    const { loadSearchResultMovies } = this.props;
    loadSearchResultMovies(query);
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
          <title>Search Result</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Search Result Movies</h2>
            <MoviesList {...moviesListProps} />
          </section>
        </div>
      </article>
    );
  }
}

SearchResultPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadSearchResultMovies: PropTypes.func,
  match: PropTypes.object,
};
