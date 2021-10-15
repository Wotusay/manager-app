import {
  getAuth,
  OAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

class AuthService {
  auth: any;
  onAuthStateChanged: any;
  provider: any;
  constructor(firebase: any, authState: any) {
    this.auth = getAuth(firebase);
    this.provider = new OAuthProvider('microsoft.com').setCustomParameters({
      tenant: process.env.REACT_APP_tenant as string,
      prompt: 'consent',
    });
    onAuthStateChanged(this.auth, (user: any) => {
      authState(user);
    });
  }

  signIn = (): any => {
    signInWithPopup(this.auth, this.provider)
      .then(result => {
        return result;
      })
      .catch(error => {
        console.error(error);
      });
  };

  logOut = (): any => {
    signOut(this.auth)
      .then(() => {
        return 'Signed out';
      })
      .catch(error => {
        return error;
      });
  };
}

export default AuthService;
