import React, { useState, useEffect } from 'react';

export default function Users() {
  const [clients, setClients] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  const handleDelete = async (appointmentId) => {
    const apiUrl = `https://web-production-42fd.up.railway.app/DeleteClient/${appointmentId}`;
    const response = await fetch(apiUrl, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      console.log('Client deleted successfully');
      setRefresh((prevRefresh) => !prevRefresh);
    } else {
      console.error('Error deleting Client:', response.status);
      // Handle the error as needed, e.g., display an error message to the user
    }
  };

  return (
    <div className="container bg-001525 mx-auto p-4 rounded-md text-white sm:p-8">
      <div className='flex items-center'>
        <h2 className="text-2xl font-bold mb-6 mr-auto">Appointments</h2>
        <button
          onClick={() => setRefresh((prevRefresh) => !prevRefresh)}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200"
        >
          Refresh
        </button>
      </div>
      
        <div className="overflow-x-auto overflow-y-scroll h-64">
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
              <tr key={index}>
                <td className="px-4 py-2">{`${client.first_name} ${client.last_name}`}</td>
                <td className="px-4 py-2">{client.email}</td>
                <td className="px-4 py-2">{client.massage_type}</td>
                <td className="px-4 py-2">{client.time_date}</td>
                <button
                  onClick={() => handleDelete(client.id)} // Pass the appointment ID to the delete function
                  className="bg-red-500 m-1 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-200"
                >
                  Delete
                </button>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}





