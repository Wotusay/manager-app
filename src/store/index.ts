import * as firebase from 'firebase/app';

import SolidStore from './SolidStore';
import UIStore from './UIStore';
import UserStore from './UserStore';
import WorkerStore from './WorkerStore';

class RootStore {
  solidStore: any;
  workerStore: any;
  firebase: any;
  uiStore: any;
  userStore: any;

  constructor() {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      projectId: process.env.REACT_APP_projectId,
      databaseURL: process.env.REACT_APP_databaseURL,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId,
    };
    this.firebase = firebase.initializeApp(firebaseConfig);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.solidStore = new SolidStore(this);
    this.uiStore = new UIStore(this);
    this.workerStore = new WorkerStore(this);
    this.userStore = new UserStore(this);
  }
}

export default RootStore;
