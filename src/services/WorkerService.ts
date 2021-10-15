import { getDatabase, ref, get } from 'firebase/database';

class WorkerService {
  db: any;
  constructor(firebase: any) {
    this.db = getDatabase(firebase);
  }

  getAllUserInformation = async (
    group: string | undefined,
    retievedData: any,
  ): Promise<any> => {
    return await get(ref(this.db, `covid-items/${group}`))
      .then(async snapshot => {
        const data = snapshot.val();
        retievedData(data);
      })
      .catch(error => {
        return console.error(error);
      });
  };
}

export default WorkerService;
