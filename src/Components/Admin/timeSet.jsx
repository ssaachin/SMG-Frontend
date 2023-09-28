import React, { useState, useEffect } from 'react';

export default function TimeSetter() {
  const [date, setDate] = useState(''); 
  const [time, setTime] = useState('');
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    // Fetch appointments data from your API endpoint
    fetch('https://web-production-42fd.up.railway.app/DisplayAppointment')
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async () => {
    const appointment = {
      date: date, // Use the correct keys for the date and time
      time: time
    };

    const apiUrl = 'https://web-production-42fd.up.railway.app/DisplayAppointment'; // Correct API endpoint URL

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
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)} 
      />

      <input
        type="time"
        id="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {appointmentList.map((appointment, index) => (
              <li key={index}>
                <ul className="px-4 py-2">{appointment.date}</ul>
                <ul className="px-4 py-2">{appointment.time}</ul>
                <ul className="px-4 py-2">{appointment.del_Id}</ul>
              </li>
            ))}
    </>
  )
}


