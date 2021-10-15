/* eslint-disable no-console */
import { action, decorate, observable } from 'mobx';

import User from '../models/User';
import AuthService from '../services/AuthService';

import RootStore from './index';

class UIStore {
  rootStore: RootStore;
  authService: AuthService;
  isLoggedIn: boolean;
  currentUser: User | undefined;
  data: any;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.currentUser = undefined;
    this.isLoggedIn = false;
    this.data = undefined;
    this.authService = new AuthService(this.rootStore.firebase, this.authState);
  }

  handleLogin = async (): Promise<void> => {
    await this.authService.signIn();
  };

  handleLogout = async (): Promise<void> => {
    await this.authService.logOut();
  };

  authState = async (user: any): Promise<void> => {
    if (user) {
      // this.setCurrentUser(user);
      await this.registerUser(user);
      this.isLoggedIn = true;
    } else {
      this.setCurrentUser(undefined);
      this.isLoggedIn = false;
    }
  };

  sendData = (data: any): void => {
    this.data = data;
  };

  registerUser = async (user: any): Promise<void> => {
    await this.rootStore.userStore.userRegisterd(
      user.displayName,
      this.sendData,
    );
    if (this.data.username && this.data) {
      this.setCurrentUser(
        new User({
          id: this.data.id,
          name: this.data.username,
          email: this.data.email,
          group: this.data.group,
        }),
      );
      this.rootStore.workerStore.getAllWorkersInformation(
        this.currentUser?.group,
      );
    }
    if (!this.data && !this.data.name) {
      this.rootStore.userStore.createUser(
        new User({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          group: 'Wheelhouse',
        }),
      );
    }
  };

  setCurrentUser(user: User | undefined): void {
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
