import React from 'react';

const Worker = ({ worker }: { worker: any }): JSX.Element => {
  return (
    <div
      className={`p-6 text-xl text-white font-regular rounded-2xl shadow-xl ${
        !worker.unknown ? 'bg-oceanBlue' : 'bg-unkownColor'
      }`}
    >
      <p> {worker.username}</p>
    </div>
  );
};

export default Worker;
