// import React, { useState } from 'react';

// function SecondForm({ onNext, onBack, setFormData, formData, submitFormData }) {
//   const { massageType, date, time } = formData;
//   const [response, setResponse] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     submitFormData(formData, onNext);

//     // const formData = {
//     //   firstName: formData.firstName,
//     //   lastName: formData.lastName,
//     //   email: formData.email,
//     //   massageType: formData.massageType,
//     //   date: formData.date,
//     //   time: formData.time,
//     // };

//     //     fetch('/api/submit', {
//     //       method: 'POST',
//     //       headers: {
//     //         'Content-Type': 'application/json',
//     //       },
//     //       body: JSON.stringify(formData),
//     //     })
//     //       .then((response) => response.json())
//     //       .then((data) => {
//     //         setResponse(data.message);
//     //       })
//     //       .catch((error) => {
//     //         console.error(error);
//     //     });
//   };

//   console.log(response)

//   const isFormValid = massageType.trim() !== '' && date.trim() !== '' && time.trim() !== '';

//   return (
//     <div className="container bg-00233d text-white rounded mx-auto p-7">
//       <h1 className="text-2xl font-semibold mb-4">Step 2: Massage Preferences</h1>
//       <div onSubmit={handleSubmit} className="space-y-4">
//         {/* Form fields for massage preferences */}
//         <div className="flex flex-col">
//           <label htmlFor="massageType" className="mb-2 text-lg">
//             Type of Massage
//           </label>
//           <select
//             id="massageType"
//             name="massageType"
//             value={massageType}
//             onChange={handleInputChange}
//             className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
//           >
//             <option value="">Select a type</option>
//             <option value="Sports Massage">Sports Massage</option>
//             <option value="Cupping">Cupping</option>
//             <option value="Scrapping">Scrapping</option>
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="date" className="mb-2 text-lg">
//             Date
//           </label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={date}
//             onChange={handleInputChange}
//             className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="time" className="mb-2 text-lg">
//             Time
//           </label>
//           <input
//             type="time"
//             id="time"
//             name="time"
//             value={time}
//             onChange={handleInputChange}
//             className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
//           />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="button"
//             className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
//             onClick={onBack}
//           >
//             Previous
//           </button>
//           <button
//             type="submit"
//             onClick={() => submitFormData(formData, onNext)}
//             disabled={!isFormValid}
//             className={!isFormValid ? "bg-gray-600 text-white py-2 px-4 rounded-lg" : "bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SecondForm;


import React, { useState, useEffect } from 'react';

function SecondForm({ onNext, onBack, setFormData, formData, submitFormData }) {
  const [appointmentList, setAppointmentList] = useState([]);


  const { massageType, time_date} = formData; // Remove date and time from here

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFormData(formData, onNext);
  }

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
  }, [appointmentList]);

  const isFormValid = massageType.trim() !== '' && time_date.trim() !== ''; // Remove date and time from the condition

  return (
    <div className="container bg-00233d text-white rounded mx-auto p-7">
      <h1 className="text-2xl font-semibold mb-4">Step 2: Massage Preferences</h1>
      <div onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields for massage preferences */}
        <div className="flex flex-col">
          <label htmlFor="massageType" className="mb-2 text-lg">
            Type of Massage
          </label>
          <select
            id="massageType"
            name="massageType"
            value={massageType}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          >
            <option value="">Select a type</option>
            <option value="Sports Massage">Sports Massage</option>
            <option value="Cupping">Cupping</option>
            <option value="Scrapping">Scrapping</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="time_date" className="mb-2 text-lg">
            Time and Date
          </label>
          <select
            id="time_date"
            name="time_date"
            value={time_date}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          >
            {appointmentList.map((appointment, index) => (
              <option key={index} value={`${appointment.time_date}`}>
                {appointment.time_date}
              </option>
            ))}
          </select>
        </div>


        <div className="flex justify-between">
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
            onClick={onBack}
          >
            Previous
          </button>
          <button
            type="submit"
            onClick={() => submitFormData(formData, onNext)}
            disabled={!isFormValid}
            className={!isFormValid ? "bg-gray-600 text-white py-2 px-4 rounded-lg" : "bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondForm;
