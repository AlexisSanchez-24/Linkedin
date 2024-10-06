import React from 'react';

function City({ city, temperature, condition }) {
  return (
    <div className="city">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°F</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default City;