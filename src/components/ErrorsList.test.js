import React from 'react';
import { shallow } from 'enzyme';

import ErrorsList from './ErrorsList';

describe('ErrorsList', () => {
  it('should render without problems', () => {
    const errorsList = shallow(<ErrorsList />);

    expect(errorsList).toMatchSnapshot();
  });

  it('should properly render errors list', () => {
    const errorsList = shallow(
      <ErrorsList errors={['error one', 'error two']} />,
    );

    expect(errorsList).toMatchSnapshot();
  });
});
