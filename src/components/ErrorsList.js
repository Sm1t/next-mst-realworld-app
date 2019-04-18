import React from 'react';

const ErrorsList = ({ errors = [] }) => (
  <ul className="error-messages">
    {errors.map((error, index) => (
      <li key={index}>{error}</li>
    ))}
  </ul>
);

export default ErrorsList;
