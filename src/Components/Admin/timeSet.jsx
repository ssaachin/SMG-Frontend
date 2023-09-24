import React, { useState } from 'react';

export default function TimeSetter() {
  const [date, setDate] = useState(''); 
  const [time, setTime] = useState('');

  const handleSubmit = async () => {
    const appointment = {
      date: date, // Use the correct keys for the date and time
      time: time 
    };

    const apiUrl = '/api/appointment'; // Correct API endpoint URL

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointment)
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <input 
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)} 
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
