import React, { Component, Fragment } from 'react';
import { inject } from 'mobx-react';
import { withRouter } from 'next/router';

import Link from '../components/Link';

@withRouter
@inject(stores => ({
  currentUser: stores.userStore.currentUser,
}))
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            conduit
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link" href="/" activeClassName="active">
                Home
              </Link>
            </li>
            {this.props.currentUser ? (
              <Fragment>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/editor"
                    activeClassName="active"
                  >
                    <i className="ion-compose" />
                    &nbsp;New Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/settings"
                    activeClassName="active"
                  >
                    <i className="ion-gear-a" />
                    &nbsp;Settings
                  </Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/login"
                    activeClassName="active"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="/register"
                    activeClassName="active"
                  >
                    Sign up
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
