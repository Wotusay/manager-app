import { FOAF } from '@inrupt/lit-generated-vocab-common';

import { useSession, CombinedDataProvider, Text } from '@inrupt/solid-ui-react';
import { useObserver } from 'mobx-react-lite';

import React from 'react';

import AddWorkers from '../addWorkers/index';
import WorkerList from '../workersList/index';

const OverviewPage = () => {
  const { session } = useSession();
  const webId = session.info.webId;

  return useObserver(() => (
    <>
      <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
        <div className="flex flex-col content-center justify-center">
          <p className="flex content-center justify-center gap-1 mt-10 text-2xl font-bold mb-7">
            Workers for {<Text property={FOAF.name.iri.value} />}
          </p>
        </div>
      </CombinedDataProvider>
      <WorkerList />
      <AddWorkers />
    </>
  ));
};

export default OverviewPage;
