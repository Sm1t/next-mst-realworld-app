import axios from 'axios';

import take from './take';

export const TagService = {
  getAll: () => axios.get('/tags').then(take('tags')),
};
