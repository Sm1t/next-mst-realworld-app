import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

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
  .actions(self => {
    function add(item) {
      self = self.articles.push(item);
    }

    const loadArticles = flow(function* loadArticles() {
      try {
        const {
          data: { articles },
        } = yield axios.get('https://conduit.productionready.io/api/articles/');

        self.articles = articles.map(({ title, body }) => ({ title, content: body }));
      } catch (err) {
        console.error('Failed to load articles ', err);
      }
    });

    return {
      add,
      loadArticles,
    };
  });