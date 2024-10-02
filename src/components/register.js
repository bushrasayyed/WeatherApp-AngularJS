import React from 'react';
import '../App.css'; // Ensure to import the CSS for styles
import { Link } from 'react-router-dom';

const register = () => {
  return (
    <div className="centered-container">
      <h1>Register</h1>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Enter your username" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm your password" required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>
        <div>
          <button type="submit">Register</button>
          <div>
        <p>Have an account?</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
        </div>
      </form>
    </div>
  );
};

export default register;
