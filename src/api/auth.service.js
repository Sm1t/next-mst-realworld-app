import axios from 'axios';

import take from './take';

export const AuthService = {
  login: (email, password) => axios
    .post('/users/login', { user: { email, password } })
    .then(take('user')),
};
