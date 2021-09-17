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

  readCovidData = async (session: any, fileLink: string): Promise<any> => {
    // const { webId } = session.info;
    const { sessionId } = session.info;

    const listItems = await this.solidService.getSolidData(fileLink, session);
    if (listItems !== undefined) {
      listItems.webId = fileLink;
      this.rootStore.workerStore.addWorker(
        fileLink,
        listItems.date,
        listItems.type,
        listItems.validate,
        sessionId,
      );
      return 'User added!';
    } else {
      return 'User not found...';
    }
  };
}

decorate(SolidStore, {
  readCovidData: action,
});

export default SolidStore;
