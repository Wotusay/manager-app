import { action, decorate, observable } from 'mobx';

import AuthService from '../services/AuthService';

class UIStore {
  rootStore: any;
  authService: any;
  isLoggedIn: boolean;
  currentUser: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.currentUser = undefined;
    this.isLoggedIn = false;
    this.authService = new AuthService(this.rootStore.firebase, this.authState);
  }

  handleLogin = async (): Promise<any> => {
    await this.authService.signIn();
  };

  handleLogout = async (): Promise<any> => {
    await this.authService.logOut();
  };

  authState = (user: any): any => {
    if (user) {
      this.setCurrentUser(user);
      this.isLoggedIn = true;
    } else {
      this.setCurrentUser(undefined);
      this.isLoggedIn = false;
    }
  };

  setCurrentUser(user: any): any {
    this.currentUser = user;
  }
}

decorate(UIStore, {
  currentUser: observable,
  setCurrentUser: action,
  isLoggedIn: observable,
});

export default UIStore;
