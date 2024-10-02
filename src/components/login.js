import React from 'react'
import { Link } from 'react-router-dom';

import '../App.css'; // Import the CSS file

export default function login() {
  return (
    <div>
       <h1>Login</h1>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email"  />
        </div>
        <div>
          <label>Password:</label>
          <input type="password"  />
        </div>
        <div>
          <button type="submit">Login</button>
          <div>
        <p>Don't have an account?</p>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
        </div>
      </form>
    </div>
  )
}


