// src/components/EarthQuakeList.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../apiService';
import EarthquakeItem from './EarthQuakeItem';
import LoadMoreButton from './LoadMoreButton';

const EarthQuakeList = ({ onMouseEnter }) => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [displayedEarthquakes, setDisplayedEarthquakes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataType, setDataType] = useState('latest'); // 'latest', 'significant'
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let params = { MMI: 1 };

      if (dataType === 'latest') {
        params = { MMI: 1 };
      } else if (dataType === 'significant') {
        params = { MMI: 5 };
      }

      console.log('Fetching data with params:', params);

      try {
        const result = await fetchData(params);
        console.log('Data fetched successfully:', result);
        setEarthquakes(result.features);
        setDisplayedEarthquakes(result.features.slice(0, 30)); // Display initial 30 items
        setCurrentIndex(0);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError('Failed to fetch earthquake data. Please try again.');
        console.error('Error fetching earthquake data:', err);
      }
    };

    getData();
  }, [dataType]);

  const loadMore = () => {
    const nextIndex = currentIndex + 30;
    setDisplayedEarthquakes([...displayedEarthquakes, ...earthquakes.slice(nextIndex, nextIndex + 30)]);
    setCurrentIndex(nextIndex);
  };

  const hasMore = currentIndex + 30 < earthquakes.length;

  const handleButtonClick = () => {
    const nextDataType = dataType === 'latest' ? 'significant' : 'latest';
    setDataType(nextDataType);
  };

  return (
    <div className="fixed left-0 top-16 bottom-0 w-1/2 overflow-y-auto p-4">
      <button 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleButtonClick}
      >
        {dataType === 'latest' ? 'Switch to Significant' : 'Switch to Latest'}
      </button>
      {error && <div className="mb-4 p-2 bg-red-500 text-white rounded">{error}</div>}
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
