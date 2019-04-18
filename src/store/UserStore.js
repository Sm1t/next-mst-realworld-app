import { types } from 'mobx-state-tree';

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
  })
  .actions(self => ({
    setCurrentUser: user => {
      self.currentUser = user;
    },
  }));
