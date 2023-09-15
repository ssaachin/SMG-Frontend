import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // Track login status

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginClick = async (e) => {
        e.preventDefault(); // Prevent the form from submitting

        // Define a function to send the login request
        const login = async () => {
            try {
                const response = await fetch('https://web-production-42fd.up.railway.app/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (response.ok) {
                    // Handle successful login
                    setLoggedIn(true); // Update login status
                } else {
                    // Handle login failure (e.g., display an error message)
                }
            } catch (error) {
                // Handle network or other errors
            }
        };

        // Check if both email and password are provided
        if (email && password) {
            // Call the login function
            login();
        }
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-4 bg-001525 rounded-lg shadow-lg text-white">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            {loggedIn ? (
                <p className="mb-4">You are logged in. <Dashboard /></p>
            ) : (
                <form className="sm:p-8">
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 text-white"
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">Password:</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 text-white"
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleLoginClick}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
                            type="button"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}





{/* <div>
<h1>Login</h1>
{loggedIn ? (
    <Dashboard /> // Show Dashboard component when loggedIn is true
) : (
    <form>
        <label>Email:</label>
        <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
        />
        <label>Password:</label>
        <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
        />
        <button onClick={handleLoginClick}>Log In</button>
    </form>
)}
</div> */}