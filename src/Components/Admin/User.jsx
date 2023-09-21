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
    <div className="container mx-auto p-4 sm:p-8">
      <h2 className="text-2xl font-bold mb-4">Clients</h2>
      <div className="max-h-80 overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-2 sm:px-4 py-2">Name</th>
              <th className="px-2 sm:px-4 py-2">Email</th>
              <th className="px-2 sm:px-4 py-2">Massage Type</th>
              <th className="px-2 sm:px-4 py-2">Date</th>
              <th className="px-2 sm:px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td className="border px-2 sm:px-4 py-2">{`${client.first_name} ${client.last_name}`}</td>
                <td className="border px-2 sm:px-4 py-2">{client.email}</td>
                <td className="border px-2 sm:px-4 py-2">{client.massage_type}</td>
                <td className="border px-2 sm:px-4 py-2">{client.date}</td>
                <td className="border px-2 sm:px-4 py-2">{client.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
