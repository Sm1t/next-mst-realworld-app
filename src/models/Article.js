import { types } from 'mobx-state-tree';

export const Article = types.model({
  title: types.string,
  content: types.string,
});

export const ArticleList = [];
