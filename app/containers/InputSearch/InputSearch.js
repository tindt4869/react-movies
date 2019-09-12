import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import request from 'utils/request';
import { API_ENDPOINT, API_KEY } from 'utils/constants';
import './style.scss';

export default class InputSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      fireRedirect: false,
      focused: false,
    };

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = (event) => {
    const { target } = event;
    if (!this.wrapperRef.current.contains(target)) {
      this.setState({ focused: false });
    }
  };

  handleChange = (e) => {
    this.setState(
      { value: e.target.value },
      () => {
        const { value } = this.state;
        this.search(value);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  search = (query) => {
    const url = `${API_ENDPOINT}/search/movie?query=${query}&api_key=${API_KEY}`;
    request(url)
      .then(res => {
        this.setState({ suggestions: res.results });
      });
  };

  render() {
    const { fireRedirect, value: query, suggestions, focused } = this.state;
    const showSuggestion = focused && suggestions.length > 0;
    return (
      <>
        <div className="input-search-container" ref={this.wrapperRef}>
          <form className="form-search" onSubmit={this.handleSubmit}>
            <input className="input" placeholder="Search a film..." onChange={this.handleChange} onFocus={this.onFocus} />
          </form>
          {showSuggestion && <ul className="list-suggestions">
            {
              suggestions.map((item) => {
                return (
                  <Link to={`/movie/${item.id}`}>
                    <div key={item.id} className="list-suggestions-item">
                      {item.title || item.original_name}
                    </div>
                  </Link>
                );
              })
            }
          </ul>}
        </div>
        {
          fireRedirect && query && <Redirect to={`/search/${query}`} push />
        }
      </>
    );
  }
}
