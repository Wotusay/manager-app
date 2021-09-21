import { useObserver } from 'mobx-react-lite';

import React from 'react';

const OverviewPage = () => {
  return useObserver(() => (
    <div className="flex flex-col content-center justify-center">
      <p className="flex content-center justify-center gap-1 mt-10 text-2xl font-bold mb-7">
        testt
      </p>
    </div>
  ));
};

export default OverviewPage;
