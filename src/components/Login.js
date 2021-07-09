import React from 'react';

import ErrorsList from './ErrorsList';
import Link from './Link';

const Login = ({
  errors,
  onSubmit,
  email,
  password,
  onEmailChange,
  onPasswordChange,
}) => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign in</h1>
          <p className="text-xs-center">
            <Link href="/register">Need an account?</Link>
          </p>

          <ErrorsList errors={errors} />

          <form onSubmit={onSubmit}>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Email"
                value={email}
                onChange={onEmailChange}
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
              />
            </fieldset>
            <button className="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
