import React, { useState } from 'react';
import FirstForm from "./Form/FirstPage";
import SecondForm from "./Form/SecondPage";
import ThirdForm from "./Form/ThirdPage";
// import tick from "../Img/confirm-tick.png"

export default function HeroImage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [massageType, setMassageType] = useState('')
  const [time_date, setTimeDate] = useState('');
  const [response, setResponse] = useState('');
  const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        massageType: "",
        time_date: ""
  }); 

  const submitFormDataToDatabase = (formData, callback) => {
    console.log('Form Data:', formData);
  
    fetch('https://web-production-42fd.up.railway.app/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.message);
  
        callback();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  let formToRender;

  if (currentStep === 1) {
    formToRender = <FirstForm onNext={nextStep} setFormData={setFormData} formData={formData}/>;
  } else if (currentStep === 2) {
    formToRender = <SecondForm
        onNext={nextStep}
        onBack={prevStep}
        setFormData={setFormData}
        formData={formData}
        submitFormData={(data, callback) =>
          submitFormDataToDatabase(data, callback)
        }
      />;
  } else if (currentStep === 3) {
    formToRender = <ThirdForm formData={formData} />;
  }
  
  return (
    <section className="relative bg-001525 flex flex-col justify-end items-center p-10 gap-5 sm:flex-row">
      <div className="w-full sm:w-3/5 p-10 text-white">
        <header className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          SMG Therapy
        </header>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button type="submit" className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-a20302 transition duration-300 ease-in-out">
          Treatments
        </button>
      </div>
      <div className="w-full sm:w-2/5 rounded relative z-10">
        {formToRender}
      </div>
      <div className="bg-white w-full h-20 absolute bottom-0 right-0"></div>
    </section>
  );
}
