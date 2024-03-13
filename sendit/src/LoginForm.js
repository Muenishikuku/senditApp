import React, { useState } from 'react';

const Login = ({ setUser, navigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                // Login successful
                const user = await response.json();
                setUser(user);
                navigate(querystring());
            } else {
                // Login failed
                console.error('Login failed');
                // display an error message to the user
            }
        } catch (error) {
            console.error('Error during login:', error);
            // this will handle any network or server errors
        }
    };

    function querystring() {
        return window.location.pathname;
    }

    return (
        <div>
            {/* Login form */}
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
