import React, { useState } from 'react';
import Header from './components/Header';
import SubHeading from './components/SubHeading';
import EarthQuakeList from './components/EarthQuakeList';
import LeafletMap from './components/LeafletMap';
import './App.css';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [hoveredQuake, setHoveredQuake] = useState(null);

  const handleMouseEnter = (quake) => {
    setHoveredQuake(quake);
  };

  return (
    <div className="app flex flex-col h-screen">
      <Header />
      <SubHeading setEarthquakes={setEarthquakes} />
      <div className="flex flex-1">
        <div className="list-container flex-1 overflow-y-auto p-0 shadow-inner">
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
