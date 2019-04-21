import axios from 'axios';
import cookies from 'js-cookie';

import take from './take';

export const AuthService = {
  current: token => axios
    .get('/user', token ? { headers: { Authorization: token } } : undefined)
    .then(take('user')),

  login(email, password) {
    return axios
      .post('/users/login', { user: { email, password } })
      .then(take('user'))
      .then(user => {
        this.setToken(user.token);

        return user;
      });
  },

  getToken: () => cookies.get('token'),

  setToken: t => {
    const token = `Token ${t}`;

    cookies.set('token', token);
    // eslint-disable-next-line dot-notation
    axios.defaults.headers.common['Authorization'] = token;
  },

  removeToken: () => {
    cookies.remove('token');
    // eslint-disable-next-line dot-notation
    delete axios.defaults.headers.common['Authorization'];
  },
};
