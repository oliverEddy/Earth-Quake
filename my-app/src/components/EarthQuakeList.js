import React, { useEffect, useState } from 'react';
import { fetchData } from '../apiService';
import EarthquakeItem from './EarthQuakeItem';

const EarthquakeList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result.features.slice(0, 30)); // Only take the first 30 items
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      {data ? (
        <ul className="divide-y divide-gray-200">
          {data.map((quake, index) => (
            <EarthquakeItem key={index} quake={quake} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EarthquakeList;
