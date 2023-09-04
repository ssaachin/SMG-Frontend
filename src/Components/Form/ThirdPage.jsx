import React from 'react';

function ThirdForm({ formData }) {
  return (
    <div className="container bg-00233d text-white rounded mx-auto p-7">
      <h1 className="text-2xl font-semibold mb-4">Massage Booked!</h1>
      <p>Name: {formData.firstName} {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Massage Type: {formData.massageType}</p>
      <p>Date: {formData.date}</p>
      <p>Time: {formData.time}</p>
    </div>
  );
}

export default ThirdForm;
