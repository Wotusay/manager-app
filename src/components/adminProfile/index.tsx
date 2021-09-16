import { useSession } from '@inrupt/solid-ui-react';
import React from 'react';

import OverviewPage from '../overviewPage';

const AdminProfile = (): React.FC => {
  const { session } = useSession();

  return <div>{session.info.isLoggedIn && <OverviewPage />}</div>;
};

export default AdminProfile;