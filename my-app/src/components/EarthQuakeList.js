import React, { useState, useEffect } from 'react';
import EarthquakeItem from './EarthQuakeItem';
import LoadMoreButton from './LoadMoreButton';
import '../App.css'; 

const EarthQuakeList = ({ onMouseEnter, earthquakes }) => {
  const [displayedEarthquakes, setDisplayedEarthquakes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedEarthquakes(earthquakes.slice(0, 30)); 
    setCurrentIndex(0);
  }, [earthquakes]);

  const loadMore = () => {
    const nextIndex = currentIndex + 30;
    setDisplayedEarthquakes([...displayedEarthquakes, ...earthquakes.slice(nextIndex, nextIndex + 30)]);
    setCurrentIndex(nextIndex);
  };

  const hasMore = currentIndex + 30 < earthquakes.length;

  return (
    <div className="fixed left-0 top-48 md:top-28 bottom-0 w-full sm:w-1/2 overflow-y-auto p-4 bg-background hide-scrollbar">
      <ul>
        {displayedEarthquakes.map((quake, index) => (
          <li
            key={index}
            onMouseEnter={() => onMouseEnter(quake)}
            className="list-item"
          >
            <EarthquakeItem quake={quake} />
          </li>
        ))}
      </ul>
      {hasMore && <LoadMoreButton onClick={loadMore} hasMore={hasMore} />}
    </div>
  );
};

export default EarthQuakeList;
