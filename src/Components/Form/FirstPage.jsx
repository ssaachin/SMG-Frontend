import React, { useState } from 'react';

function FirstForm({ onNext, setFormData, formData }) {

  const { firstName, lastName, email } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the formData in the parent component
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  // let btnDisable = !formData ? 

  const isFormValid = firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '';



  return (
    <div className="container bg-00233d text-white rounded mx-auto p-7">
      <h1 className="text-2xl font-semibold mb-4">Step 1: Personal Information</h1>
      <div onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields for personal information */}
        <div className="flex flex-col">
          <label htmlFor="firstname" className="mb-2 text-lg">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            placeholder="Your First Name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className="mb-2 text-lg">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            placeholder="Your Last Name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <div className="flex justify-end">
          <button
            // type="submit"
            onClick={onNext}
            disabled={!isFormValid}
            className={!isFormValid ? "bg-gray-600 text-white py-2 px-4 rounded-lg" : "bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstForm;
