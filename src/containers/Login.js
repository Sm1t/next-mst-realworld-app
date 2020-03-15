import React, { useState } from 'react';
import { inject } from 'mobx-react';

import Login from '../components/Login';

const mapStoreToProps = ({ userStore: { errors, login } }) => ({
  errors,
  login,
});

const LoginContainer = props => {
  const { errors, login } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const onSubmit = event => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <Login
      {...{
        errors,
        onSubmit,
        onEmailChange,
        onPasswordChange,
      }}
    />
  );
};

export default inject(mapStoreToProps)(LoginContainer);
