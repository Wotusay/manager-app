import { SessionProvider } from '@inrupt/solid-ui-react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '../../consts';

import AdminProfile from '../adminProfile/index';
import Nav from '../nav';

const Container = (): React.FC => {
  return (
    <SessionProvider children>
      <Nav />
      <Switch>
        <Route path={ROUTES.home}>
          <AdminProfile />
        </Route>
      </Switch>
    </SessionProvider>
  );
};

export default Container;