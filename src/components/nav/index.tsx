import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../consts/index';
import { useStores } from '../../contexts/index';
import LogOutSVG from '../Icons/Logout';
import MicrosoftSVG from '../Icons/Microsoft';

const Nav = (): React.ReactElement => {
  const { uiStore } = useStores();
  return useObserver(() => (
    <div
      className={
        !uiStore.isLoggedIn
          ? 'flex items-center justify-center h-screen bg-whiteAccent'
          : ''
      }
    >
      <div
        className={
          !uiStore.isLoggedIn
            ? 'grid content-center rounded-xl shadow-xl justify-center bg-blueAccent h-72 w-96 p-2'
            : ''
        }
      >
        <div
          className={
            !uiStore.isLoggedIn
              ? 'grid rounded-md justify-center bg-whiteAccent h-52 w-72 shadow-xl'
              : ''
          }
        >
          <div className="p-7">
            <NavLink
              className={
                uiStore.isLoggedIn
                  ? 'absolute text-2xl font-semibold text-navyBlue'
                  : 'text-xl font-semibold text-navyBlue'
              }
              to={ROUTES.home}
            >
              Cronos Covidcertifcaten
            </NavLink>
          </div>
          {uiStore.isLoggedIn ? (
            <div>
              <button
                onClick={uiStore.handleLogout}
                className="flex float-right gap-2 p-5 -mt-10 font-medium text-white shadow-xl bg-salamonPink rounded-3xl mr-7"
              >
                Logout <LogOutSVG size={24} color="#fff" />
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={uiStore.handleLogin}
                className="p-4 mb-5 font-medium text-white shadow-xl bg-appelGreen rounded-3xl"
              >
                <span className="flex gap-2">
                  Login with <MicrosoftSVG color="#fff" size={24} />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  ));
};

export default Nav;
