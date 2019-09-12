import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class PopularPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { loadPopularMovies } = this.props;
    loadPopularMovies();
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Popular Movies</h2>
            <p>
              Hello World
            </p>
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
