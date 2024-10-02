import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>This is Home page</h1>
      <Link to="/about">
        <button>About Page</button>
      </Link>
      <Link to="/contact" style={{ marginLeft: '10px' }}>
        <button>Contact Page</button>
      </Link>
    </div>
  )
}
