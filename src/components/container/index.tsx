import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '../../consts';
import LoginPage from '../loginPage';
import Nav from '../nav';

const Container = (): React.FC => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path={ROUTES.home}>
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
};

export default Container;
