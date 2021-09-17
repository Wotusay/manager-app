import { FOAF } from '@inrupt/lit-generated-vocab-common';
import { Text, CombinedDataProvider } from '@inrupt/solid-ui-react';
import { useObserver } from 'mobx-react-lite';
import React from 'react';

import { Link } from 'react-router-dom';
import { ROUTES } from 'src/consts';

import { useStores } from '../../contexts/index';

const WorkerList = () => {
  const { workerStore } = useStores();
  const workers = workerStore.workers;

  return useObserver(() => (
    <div className="grid content-center justify-center">
      {workers.map(worker => (
        <div key={worker.link}>
          <CombinedDataProvider
            datasetUrl={worker.userProfileLink}
            thingUrl={worker.userProfileLink}
          >
            <Link to={ROUTES.workerDetail.to + worker.username}>
              <span className="text-xl font-bold mb-7">
                <Text property={FOAF.name.iri.value} />
              </span>
            </Link>
          </CombinedDataProvider>
        </div>
      ))}
    </div>
  ));
};

export default WorkerList;
