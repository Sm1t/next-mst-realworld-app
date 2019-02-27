import { Article } from './Article';

const articleData = {
  title: 'Hello MST',
  content: 'Nice to meet you!',
};

describe('models', () => {
  describe('Article', () => {
    it('should create an instance of a model', () => {
      const article = Article.create(articleData);

      expect(article.title).toEqual('Hello MST');
    });
  });
});