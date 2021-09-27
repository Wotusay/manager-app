import dayjs from 'dayjs';

class Worker {
  username: string;
  validationDate: string;
  startDate: string;
  unknown: boolean;
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
    this.unknown = false;
  }

  checkIfStillValidWithBeforeDate = (date: string): any => {
    const expired = dayjs(date).isBefore(
      dayjs(this.validationDate, 'YYYY-MM-DD'),
    );
    if (expired) {
      return true;
    } else {
      return false;
    }
  };

  checkIfStillValidWithAffterDate = (date: string): any => {
    const expired = dayjs(date).isAfter(
      dayjs(this.validationDate, 'YYYY-MM-DD'),
    );
    if (!expired) {
      return true;
    } else {
      return false;
    }
  };

  checkIfAvailable = (dateOne: string, dateTwo: string): any => {
    if (
      this.checkIfStillValidWithBeforeDate(dateTwo) &&
      this.checkIfStillValidWithAffterDate(dateOne)
    ) {
      return true;
    }
    if (
      !this.checkIfStillValidWithBeforeDate(dateTwo) &&
      !this.checkIfStillValidWithAffterDate(dateOne)
    ) {
      return false;
    }
  };
}

export default Worker;
