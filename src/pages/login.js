import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Router from 'next/router';

import Link from '../components/Link';
import ErrorsList from '../components/ErrorsList';

const ObservableErrorsList = observer(ErrorsList);

const selector = ({
  authStore: {
    email, password, errors, setEmail, setPassword, login,
  },
  userStore: { setCurrentUser },
}) => ({
  email,
  password,
  errors,
  setEmail,
  setPassword,
  login,
  setCurrentUser,
});

@inject(selector)
class Login extends Component {
  onSubmit = event => {
    const { login, setCurrentUser } = this.props;

    event.preventDefault();
    login()
      .then(user => {
        setCurrentUser(user);
        Router.replace('/');
      })
      .catch(() => {});
  };

  onChangeEmail = ({ target: { value } }) => this.props.setEmail(value);

  onChangePassword = ({ target: { value } }) => this.props.setPassword(value);

  render() {
    const { email, password, errors } = this.props;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <Link href="/register">Need an account?</Link>
              </p>

              <ObservableErrorsList errors={errors} />

              <form onSubmit={this.onSubmit}>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.onChangeEmail}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
