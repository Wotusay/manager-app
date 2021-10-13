import { useObserver } from 'mobx-react-lite';

import React from 'react';

import { useStores } from '../../contexts/index';

const OverviewPage = (): JSX.Element => {
  const { workerStore } = useStores();
  return useObserver(() => (
    <>
      <p className="flex mt-5 text-2xl font-medium ml-28"> Workers </p>
      <div className="grid w-2/4 grid-flow-col gap-4 mt-5 ml-28 justify-right">
        {workerStore.workers.map(worker => {
          return (
            <div
              className={`p-6 text-xl text-white ${
                !worker.unknown ? 'bg-green-600' : 'bg-red-400'
              }`}
              key={worker.username}
            >
              <p> {worker.username}</p>
            </div>
          );
        })}
      </div>
    </>
  ));
};

export default OverviewPage;
