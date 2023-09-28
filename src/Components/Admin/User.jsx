// import React, { useState, useEffect } from 'react';

// export default function Users() {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     // Define the URL of your Flask API endpoint
//     const apiUrl = 'https://web-production-42fd.up.railway.app/clients'; // Replace with your actual API URL

//     // Fetch data from the API
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         // Set the retrieved data in the state
//         setClients(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto p-4 sm:p-8">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Client List</h2>
//       <div className="max-h-96 overflow-x-auto bg-white rounded-lg shadow-md p-4">
//         <table className="table-auto w-full">
//           <thead>
//             <tr className="text-left">
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Massage Type</th>
//               <th className="px-4 py-2">Time and Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clients.map((client, index) => (
//               <tr
//                 key={index}
//                 className={index % 2 === 0 ? 'bg-gray-100' : ''}
//               >
//                 <td className="border px-4 py-2">{`${client.first_name} ${client.last_name}`}</td>
//                 <td className="border px-4 py-2">{client.email}</td>
//                 <td className="border px-4 py-2">{client.massage_type}</td>
//                 <td className="border px-4 py-2">{client.time_date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';

export default function Users() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Define the URL of your Flask API endpoint
    const apiUrl = 'https://web-production-42fd.up.railway.app/clients'; // Replace with your actual API URL

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved data in the state
        setClients(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container bg-001525 mx-auto p-4 rounded-md text-white sm:p-8">
        <div className="overflow-x-auto"> {/* Wrap the table in a div with overflow-x */}
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Massage Type</th>
                <th className="px-4 py-2">Time and Date</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
               <tr
                 key={index}
                 className={index % 2 === 0 ? 'bg-gray-100' : ''}
               >
                 <td className="border px-4 py-2">{`${client.first_name} ${client.last_name}`}</td>
                 <td>{client.email}</td>
                 <td>{client.massage_type}</td>
                 <td>{client.time_date}</td>
               </tr>
             ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}





