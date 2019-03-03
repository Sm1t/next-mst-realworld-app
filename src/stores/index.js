import { types, applySnapshot } from 'mobx-state-tree';

import { ArticleStore } from './ArticleStore';

let stores = null;

const Store = types.model({
  articleStore: types.optional(ArticleStore, {
    articles: [],
  }),
});

export function initializeStore(isServer, snapshot = null) {
  if (isServer) {
    stores = Store.create({
      articleStore: { articles: [{ title: 'Hello MST', content: '' }] },
    });
  }
  if (stores === null) {
    stores = Store.create({
      articleStore: { articles: [{ title: 'Hello MST', content: '' }] },
    });
  }
  if (snapshot) {
    applySnapshot(stores, snapshot);
  }

  return stores;
}
