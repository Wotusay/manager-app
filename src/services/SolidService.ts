import {
  getSolidDataset,
  getThingAll,
  getStringNoLocale,
} from '@inrupt/solid-client';

import { SCHEMA_INRUPT } from '@inrupt/vocab-common-rdf';

class SolidService {
  listItems: any;

  constructor() {
    this.listItems = [];
  }

  getSolidData = async (
    fileLink: string,
    session: any,
  ): Promise<Array<any>> => {
    const fetchSessionData = session.fetch;
    const savedCovidItems = await getSolidDataset(fileLink, {
      fetch: fetchSessionData,
    });

    const items = getThingAll(savedCovidItems);
    let listedSolidStrings;

    for (let i = 0; i < items.length; i++) {
      const item = getStringNoLocale(items[i], SCHEMA_INRUPT.name);
      if (item !== null && this.listItems.length != 3) {
        this.listItems.push(item);
      }
    }

    if (this.listItems.length === 3 && this.listItems != undefined) {
      listedSolidStrings = this.listItems;
      this.listItems = [];
    }

    return listedSolidStrings;
  };
}

export default SolidService;
