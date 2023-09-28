import React from 'react';
import Users from './Admin/User';
import TimeSetter from './Admin/timeSet';
import ClientForm from './Admin/clientForms';

export default function Dashboard() {
  return (
    <section className="min-h-screen p-4">
      <>
        <h1 className='text-1xl font-bold mb-5 text-gray-800'>Welcome to Dashboard, Sabin!</h1>
        <Users />
        <div className='flex gap-4 flex-col md:flex-row'>
          <TimeSetter />
          <ClientForm />
        </div>
      </>
    </section>
  );
}
