import React from 'react';
import { shallow } from 'enzyme';

import { Login } from './pages/login';

describe('login', () => {
  it('should render without problems', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  });
  let wrapper;

  let loginFn;
  const fields = [
    { name: 'email', selector: 'input[type="email"]', value: 'mail@mail.ru' },
    { name: 'password', selector: 'input[type="password"]', value: 'pswrd123' },
  ];

  beforeEach(() => {
    loginFn = jest.fn(() => Promise.resolve());
    wrapper = shallow(<Login login={loginFn} />);
  });

  fields.forEach(({ name, selector, value }) => {
    it(`should properly update ${name} value`, () => {
      const field = wrapper.find(selector);

      expect(field.props().value).toEqual('');
      field.simulate('change', { target: { value } });
      expect(wrapper.find(selector).props().value).toEqual(
        value,
      );
    });
  });

  it('should call preventDefault on submit', () => {
    const preventDefault = jest.fn();

    wrapper.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
  });

  it('should call login function with correct arguments', () => {
    const emailInput = wrapper.find(fields[0].selector);
    const passwordInput = wrapper.find(fields[1].selector);
    const email = fields[0].value;
    const password = fields[1].value;

    emailInput.simulate('change', { target: { value: email } });
    passwordInput.simulate('change', { target: { value: password } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(loginFn).toHaveBeenCalledWith(email, password);
  });
});
