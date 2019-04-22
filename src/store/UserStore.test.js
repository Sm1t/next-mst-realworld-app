import { AuthService } from '../api';

import { UserStore } from './UserStore';

jest.mock('../api/auth.service');

describe('UserStore', () => {
  const user = {
    id: 1,
    email: 'test@test.ru',
    createdAt: '2019-03-23T22:28:55.669Z',
    updatedAt: '2019-04-21T05:01:38.095Z',
    username: 'test',
    bio: 'Lorem ipsum dolor sip amet',
    image: 'https://path.to/img',
    token: 'token',
  };

  it('should create store without problems', () => {
    const userStore = UserStore.create();

    expect(userStore).toMatchSnapshot();
  });

  describe('actions', () => {
    let userStore;

    beforeEach(() => {
      userStore = UserStore.create();
      AuthService.login.mockReset();
    });

    it('should properly set currentUser', () => {
      userStore.setCurrentUser(user);
      expect(userStore).toMatchSnapshot();
    });

    it('should login', async () => {
      AuthService.login.mockResolvedValue(user);
      await userStore.login(user.email, 'password');

      expect(AuthService.login).toHaveBeenCalledWith(user.email, 'password');
      expect(userStore.currentUser).toEqual(user);
    });

    it('should handle login errors', async () => {
      AuthService.login.mockRejectedValue({
        response: {
          data: {
            errors: {
              'email or password': 'is invalid',
            },
          },
        },
      });
      await userStore.login();
      expect(userStore.errors).toEqual(['email or password is invalid']);
    });
  });
});
