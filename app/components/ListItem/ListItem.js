import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ListItem = ({ item }) => (
  <div className="item">
    <div className="image_content">
      <a className="result" href={`/movie/${item.id}`} title={item.title} alt={item.title}>
        <img
          className="poster"
          alt="It Chapter Two"
          sizes="185px"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.backdrop_path}`}
        />
      </a>
    </div>
    <div className="info">
      <div className="flex">
        <a className="title result" href={`/movie/${item.id}`} title={item.title} alt={item.title}>{item.title}</a>
        <span>{item.release_date}</span>
      </div>
      <div className="overview">
        <span>
          {item.overview}
        </span>
      </div>
      <p className="view_more">
        <a className="result" href={`/movie/${item.id}`} title={item.title} alt={item.title}>More Info</a>
      </p>
    </div>
  </div>
);

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;
