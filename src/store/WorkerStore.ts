import { decorate, action, observable } from 'mobx';
class WorkerStore {
  rootStore: any;
  workers: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
    this.workers = [];
  }

  findObjWithUsername = (username: string): any => {
    return this.workers.find(worker => worker.username === username);
  };

  addWorker = (
    link: string,
    date: string,
    type: string,
    validate: string,
    id: string,
  ): any => {
    const spiltLink = link.split('/');
    const spiltDot = spiltLink[2].split('.');
    const username = spiltDot[0];
    const userProfileLink = `https://${spiltLink[2]}/profile/card#me`;
    const worker = {
      link,
      date,
      type,
      validate,
      id,
      userProfileLink,
      username,
    };
    console.info(worker);
    const workerExist = this.workers.findIndex(
      item => item.link === worker.link,
    );

    if (workerExist === -1) {
      this.workers.push(worker);
    } else {
      return;
    }
  };
}

decorate(WorkerStore, {
  addWorker: action,
  findObjWithUsername: action,
  workers: observable,
});

export default WorkerStore;
