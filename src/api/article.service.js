import axios from 'axios';

import { ARTICLES } from './constants';

export const ArticleService = {
  all: () => axios.get(`/${ARTICLES}`),
  get: slug => axios.get(`/${ARTICLES}/${slug}`),
};
