import React from 'react';
import Users from './Admin/User';
import TimeSetter from './Admin/timeSet';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-4">
      <div>
        <h1 className='text-1xl font-bold mb-5 text-gray-800'>Welcome to Dashboard, Sabin!</h1>
        <Users />
        <TimeSetter />
      </div>
    </div>
  );
}
