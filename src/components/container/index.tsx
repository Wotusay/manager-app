import { SessionProvider } from '@inrupt/solid-ui-react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '../../consts';

import AdminProfile from '../adminProfile/index';
import Nav from '../nav';
import WorkerProfile from '../workerProfile';

const Container = (): React.FC => {
  return (
    <SessionProvider children>
      <Nav />
      <Switch>
        <Route exact path={ROUTES.workerDetail.path}>
          <WorkerProfile />
        </Route>
        <Route path={ROUTES.home}>
          <AdminProfile />
        </Route>
      </Switch>
    </SessionProvider>
  );
};

export default Container;
