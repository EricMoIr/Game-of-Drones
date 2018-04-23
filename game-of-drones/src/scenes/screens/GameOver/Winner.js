import React from 'react';

const Winner = ({name, time, className}) => (
  <tr className={className}>
    <td>{name}</td>
    <td>{time.toLocaleDateString() + " " + time.toLocaleTimeString()}</td>
  </tr>
);
export default Winner;