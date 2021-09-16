import SolidStore from './SolidStore';
import WorkerStore from './WorkerStore';

class RootStore {
  solidStore: any;
  workerStore: any;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.solidStore = new SolidStore(this);
    this.workerStore = new WorkerStore(this);
  }
}

export default RootStore;
