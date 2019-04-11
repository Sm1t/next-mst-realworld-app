import React from 'react';

import Link from '../components/Link';

const Header = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link className="navbar-brand" href="/">conduit</Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          {/* <Add "active" className when you're on that page" */}
          <Link className="nav-link" href="/" activeClassName="active">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/editor" activeClassName="active">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/settings" activeClassName="active">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/login" activeClassName="active">Sign in</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/register" activeClassName="active">Sign up</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;