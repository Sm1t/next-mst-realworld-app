import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import Link from '../components/Link';
import ErrorsList from '../components/ErrorsList';

const ObservableErrorsList = observer(ErrorsList);

const selector = ({
  userStore: {
    errors, login,
  },
}) => ({
  errors,
  login,
});

export const Login = props => {
  const { errors, login } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

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
                  onChange={e => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
};

export default inject(selector)(Login);
