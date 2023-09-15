import React from 'react';
import Logo from "../Img/NewLogo.png";
import { Link } from 'react-router-dom'; // Import Link from React Router

export default function Navbar() {
    return (
      <nav className="bg-001525 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-20 h-22" />
  
          <ul className="flex items-center text-white gap-4">
            {/* Use Link component to navigate to /dashboard */}
            <li><Link to="/dashboard" className="hover:text-red-600">About</Link></li>
            <li href="#treatments" className="hover:text-red-600">Pricing</li>
            <li className="hover:text-red-600">Contact</li>
          </ul>
        </div>
      </nav>
    );
}



