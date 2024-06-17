import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SubHeading from './components/SubHeading';
import EarthQuakeList from './components/EarthQuakeList';
import LeafletMap from './components/LeafletMap';
import './App.css'; // Importing the CSS file

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [hoveredQuake, setHoveredQuake] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (quake) => {
    setHoveredQuake(quake);
  };

  return (
    <div className="app flex flex-col h-screen">
      <Header />
      <SubHeading setEarthquakes={setEarthquakes} />
      <div className="flex flex-1 mt-16 md:mt-16">
        <div className="list-container flex-1 overflow-y-auto p-0 shadow-inner w-full md:w-1/2">
          <EarthQuakeList 
            earthquakes={earthquakes}
            onMouseEnter={handleMouseEnter}
          />
        </div>
        {!isMobile && (
          <div className="map-container flex-1 md:w-1/2">
            <LeafletMap hoveredQuake={hoveredQuake} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
