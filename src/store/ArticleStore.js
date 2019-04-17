import { types, flow } from 'mobx-state-tree';

import { ArticleService } from '../api';

const Author = types.model('Author', {
  username: types.string,
  bio: types.maybeNull(types.string),
  image: types.string,
  following: types.boolean,
});

export const Article = types
  .model('Article', {
    title: types.string,
    slug: types.string,
    body: types.string,
    createdAt: types.string,
    updatedAt: types.string,
    tagList: types.array(types.string),
    description: types.string,
    author: Author,
    favorited: types.boolean,
    favoritesCount: types.number,
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
  .model('ArticleStore', {
    articles: types.array(Article),
  })
  .actions(self => {
    function add(item) {
      self = self.articles.push(item);
    }

    const loadArticles = flow(function* loadArticles() {
      try {
        const articles = yield ArticleService.all();

        self.articles = articles;
      } catch (err) {
        console.error('Failed to load articles ', err);
      }
    });

    return {
      add,
      loadArticles,
    };
  });
