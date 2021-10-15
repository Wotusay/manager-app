import { useObserver } from 'mobx-react-lite';

import React, { useState } from 'react';

import DatePicker from 'react-datepicker';

import { useStores } from '../../contexts/index';
import Worker from '../worker';

const OverviewPage = (): JSX.Element => {
  const { workerStore, uiStore } = useStores();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const dateChanger = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (end !== null) {
      workerStore.filterWithDate(start, end);
    }
  };
  return useObserver(() => (
    <div className="h-screen p-3 mt-10 shadow-lg rounded-2xl bg-blueAccent">
      <div className="flex justify-center mt-5 mb-5">
        <p className="text-3xl font-medium text-navyBlue">
          {uiStore.currentUser.group}
        </p>
      </div>
      <div className="h-screen p-5 m-6 shadow-xl rounded-2xl bg-whiteAccent">
        <div className="flex justify-center gap-6">
          <p className="text-2xl font-medium ml-28 text-navyBlue">Workers</p>
          <DatePicker
            wrapperClassName="datePicker"
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={dateChanger}
            startDate={startDate}
            endDate={endDate}
            selectsRange
          />
        </div>
        <div className="grid w-2/4 grid-flow-col gap-4 mt-10 ml-28 justify-right">
          {workerStore.workers.map(worker => {
            return <Worker worker={worker} key={worker.username} />;
          })}
        </div>
      </div>
    </div>
  ));
};

export default OverviewPage;
