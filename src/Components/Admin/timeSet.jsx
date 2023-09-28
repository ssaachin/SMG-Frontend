import React, { useState, useEffect } from 'react';

export default function TimeSetter() {
  const [date, setDate] = useState(''); 
  const [time, setTime] = useState('');
  const [appointmentList, setAppointmentList] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

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

  // const mockData = [
  //   {
  //     title: "Appointment 1",
  //     date: "2023-09-30",
  //     time: "10:00 AM"
  //   },
  //   {
  //     title: "Appointment 2",
  //     date: "2023-10-05",
  //     time: "02:30 PM"
  //   },
  //   {
  //     title: "Appointment 3",
  //     date: "2023-10-10",
  //     time: "09:15 AM"
  //   },
  // ];

  return (
    <section className='bg-sky-900 p-4 text-white w-2/3 rounded-md h-64 mt-4'>
      <h2 className="text-2xl mb-2 font-bold">Set Available Time</h2>
      <div className='flex gap-2'>
        <input 
          type="date"
          id="date"
          name="date"
          className='p-2 text-black rounded border border-gray-300 focus:border-blue-500 focus:outline-none'
          value={date}
          onChange={(e) => setDate(e.target.value)} 
        />

        <input
          type="time"
          id="time"
          name="time"
          className='p-2 text-black rounded border border-gray-300 focus:border-blue-500 focus:outline-none'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />


        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
        <button
          onClick={() => setRefresh((prevRefresh) => !prevRefresh)}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200"
        >
          Refresh
        </button>

      </div>
      {/* {appointmentList.map((appointment, index) => (
              <li key={index}>
                <ul className="px-4 py-2">{appointment.time_date}</ul>
              </li>
            ))} */}
      <div className='flex gap-5 mt-5'>
        {/* {mockData.map((times, index) => (
          <div key={index} className='bg-001525 text-white p-4 rounded-md'>
            <h2 className='text-lg font-semibold'>{times.title}</h2>
            <p>Date: {times.date}</p>
            <p>Time: {times.time}</p>
          </div>
        ))} */}
        {appointmentList.map((appointment, index) => (
          <div key={index} className='bg-001525 text-white p-4 rounded-md'>
            <h2 className='text-lg font-semibold'>Time id {appointment.id}</h2>
            <p>{appointment.time_date}</p>
          </div>))}
      </div>

    </section>
  )
}


// import React, { useState, useEffect } from 'react';

// export default function TimeSetter() {
//   const [date, setDate] = useState(''); 
//   const [time, setTime] = useState('');
//   const [appointmentList, setAppointmentList] = useState([]);

  
//   const handleSubmit = async () => {
//     const appointment = {
//       date: date, // Use the correct keys for the date and time
//       time: time
//     };

//     const apiUrl = 'https://web-production-42fd.up.railway.app/DisplayAppointment'; // Correct API endpoint URL

//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(appointment)
//     });

//     const data = await response.json();
//     console.log(data);
//   }

//   return (
//     <>
//       <input 
//         type="date"
//         id="date"
//         name="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)} 
//       />

//       <input
//         type="time"
//         id="time"
//         name="time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//       />

//       <button onClick={handleSubmit}>Submit</button>

//       {appointmentList.map((appointment, index) => (
//               <li key={index}>
//                 <ul className="px-4 py-2">{appointment.time_date}</ul>
//               </li>
//             ))}
//     </>
//   )
// }


