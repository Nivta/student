import React from 'react';
import Student from './Student';

export default function Dashboard({ studentsArr }) {
  return (
    <table>
      <tbody>
        {studentsArr.map(student => (
          <tr>
            <Student data={student} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
