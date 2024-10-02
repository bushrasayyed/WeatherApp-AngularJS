import React from 'react'

export default function listStud() {
    const students = [
        { id: 1, name: 'Aliya Shaikh' },
        { id: 2, name: 'John Smith' },
        { id: 3, name: 'Bashir Johnson' },
        { id: 4, name: 'Cookie Brown' },
        { id: 5, name: 'Sarah Davis' },
      ];
  return (
    <div>
       <h1>Student List</h1>
      <ol>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ol>
    </div>
  )
}
