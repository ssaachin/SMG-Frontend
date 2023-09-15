import React from 'react';
import Navbar from './NavBar';
import HeroImage from './HeroImage';
import Treatments from './Treatments';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroImage />
      <Treatments />
    </div>
  );
}