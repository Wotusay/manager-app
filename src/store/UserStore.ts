import { action, decorate } from 'mobx';

import UserService from '../services/UserService';

import RootStore from './index';
class UserStore {
  rootStore: RootStore;
  userService: UserService;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.userService = new UserService(this.rootStore.firebase);
  }

  createUser = async (user: any): Promise<void> => {
    await this.userService.create(user);
  };

  userRegisterd = async (username: string, sendData: any): Promise<any> => {
    return this.userService.isRegisterd(username, sendData);
  };
}

decorate(UserStore, {
  userRegisterd: action,
});

export default UserStore;
