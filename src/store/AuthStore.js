import { types, flow } from 'mobx-state-tree';

import { AuthService } from '../api';

const AuthStore = types
  .model('AuthStore', {
    email: types.optional(types.string, ''),
    password: types.optional(types.string, ''),
    errors: types.array(types.string),
  })
  .actions(self => ({
    setEmail: email => {
      self.email = email;
    },
    setPassword: password => {
      self.password = password;
    },
    login: flow(function* login() {
      self.errors.clear();
      try {
        // eslint-disable-next-line no-unused-vars
        const user = yield AuthService.login(self.email, self.password);
      } catch (error) {
        const errors =
          error.response && error.response.data && error.response.data.errors;

        if (errors) {
          self.errors = Object.keys(errors).map(
            key => `${key} ${errors[key]}`,
          );
        }

        throw error;
      }
    }),
  }));

export default AuthStore;
