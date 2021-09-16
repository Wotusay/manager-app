import { useSession, LogoutButton } from '@inrupt/solid-ui-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../consts/index';

import LoginForm from '../LoginForm';

const Nav = (): JSX.Element => {
  const { session, sessionRequestInProgress } = useSession();

  return (
    <>
      <div>
        {!sessionRequestInProgress && session.info.isLoggedIn && (
          <LogoutButton
            onError={console.error}
            onLogout={() => window.location.reload()}
          >
            <p className="float-right p-5 font-semibold text-white bg-red-600 rounded-sm">
              Logout
            </p>
          </LogoutButton>
        )}

        {!sessionRequestInProgress && !session.info.isLoggedIn && <LoginForm />}
      </div>
      <div className="text-xl font-semibold p-7">
        <NavLink className="text-xl font-semibold " to={ROUTES.home}>
          Cronos Covidcertifcaten
        </NavLink>
      </div>
    </>
  );
};

export default Nav;
