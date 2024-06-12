// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EarthQuakeList from './components/EarthQuakeList';
import Map from './components/Maps'; // Fixed import (singular Map)
import { fetchData } from './apiService'; // Updated function name to match apiService.js
import './App.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => setEarthquakes(data.features))
      .catch(error => console.error('Error fetching earthquake data:', error));
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="map-container">
          <Map earthquakes={earthquakes} />
        </div>
        <div className="list-container">
          <EarthQuakeList earthquakes={earthquakes} />
        </div>
      </div>
    </div>
  );
}

export default App;
