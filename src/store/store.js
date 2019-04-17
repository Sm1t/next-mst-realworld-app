import { types, applySnapshot } from 'mobx-state-tree';

import { ArticleStore } from './ArticleStore';
import { UserStore } from './UserStore';
import AuthStore from './AuthStore';

let stores = null;

const Store = types
  .model({
    articleStore: types.optional(ArticleStore, {
      articles: [],
    }),
    userStore: types.optional(UserStore, {
      currentUser: null,
    }),
    authStore: types.optional(AuthStore, {}),
  });

export function initializeStore(isServer, snapshot = null) {
  if (isServer) {
    stores = Store.create();
  }
  if (stores === null) {
    stores = Store.create();
  }
  if (snapshot) {
    applySnapshot(stores, snapshot);
  }

  return stores;
}