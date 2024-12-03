import React from 'react';

export default function Student({ data }) {
  return (
    <>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.major}</td>
      <td>{data.university}</td>
      <td>{data.averageGrade}</td>
    </>
  );
}
