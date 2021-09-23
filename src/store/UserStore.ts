import { action, decorate } from 'mobx';

import UserService from '../services/UserService';
class UserStore {
  rootStore: any;
  userService: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
    this.userService = new UserService(this.rootStore.firebase);
  }

  createUser = async (user: any): Promise<any> => {
    await this.userService.create(user);
    console.info('done!');
  };

  userRegisterd = async (username: string, sendData: any): Promise<any> => {
    return this.userService.isRegisterd(username, sendData);
  };
}

decorate(UserStore, {
  userRegisterd: action,
});

export default UserStore;
