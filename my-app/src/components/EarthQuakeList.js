// src/components/EarthQuakeList.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../apiService';
import EarthquakeItem from './EarthQuakeItem';
import LoadMoreButton from './LoadMoreButton';

const EarthQuakeList = ({ earthquakes, onMouseEnter }) => {
  const [displayedEarthquakes, setDisplayedEarthquakes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedEarthquakes(earthquakes.slice(0, 30)); // Display initial 30 items
  }, [earthquakes]);

  const loadMore = () => {
    const nextIndex = currentIndex + 30;
    setDisplayedEarthquakes([...displayedEarthquakes, ...earthquakes.slice(nextIndex, nextIndex + 30)]);
    setCurrentIndex(nextIndex);
  };

  const hasMore = currentIndex + 30 < earthquakes.length;

  return (
    <div>
      <ul>
        {displayedEarthquakes.map((quake, index) => (
          <li
            key={index}
            onMouseEnter={() => onMouseEnter(quake)}
            className="p-2 border-b border-gray-300 hover:bg-gray-100"
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
