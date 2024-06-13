// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EarthQuakeList from './components/EarthQuakeList';
import LeafletMap from './components/LeafletMap';
import { fetchData } from './apiService';
import './App.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [hoveredQuake, setHoveredQuake] = useState(null);

  useEffect(() => {
    fetchData()
      .then(data => setEarthquakes(data.features))
      .catch(error => console.error('Error fetching earthquake data:', error));
  }, []);

  const handleMouseEnter = (quake) => {
    setHoveredQuake(quake);
  };

  return (
    <div className="app flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="list-container flex-1 overflow-y-auto p-5 shadow-inner">
          <EarthQuakeList 
            earthquakes={earthquakes}
            onMouseEnter={handleMouseEnter}
          />
        </div>
        <div className="map-container flex-1">
          <LeafletMap hoveredQuake={hoveredQuake} />
        </div>
      </div>
    </div>
  );
}

export default App;
