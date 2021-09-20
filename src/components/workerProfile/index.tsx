import dayjs from 'dayjs';
import React from 'react';
import { useParams } from 'react-router';

import { useStores } from '../../contexts/index';

const WorkerProfile = (): React.FC => {
  const { id } = useParams();
  const { workerStore } = useStores();

  const worker = workerStore.findObjWithUsername(id);
  const validChecker = (date: string): string => {
    const expired = dayjs().isAfter(dayjs(date, 'YYYY-MM-DD'));
    if (!expired) {
      return 'Still valid';
    } else {
      return 'Expired';
    }
  };
  console.info(worker);
  return (
    <div className="grid content-center justify-center gap-1 mt-10 text-xl font-medium mb-7">
      <p>Workers username: {worker.username}</p>
      <p>Type of vacination: {worker.type}</p>
      <p>When vacinated: {worker.date}</p>
      <p>Expire date: {worker.validate}</p>
      <p>Valid ? {validChecker(worker.validate)} </p>
    </div>
  );
};

export default WorkerProfile;
