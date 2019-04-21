import axios from 'axios';

axios.defaults.baseURL = 'https://conduit.productionready.io/api';

export * from './article.service';
export * from './auth.service';
export * from './tag.service';
