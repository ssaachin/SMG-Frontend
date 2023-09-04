import React from 'react';
import Navbar from './Components/NavBar';
import HeroImage from './Components/HeroImage';
import Treatments from './Components/Treatments';
// import Contact from './Components/contact';


function App() {
  return (
    <div className="">
      <Navbar />
      <HeroImage />
      <Treatments />
      {/* <Contact /> */}
    </div>
  );
}

export default App;


// import React, { useState } from 'react';

// function App() {
//   const [customer, setCustomer] = useState('');
//   const [order, setOrder] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create an object with all the input data
//     const formData = {
//       customer,
//       order,
//       quantity,
//       address,
//       phoneNumber,
//     };

//     // Make a POST request to your Flask API
//     fetch('/api/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setResponse(data.message);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h1>Simple Input API</h1>
//       <h2>Customer Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Customer:
//           <input
//             type="text"
//             value={customer}
//             onChange={(e) => setCustomer(e.target.value)}
//           />
//         </label>
//         <label>
//           Order:
//           <input
//             type="text"
//             value={order}
//             onChange={(e) => setOrder(e.target.value)}
//           />
//         </label>
//         <label>
//           Quantity:
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//           />
//         </label>
//         <label>
//           Address:
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </label>
//         <label>
//           Phone Number:
//           <input
//             type="text"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h3>Response from API:</h3>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// }

// export default App;


