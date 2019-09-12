import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Navbar() {
  return (
    <Nav activeKey="/popular">
      <Nav.Item>
        <Link to={'/popular'}>
          <div className="nav-item">
            Popular
          </div>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={'/top-rate'}>
          <div className="nav-item">
            Top Rate
          </div>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
