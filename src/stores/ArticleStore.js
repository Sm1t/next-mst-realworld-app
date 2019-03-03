import { types } from 'mobx-state-tree';

export const Article = types
  .model({
    title: types.string,
    content: types.string,
  })
  .actions(self => ({
    setTitle(title) {
      self.title = title;
    },
    setContent(content) {
      self.content = content;
    },
  }));

export const ArticleStore = types
  .model({
    articles: types.optional(types.array(Article), []),
  })
  .actions(self => ({
    add(item) {
      self = self.articles.push(item);
    },
  }));
