import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../consts/index';
import { useStores } from '../../contexts/index';

const Nav = (): React.FC => {
  const { uiStore } = useStores();
  return useObserver(() => (
    <>
      {uiStore.isLoggedIn ? (
        <div>
          <button
            onClick={uiStore.handleLogout}
            className="float-right p-5 font-semibold text-white bg-red-600 rounded-sm"
          >
            Logout
          </button>
        </div>
      ) : (
        ''
      )}
      <div className="text-xl font-semibold p-7">
        <NavLink className="text-xl font-semibold " to={ROUTES.home}>
          Cronos Covidcertifcaten
        </NavLink>
      </div>
    </>
  ));
};

export default Nav;
