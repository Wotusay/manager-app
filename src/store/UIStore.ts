/* eslint-disable no-console */
import { action, decorate, observable } from 'mobx';

import User from '../models/User';
import AuthService from '../services/AuthService';

class UIStore {
  rootStore: any;
  authService: any;
  isLoggedIn: boolean;
  currentUser: any;
  data: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.currentUser = undefined;
    this.isLoggedIn = false;
    this.data = undefined;
    this.authService = new AuthService(this.rootStore.firebase, this.authState);
  }

  handleLogin = async (): Promise<any> => {
    await this.authService.signIn();
  };

  handleLogout = async (): Promise<any> => {
    await this.authService.logOut();
  };

  authState = async (user: any): Promise<any> => {
    if (user) {
      // this.setCurrentUser(user);
      await this.registerUser(user);
      this.isLoggedIn = true;
    } else {
      this.setCurrentUser(undefined);
      this.isLoggedIn = false;
    }
  };

  sendData = (data: any): any => {
    this.data = data;
    return;
  };

  registerUser = async (user: any): Promise<any> => {
    await this.rootStore.userStore.userRegisterd(
      user.displayName,
      this.sendData,
    );
    if (this.data.username && this.data) {
      console.info(this.data);
      this.setCurrentUser(
        new User({
          id: this.data.id,
          name: this.data.username,
          email: this.data.email,
          group: this.data.group,
        }),
      );

      console.info(this.currentUser);
    }
    if (!this.data && !this.data.name) {
      this.rootStore.userStore.create(
        new User({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          group: 'Wheelhouse',
        }),
      );
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
  registerUser: action,
});

export default UIStore;
