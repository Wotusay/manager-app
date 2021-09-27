/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useObserver } from 'mobx-react-lite';
import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useStores } from '../../contexts/index';
import LoginComp from '../loginComp';
import OverviewPage from '../overviewPage';

const LoginPage = (): React.FC => {
  const { uiStore, workerStore } = useStores();
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
    <div>
      {uiStore.isLoggedIn && uiStore.currentUser ? (
        <>
          <div className="flex justify-center">
            <p className="text-3xl font-medium">
              {uiStore.currentUser.name} -- {uiStore.currentUser.group}
            </p>
          </div>
          <div className="flex gap-2 mt-5 mb-5 ml-28">
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
          <OverviewPage />
        </>
      ) : (
        <LoginComp />
      )}
    </div>
  ));
};

export default LoginPage;
