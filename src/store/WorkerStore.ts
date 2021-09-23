import { decorate, observable } from 'mobx';
import WorkerService from 'src/services/WorkerService';

import Worker from '../models/Worker';
class WorkerStore {
  rootStore: any;
  workers: any;
  workerService: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
    this.workers = [];
    this.workerService = new WorkerService(this.rootStore.firebase);
  }

  retievedData = (data: any): any => {
    if (data) {
      Object.keys(data).forEach(key => {
        const item = data[key];
        this.workers.push(
          new Worker({
            username: item.username,
            validationDate: item.validate,
            startDate: item.date,
          }),
        );
      });

      console.info(this.workers);
    }
  };

  getAllWorkersInformation = (group: string): any => {
    this.workerService.getAllUserInformation(
      group.toLowerCase(),
      this.retievedData,
    );
  };
}

decorate(WorkerStore, {
  workers: observable,
});

export default WorkerStore;
