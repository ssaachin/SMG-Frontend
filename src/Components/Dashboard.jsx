import React from 'react';
import Users from './Admin/User';
import TimeSetter from './Admin/timeSet';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex justify-center">
      <div>
        <Users />
        <TimeSetter />
      </div>
    </div>
  );
}
