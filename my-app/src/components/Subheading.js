import React, { useState, useEffect } from 'react';
import { fetchData } from '../apiService';
import '../App.css'; // Ensure this file contains the CSS definitions

const SubHeading = ({ setEarthquakes }) => {
  const [dataType, setDataType] = useState('latest');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let params = { MMI: 1 };

      if (dataType === 'latest') {
        params = { MMI: 1 };
      } else if (dataType === 'significant') {
        params = { MMI: 5 };
      }

      try {
        const result = await fetchData(params);
        setEarthquakes(result.features);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError('Failed to fetch earthquake data. Please try again.');
      }
    };

    getData();
  }, [dataType, setEarthquakes]);

  const handleButtonClick = () => {
    const nextDataType = dataType === 'latest' ? 'significant' : 'latest';
    setDataType(nextDataType);
  };

  const title = dataType === 'latest' ? 'Latest Earthquakes' : 'Significant Earthquakes';

  return (
    <div className="bg-white text-primary p-4 fixed w-1/2 z-10 shadow-lg h-32 md:h-16" style={{ top: '4rem' }}>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-4 xl:px-8">
        <h2 
          className="text-primary text-xl font-semibold truncate mb-4 md:mb-0" 
          style={{ minWidth: '218px', textAlign: 'center' }}
        >
          {title}
        </h2>
        <button 
          className="px-4 py-2 bg-primary text-textLight rounded whitespace-nowrap md:ml-4" 
          onClick={handleButtonClick}
          style={{ minWidth: '180px', textAlign: 'center' }}  // Fixed width to prevent resizing
        >
          {dataType === 'latest' ? 'Switch to Significant' : 'Switch to Latest'}
        </button>
      </div>
      {error && <div className="absolute bottom-0 left-0 mb-4 p-2 bg-red-500 text-white rounded">{error}</div>}
    </div>
  );
};

export default SubHeading;
