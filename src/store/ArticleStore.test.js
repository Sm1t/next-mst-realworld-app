import { getSnapshot, onSnapshot } from 'mobx-state-tree';

import { Article, ArticleStore } from './ArticleStore';

const articleData = {
  title: 'Test1',
  slug: 'test1',
  body: 'Longer text',
  createdAt: '2016-12-16T10:57:00.990Z',
  updatedAt: '2016-12-16T10:57:00.990Z',
  tagList: [],
  description: 'Desc',
  author: {
    username: 'memas',
    bio: null,
    image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
    following: false,
  },
  favorited: false,
  favoritesCount: 1,
};

describe('models', () => {
  describe('Article', () => {
    it('should properly create article', () => {
      const article = Article.create(articleData);

      expect(getSnapshot(article)).toMatchSnapshot();
    });

    it('should properly set article fields', () => {
      const article = Article.create(articleData);

      article.setTitle('Lorem');
      article.setContent('Lorem ipsum dolor sit amet');

      expect(getSnapshot(article)).toMatchSnapshot();
    });
  });

  describe('ArticleList', () => {
    it('should create an empty list when items is not passed', () => {
      const articleList = ArticleStore.create();

      expect(getSnapshot(articleList)).toMatchSnapshot();
    });

    it('should create a list of articles', () => {
      const articleList = ArticleStore.create({ items: [articleData] });

      expect(getSnapshot(articleList)).toMatchSnapshot();
    });

    it('should properly add new article', () => {
      const store = ArticleStore.create();
      const states = [];

      onSnapshot(store, snapshot => states.push(snapshot));

      expect(getSnapshot(store)).toMatchSnapshot();
      store.add(articleData);
      expect(states).toMatchSnapshot();
    });
  });
});
