import React, { useState } from 'react';
import Logo from "../Img/NewLogo.png"

function Navbar() {
    return (
      <nav className="bg-001525 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-20 h-22" />
  
          {/* Navigation Links */}
          <ul className="flex items-center text-white gap-4">
            <li className="hover:text-red-600">About</li>
            <li className="hover:text-red-600">Pricing</li>
            <li className="hover:text-red-600">Contact</li>
          </ul>
        </div>
      </nav>
    );
  }
  
  
  
   

export default Navbar;

