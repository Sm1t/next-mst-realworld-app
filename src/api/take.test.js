import take from './take';

describe('take', () => {
  it('should properly take data from response', () => {
    const res = { data: { article: { title: 'Lorem ipsum dolor' } } };
    const taked = take('article')(res);

    expect(taked).toEqual(res.data.article);
  });
});
