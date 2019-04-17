import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api';
// eslint-disable-next-line dot-notation
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

export * from './article.service';
export * from './auth.service';
export * from './tag.service';
