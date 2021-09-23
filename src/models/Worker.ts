class Worker {
  username: string;
  validationDate: string;
  startDate: string;
  constructor({
    username,
    validationDate,
    startDate,
  }: {
    username: string;
    validationDate: string;
    startDate: string;
  }) {
    this.startDate = startDate;
    this.username = username;
    this.validationDate = validationDate;
  }
}

export default Worker;
