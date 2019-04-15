import axios from 'axios';

export const TagService = {
  getAll: () => axios.get('/tags').then(({ data: { tags } }) => tags),
};
