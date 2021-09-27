import { action, decorate, observable } from 'mobx';
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
        this.addWorker(item);
      });
    }
  };

  addWorker = (item: any): any => {
    const workerExists = this.workers.findIndex(
      worker => worker.username === item.username,
    );
    if (workerExists === -1) {
      this.workers.push(
        new Worker({
          username: item.username,
          validationDate: item.validate,
          startDate: item.date,
        }),
      );
      this.workers.map(worker => {
        if (worker.checkIfStillValidWithAfterDate(new Date())) {
          worker.unknown = false;
        } else {
          worker.unknown = true;
        }
      });
    }
  };

  getAllWorkersInformation = (group: string): any => {
    this.workerService.getAllUserInformation(
      group.toLowerCase(),
      this.retievedData,
    );
  };

  filterWithDate = (dateOne: string, dateTwo: string): any => {
    this.workers.map((worker: any) => {
      if (worker.checkIfAvailable(dateOne, dateTwo)) {
        worker.unknown = false;
      }
      if (!worker.checkIfAvailable(dateOne, dateTwo)) {
        worker.unknown = true;
      }
    });
  };
}

decorate(WorkerStore, {
  workers: observable,
  retievedData: action,
  addWorker: action,
  filterWithDate: action,
});

export default WorkerStore;
