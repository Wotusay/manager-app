import React from 'react';

import { useStores } from '../../contexts/index';

const LoginComp = (): JSX.Element => {
  const { uiStore } = useStores();

  return (
    <div>
      <p> Login here for your page!</p>
      <button
        onClick={uiStore.handleLogin}
        className="p-5 font-semibold text-white bg-green-600 rounded-sm"
      >
        Login
      </button>
    </div>
  );
};

export default LoginComp;
