import React, { useState } from 'react';

export default function UsestateDemo() {
    const [count, setCount] = useState(0);

  // Function to increase the counter by 1
  const increment = () => {
    setCount(count + 1); // Update the state using the setCount function
  };
  return (
    <div>
      <h1>Simple Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
