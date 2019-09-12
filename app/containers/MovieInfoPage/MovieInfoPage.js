import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';

import request from 'utils/request';
import { API_ENDPOINT, API_KEY } from 'utils/constants';
import './style.scss';

export default class MovieInfoPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      urlImage: '',
      genres: [],
    };
  }

  componentDidMount() {
    const idFilm = parseInt(this.props.match.params.id, 10);
    this.getMovieInfo(idFilm);
  }

  getMovieInfo = (id) => {
    const url = `${API_ENDPOINT}/movie/${id}?api_key=${API_KEY}`;
    request(url)
      .then((res) => {
        this.setState({
          urlImage: res.poster_path,
          name: res.title,
          description: res.overview,
          genres: res.genres,
        });
      });
  };

  render() {
    return (
      <article>
        <Helmet>
          <title>Search Result</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <Row>
              <Col span={8} offset={1}>
                <img alt={this.state.name} width='85%' src={`https://image.tmdb.org/t/p/w500${this.state.urlImage}`} />
              </Col>
              <Col span={12} offset={1}>
                <h1>{this.state.name}</h1>
                <hr />
                <strong> Description: </strong>
                <p>{this.state.description}</p>
                <hr />
                <div className="genere">
                  <span className="genereTitle">
                    <strong>Generes: </strong>
                  </span>
                  {this.state.genres.map(genere => <span className="tag" key={genere.id}>{genere.name}</span>)}
                </div>
                <hr />
              </Col>
            </Row>
          </section>
        </div>
      </article>
    );
  }
}

MovieInfoPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  movies: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loadSearchResultMovies: PropTypes.func,
  match: PropTypes.object,
};
