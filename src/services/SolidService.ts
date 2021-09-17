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

  getSolidData = async (fileLink: string, session: any): Promise<any> => {
    const fetchSessionData = session.fetch;
    console.info(fileLink);
    try {
      const savedCovidItems = await getSolidDataset(fileLink, {
        fetch: fetchSessionData,
      });

      const items = getThingAll(savedCovidItems);
      const listedSolidStrings = { date: '', type: '', validate: '' };

      for (let i = 0; i < items.length; i++) {
        const item = getStringNoLocale(items[i], SCHEMA_INRUPT.name);
        console.info(item);
        if (item !== undefined && this.listItems.length != 3) {
          this.listItems.push(item);
        } else {
          return;
        }
      }

      if (this.listItems.length === 3 && this.listItems !== undefined) {
        listedSolidStrings.date = this.listItems[0];
        listedSolidStrings.type = this.listItems[1];
        listedSolidStrings.validate = this.listItems[2];

        this.listItems = [];
      }

      return listedSolidStrings;
    } catch (error) {
      return;
    }
  };
}

export default SolidService;
