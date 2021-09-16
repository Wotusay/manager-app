/* eslint-disable no-console */
import { action, decorate } from 'mobx';

import SolidService from '../services/SolidService';

class SolidStore {
  rootStore: any;
  solidService: any;

  constructor(rootStore: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.rootStore = rootStore;
    this.solidService = new SolidService();
  }

  readCovidData = async (
    session: any,
    fileLink: string,
  ): Promise<Array<any>> => {
    const listItems = await this.solidService.getSolidData(fileLink, session);
    return listItems;
  };
}

decorate(SolidStore, {
  readCovidData: action,
});

export default SolidStore;
