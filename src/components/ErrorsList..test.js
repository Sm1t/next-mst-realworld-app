import React from 'react';
import { shallow } from 'enzyme';

import ErrorsList from './ErrorsList';

describe('Login', () => {
  it('should render without problems', () => {
    const errorsList = shallow(<ErrorsList />);

    expect(errorsList).toMatchSnapshot();
  });
});
