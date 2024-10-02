import React from 'react'

export default function listEmp() {
    const employees = [
        { id: 1, name: 'Alice Johnson' },
        { id: 2, name: 'Bob Smith' },
        { id: 3, name: 'Charlie Brown' },
        { id: 4, name: 'Diana Prince' },
        { id: 5, name: 'Ethan Hunt' },
      ];
  return (
    <div>
       <h1>Employee List</h1>
      <ol>
        {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ol>
    </div>
  )
}
