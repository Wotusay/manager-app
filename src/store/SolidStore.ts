/* eslint-disable no-console */

import SolidService from '../services/SolidService';

class SolidStore {
  rootStore: any;
  solidService: any;

  constructor(rootStore: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.rootStore = rootStore;
    this.solidService = new SolidService();
  }
}

export default SolidStore;
