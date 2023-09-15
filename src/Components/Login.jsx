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
                const response = await fetch('https://web-production-42fd.up.railway.app/api/login', {
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
        <div>
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
        </div>
    );
}
