/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useObserver } from 'mobx-react-lite';
import React from 'react';

import { useStores } from '../../contexts/index';
import OverviewPage from '../overviewPage';

const LoginPage = (): JSX.Element => {
  const { uiStore } = useStores();

  return useObserver(() => (
    <div>
      {uiStore.isLoggedIn && uiStore.currentUser ? <OverviewPage /> : null}
    </div>
  ));
};

export default LoginPage;
