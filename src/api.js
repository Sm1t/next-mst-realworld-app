import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api';

export const ArticleService = {
  all: () => axios.get('/articles'),
  get: slug => axios.get(`/articles/${slug}`),
};