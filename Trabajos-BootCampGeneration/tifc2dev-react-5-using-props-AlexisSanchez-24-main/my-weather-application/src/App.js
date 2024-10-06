import logo from './logo.svg';
import React from 'react';
import './App.css';
import City from './City';

function WeatherForecast() {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <City city="New York" temperature={75} condition="Sunny" />
      <City city="Los Angeles" temperature={80} condition="Partly Cloudy" />
    </div>
  );
}

export default WeatherForecast;
