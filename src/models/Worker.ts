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

  checkIfStillValidWithBeforeDate = (date: Date | string): boolean => {
    const expired = dayjs(date).isBefore(
      dayjs(this.validationDate, 'YYYY-MM-DD'),
    );
    if (expired) {
      return true;
    } else {
      return false;
    }
  };

  checkIfStillValidWithAfterDate = (date: Date | string): boolean => {
    const expired = dayjs(date).isAfter(
      dayjs(this.validationDate, 'YYYY-MM-DD'),
    );
    if (!expired) {
      return true;
    } else {
      return false;
    }
  };

  checkIfAvailable = ({
    dateOne,
    dateTwo,
  }: {
    dateOne: Date | string;
    dateTwo: Date | string;
  }): any => {
    if (
      this.checkIfStillValidWithBeforeDate(dateTwo) &&
      this.checkIfStillValidWithAfterDate(dateOne)
    ) {
      return true;
    } else {
      return false;
    }
  };
}

export default Worker;
