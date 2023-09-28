import React from 'react';
import Users from './Admin/User';
import TimeSetter from './Admin/timeSet';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-5">
      <div>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'>Welcome to Dashboard, Sabin!</h1>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Appointments</h2>
        <Users />
        <TimeSetter />
      </div>
    </div>
  );
}
