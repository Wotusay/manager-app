import { FOAF } from '@inrupt/lit-generated-vocab-common';

import { useSession, CombinedDataProvider, Text } from '@inrupt/solid-ui-react';

import React, { useState } from 'react';

import { useStores } from '../../contexts/index';

const OverviewPage = () => {
  const { session } = useSession();
  const { solidStore } = useStores();
  const { webId } = session.info;
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
          <p className="font-bold text-2xl mt-10 flex gap-1 mb-7 content-center justify-center">
            {<Text property={FOAF.name.iri.value} />}
          </p>
        </div>
      </CombinedDataProvider>
      <form
        className="grid gap-7 mb-7 content-center justify-center "
        onSubmit={e => handleSubmit(e)}
      >
        <input
          placeholder="Username"
          className="border-b-2 border-gray-900"
          onChange={e => onInputChange(e)}
          required
          type="text"
          id="user-access"
        />

        <input
          type="submit"
          className="font-semibold text-white bg-indigo-700 w-44 rounded-sm p-5"
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
