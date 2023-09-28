import React from 'react';
import tick from "../../Img/confirm-tick.png"

function ThirdForm({ formData }) {
  return (
    <div className="container flex flex-col items-center justify-center bg-00233d text-white rounded mx-auto p-7">
    <h1 className="text-2xl font-semibold mb-4">Massage Booked!</h1>
    <img src={tick} alt='tick' style={{ width: '120px', height: '120px' }} /> 
    <p>Hey {formData.firstName}</p>
    <p>You have booked {formData.massageType} for {formData.time_date}</p>
    <p>A confirmation will be sent to your email</p>
    <p>Thank you</p>
  </div>
  );
}

export default ThirdForm;