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
      tenant: '49c3d703-3579-47bf-a888-7c913fbdced9',
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
