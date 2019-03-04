import { types } from 'mobx-state-tree';

import modelOf from './modelOf';

const model = types.model({});
const store = model.create();

describe('modelOf', () => {
  it('should return null when prop type is valid', () => {
    const result = modelOf(model)({ store }, 'store');

    expect(result).toBeNull();
  });

  it('should return properly error when value for prop is invalid', () => {
    const result = modelOf(model)({ store: {} }, 'store');

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toMatchSnapshot();
  });

  describe('with isRequired', () => {
    it('should return properly error when missing required prop', () => {
      const result = modelOf(model).isRequired({}, 'store');

      expect(result).toBeInstanceOf(Error);
      expect(result.message).toMatchSnapshot();
    });

    it('should properly validate required prop', () => {
      const result = modelOf(model).isRequired({ store }, 'store');

      expect(result).toBeNull();
    });
  });
});
