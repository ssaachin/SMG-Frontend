// import React from 'react';

// export default function Dashboard() {
//   const clients = [
//     {
//       "first_name": "Sachin",
//       "last_name": "Gurung",
//       "email": "sachin@gmail.com",
//       "massageType": "cupping",
//       "date": "something",
//       "time": "time"
//     },
//     {
//       "first_name": "Sachisn",
//       "last_name": "Gurung",
//       "email": "sachin@gmail.com",
//       "massageType": "cupping",
//       "date": "something",
//       "time": "time"
//     },
//     {
//       "first_name": "Sachsdin",
//       "last_name": "Gurung",
//       "email": "sachin@gmail.com",
//       "massageType": "cupping",
//       "date": "something",
//       "time": "time"
//     },
//     {
//       "first_name": "Sachiaan",
//       "last_name": "Gurung",
//       "email": "sachin@gmail.com",
//       "massageType": "cupping",
//       "date": "something",
//       "time": "time"
//     }
//   ];

//   return (
//     <div>
//       <h2>Clients</h2>
//       <ul>
//         {clients.map((client, index) => (
//           <li key={index}>
//             <h3>{`${client.first_name} ${client.last_name}`}</h3>
//             <p>Email: {client.email}</p>
//             <p>Massage Type: {client.massageType}</p>
//             <p>Date: {client.date}</p>
//             <p>Time: {client.time}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


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
