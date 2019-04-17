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
}) => ({
  email,
  password,
  errors,
  setEmail,
  setPassword,
  login,
});

@inject(selector)
class Login extends Component {
  render() {
    const {
      email,
      password,
      setEmail,
      setPassword,
      login,
      errors,
    } = this.props;
    const onSubmit = event => {
      event.preventDefault();
      login()
        .then(() => Router.replace('/'));
    };
    const onChangeEmail = ({ target: { value } }) => setEmail(value);
    const onChangePassword = ({ target: { value } }) => setPassword(value);

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

              <form onSubmit={onSubmit}>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
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
