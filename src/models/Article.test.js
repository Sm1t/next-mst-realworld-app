import { getSnapshot, onSnapshot } from 'mobx-state-tree';

import { Article, ArticleList } from './Article';

const articleData = {
  title: 'Hello MST',
  content: 'Nice to meet you!',
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
      const articleList = ArticleList.create();

      expect(getSnapshot(articleList)).toMatchSnapshot();
    });

    it('should create a list of articles', () => {
      const articleList = ArticleList.create({ items: [articleData] });

      expect(getSnapshot(articleList)).toMatchSnapshot();
    });

    it('should properly add new article', () => {
      const articleList = ArticleList.create();
      const states = [];

      onSnapshot(articleList, snapshot => states.push(snapshot));

      expect(getSnapshot(articleList)).toMatchSnapshot();
      articleList.add(articleData);
      expect(states).toMatchSnapshot();
    });
  });
});
