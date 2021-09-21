import AuthService from '../services/AuthService';

class UIStore {
  rootStore: any;
  authService: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
    this.authService = new AuthService(this.rootStore.firebase, this.authState);
  }

  handleLogin = (): any => {
    this.authService.signIn();
  };

  handleLogout = (): any => {
    this.authService.logOut();
  };

  authState = (user: any): any => {
    if (user) {
      console.info(user.email);
    }
  };
}

export default UIStore;
