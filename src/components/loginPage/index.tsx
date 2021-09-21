/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useObserver } from 'mobx-react-lite';
import React from 'react';

import { useStores } from '../../contexts/index';
import LoginComp from '../loginComp';

const LoginPage = (): React.FC => {
  const { uiStore } = useStores();

  return useObserver(() => (
    <div>{uiStore.isLoggedIn ? 'yes ' : <LoginComp />}</div>
  ));
};

export default LoginPage;
