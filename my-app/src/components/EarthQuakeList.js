import React, { useEffect, useState } from 'react';
import { fetchData } from '../apiService';
import EarthquakeItem from './EarthQuakeItem';
import LoadMoreButton from './LoadMoreButton';

const EarthquakeList = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [displayedEarthquakes, setDisplayedEarthquakes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setEarthquakes(result.features);
        setDisplayedEarthquakes(result.features.slice(0, 30)); // Display initial 30 items
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    getData();
  }, []);

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
          <EarthquakeItem key={index} quake={quake} />
        ))}
      </ul>
      <LoadMoreButton onClick={loadMore} hasMore={hasMore} />
    </div>
  );
};

export default EarthquakeList;
