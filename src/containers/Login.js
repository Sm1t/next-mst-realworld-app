import React, { useState } from 'react';

import Login from '../components/Login';
import { useMst } from '../store';

const LoginContainer = () => {
  const { userStore: { errors, login } } = useMst();
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

export default LoginContainer;
