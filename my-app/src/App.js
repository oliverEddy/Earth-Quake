// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EarthQuakeList from './components/EarthQuakeList';
import Map from './components/Map';
import { fetchData } from './apiService';
import './App.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => setEarthquakes(data.features))
      .catch(error => console.error('Error fetching earthquake data:', error));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="w-1/2 overflow-y-auto p-4">
          <EarthQuakeList earthquakes={earthquakes} />
        </div>
        <div className="w-1/2 p-4">
          <div className="sticky top-0 h-full border-2 border-gray-300 rounded-lg shadow-md">
            <Map earthquakes={earthquakes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
