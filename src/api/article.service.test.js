import axios from 'axios';

import { ArticleService } from './article.service';
import { ARTICLES } from './constants';

jest.mock('axios');

const article = { title: 'Lorem', body: 'Lorem ipsum dolor sit amet' };

describe('ArticleService', () => {
  it('should fetch articles', async () => {
    const articles = [{ ...article }];

    axios.get.mockResolvedValue({ data: articles });

    const res = await ArticleService.all();

    expect(res.data).toEqual(articles);
  });

  it('should fetch article by slug', async () => {
    axios.get.mockResolvedValue({ data: { ...article } });

    const res = await ArticleService.get('lorem');

    expect(axios.get).toHaveBeenCalledWith(`/${ARTICLES}/lorem`);
    expect(res.data).toEqual(article);
  });
});
