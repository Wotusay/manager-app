import { useSession } from '@inrupt/solid-ui-react';
import React, { useState } from 'react';

import { useStores } from '../../contexts/index';

const AddWorkers = (): React.FC => {
  const { session } = useSession();
  const { solidStore } = useStores();
  const [file, setFile] = useState(``);
  const [state, setState] = useState();

  const onInputChange = e => {
    setFile(
      `https://${e.target.value}.solidcommunity.net/cronos/covid/covid__info`,
    );
    return;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setState(await solidStore.readCovidData(session, file));
  };
  return (
    <>
      <p className="flex content-center justify-center gap-1 font-medium mb-7">
        {state}
      </p>
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
    </>
  );
};

export default AddWorkers;
