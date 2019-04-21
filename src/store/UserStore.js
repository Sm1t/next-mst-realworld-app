import { types, flow } from 'mobx-state-tree';
import Router from 'next/router';

import { AuthService } from '../api';

const User = types.model('User', {
  bio: types.string,
  createdAt: types.string,
  email: types.string,
  id: types.number,
  image: types.string,
  token: types.string,
  updatedAt: types.string,
  username: types.string,
});

export const UserStore = types
  .model('UserStore', {
    currentUser: types.maybeNull(User),
    errors: types.array(types.string),
  })
  .actions(self => ({
    setCurrentUser: user => {
      self.currentUser = user;
    },
    login: flow(function* login(email, password) {
      self.errors.clear();
      try {
        const user = yield AuthService.login(email, password);

        self.currentUser = user;
        Router.replace('/');
      } catch (error) {
        const errors =
          error.response && error.response.data && error.response.data.errors;

        if (errors) {
          self.errors = Object.keys(errors).map(key => `${key} ${errors[key]}`);
        }
      }
    }),
    checkAuth: flow(function* checkAuth(token) {
      try {
        const user = yield AuthService.current(token);

        self.currentUser = user;
      } catch (error) {} // eslint-disable-line no-empty
    }),
  }));
