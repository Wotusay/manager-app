import { FOAF } from '@inrupt/lit-generated-vocab-common';

import { useSession, CombinedDataProvider, Text } from '@inrupt/solid-ui-react';

import React, { useState } from 'react';

import { useStores } from '../../contexts/index';

const OverviewPage = () => {
  const { session } = useSession();
  const { solidStore } = useStores();
  const webId = session.info.webId;
  const [user, setUser] = useState('');
  const [file, setFile] = useState(
    `https://${user}.solidcommunity.net/cronos/covid/covid__info`,
  );

  const [items, setItems] = useState([]);

  const onInputChange = e => {
    setUser(e.target.value);
    setFile(`https://${user}.solidcommunity.net/cronos/covid/covid__info`);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFile(`https://${user}.solidcommunity.net/cronos/covid/covid__info`);
    try {
      const listItems = await solidStore.readCovidData(session, file);
      setItems(listItems);
    } catch (error) {
      return;
    }
  };
  return (
    <>
      <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
        <div className="flex flex-col content-center justify-center">
          <p className="flex content-center justify-center gap-1 mt-10 text-2xl font-bold mb-7">
            {<Text property={FOAF.name.iri.value} />}
          </p>
        </div>
      </CombinedDataProvider>
      <form
        className="grid content-center justify-center gap-7 mb-7 "
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Username"
          className="border-b-2 border-gray-900"
          onChange={onInputChange}
          required
          type="text"
          id="user-access"
        />

        <input
          type="submit"
          className="p-5 font-semibold text-white bg-indigo-700 rounded-sm w-44"
          value="Show information"
        />
      </form>
      {items.map(information => (
        <p key={information}> {information} </p>
      ))}
    </>
  );
};

export default OverviewPage;
