import axios from 'axios';

import { ARTICLES } from './constants';
import take from './take';

export const ArticleService = {
  all: () => axios.get(`/${ARTICLES}`).then(take('articles')),
  get: slug => axios.get(`/${ARTICLES}/${slug}`).then(take('article')),
};
